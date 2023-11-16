<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Str;



class ContactController extends Controller
{
    //Get ---brand/index
    public function index()
    {

        $contacts = Contact::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'data' => $contacts],

            200

        );
    }
    // Get -brand/show
    public function show($id)
    {

        $Contact = Contact::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'data' => $Contact],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $Contact = new Contact();
        $Contact->name = $request->name; 
        $Contact->email = $request->email; 
        $Contact->phone = $request->phone; 
        $Contact->title = $request->title; 
        $Contact->content = $request->content; 
        $Contact->created_at = date('Y-m-d H:i:s');
        $Contact->created_by = 1;
        $Contact->status = $request->status; //form
        $Contact->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'data' => $Contact],
            201
        );
    }
    //Contact-update
    public function update(Request $request, $id)
    {

        $Contact = Contact::find($id);
        $Contact->name = $request->name; 
        $Contact->email = $request->email; 
        $Contact->phone = $request->phone; 
        $Contact->title = $request->title; 
        $Contact->content = $request->content; 
        $Contact->created_at = date('Y-m-d H:i:s');
        $Contact->created_by = 1;
        $Contact->status = $request->status; //form
        $Contact->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'data' => $Contact],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $Contact = Contact::find($id);
        if ($Contact == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $Contact->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'data' => $Contact], 200);

    }

}