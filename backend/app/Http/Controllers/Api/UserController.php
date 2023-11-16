<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index($roles){
        $args = [['roles','=',$roles]];
        $users = User::where($args)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $users],
            200
        );

    }
    public function show($id)
    {
        $user = User::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $user],
            200
        );
    }
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name; //form

      
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = $request->password;


        $user->username = $request->username;
        $user->address = $request->address;
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            201
        );

        
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name; //form

      
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = $request->password;

        $user->username = $request->username;
        $user->address = $request->address;
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            201
        );
    }
    public function destroy($id)
    {
        $user=User::find($id);
        if($user==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $user->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            200
        );
    }
    public function login (Request $request){
        $username = $request->username;
        $password = $request->password;
        $args = [['username', '=', $username],['roles','=',$request->roles]];
        $data = User::where($args)->first();

        if ($data) {
            if ($data->password == $password) {
                return response()->json(
                    ['success' => true, 'message' => 'Đăng nhập thành công', 'data' => $data],
                    200
                );
            } else {
                return response()->json(
                    ['success' => false, 'message' => 'Tài khoản hoặc mật khẩu sai'],
                    200
                );
            }
        }
        return response()->json(
            ['success' => false, 'message' => 'Tài khoản hoặc mật khẩu sai'],
            200
        );
    }
}