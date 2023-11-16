<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str; 
use App\Http\Controllers\Api\CategoryController;

class CategoryController extends Controller
{
    //Get ---brand/index
    public function index()

    {

        $categories = Category::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $categories],

            200

        );
    }
    // Get -brand/show
    public function show($id)

    {

        $category = Category::find($id);
        if ($category == null) {
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'category' => null], 404
            );
        }
        
        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'category' => $category],

            200

        );
    }
    public function getBySlug($slug)
    {
        $args = [['slug', '=', $slug],['status','=',1]];
        $category = Category::where($args)->first();
        $category_child = Category::where([['parent_id','=',$category->id],['status','=',1]])->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $category_child],
            200
        );
    }

    //Post- them store
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name; //form
        $category->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'), $filename);
            }
        }
        
        $category->sort_order = $request->sort_order; //form
        $category->metakey = $request->metakey; //form
        $category->metadesc = $request->metadesc; //form
        $category->parent_id=$request->parent_id;
        
        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = 1;
        $category->status = $request->status; //form
        $category->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            201
        );
    }
    //category-update
    public function update(Request $request, $id)

    {

        $category = Category::find($id);

        $category->name = $request->name; //form

        $category->slug = Str::of($request->name)->slug('-');

        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'), $filename);
            }
        }
        

        $category->sort_order = $request->sort_order; //form

        $category->metakey = $request->metakey; //form

        $category->metadesc = $request->metadesc; //form
        $category->parent_id=$request->parent_id;


        $category->updated_at = date('Y-m-d H:i:s');

        $category->updated_by = 1; //takm cho =1$category->status = $request->status; //form

        $category->save(); //Luuu vao CSDL

        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'data' => $category],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $category=Category::find($id);
        if($category==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $category->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            200
        );
    }


}