<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index(){
        $products = Product::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $products],
            200
        );

    }
    public function index_all($limit){
        $products = Product::limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $products],
            200
        );

    }
    public function show($id)
    {
        $product = Product::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $product],
            200
        );
    }
    public function store(Request $request)
    {
        $product = new Product();
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        $product->price = $request->price; //form
        //$product->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '_back' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        $files = $request->image2;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image2 = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        
        $product->detail = $request->detail; //form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        $product->price = $request->price; //form
        //$product->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '_back' . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        $files = $request->image2;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image2 = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        
        $product->detail = $request->detail; //form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            200
        );
    }
    public function product_list($limit, $product_id = 0, $status = 1)
    {
        $listid = array();
        array_push($listid, $product_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $product_id + 0],
            ['status', '=', $status]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', $status]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $data = Product::where('status', '=', $status)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json($data, 200);
    }
    public function product_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1)>0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=',1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2)>0){
                    foreach($list_category2 as $row2){
                        array_push($listid,$row2->id);
                    }
                }
            }
        }
        $products = Product::where('status','=',1)
            ->whereIn('category_id',$listid)
            ->orderBy('created_at','DESC')->limit($limit)->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }

    public function productByCatSlug($slug, $limit, $page=1){
        $offset = ($page - 1)*$limit;
        $args=[['status','=',1],['slug','=',$slug]];
        $cat = Category::where($args)->first();
        $args_1 = [['status','=',1],['category_id','=',$cat->id]];
        $data = Product::where($args_1)->offset($offset)->limit($limit)->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'data' => $data
            ],
            200
        );
    }
    public function productBySearch(Request $request)
    {
        if ($request->search == null) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Không có',
                    'data' => null,
                ],
                200
            );
        }
        $offset = ($request->page - 1) * $request->limit;
        if ($request->limit != -1 && $request->page != -1) {
            $products = Product::where([['slug', 'like', '%' . $request->search . '%'], ['status', '=', 1]])
                ->orWhere([['name', 'like', '%' . $request->search . '%'], ['status', '=', 1]])->offset($offset)->limit($request->limit)->get();
        } else {
            $products = Product::where([['slug', 'like', '%' . $request->search . '%'], ['status', '=', 1]])
                ->orWhere([['name', 'like', '%' . $request->search . '%'], ['status', '=', 1]])->get();
        }
        $products_total = Product::where([['slug', 'like', '%' . $request->search . '%'], ['status', '=', 1]])
            ->orWhere([['name', 'like', '%' . $request->search . '%'], ['status', '=', 1]])->get();


        if (count($products) > 0) {
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Tải dữ liệu thành công',
                    'data' => $products,
                    'total_data' =>  $products_total
                ],
                200
            );
        }
        return response()->json(
            [
                'success' => false,
                'message' => 'Không có',
                'data' => null,
                'total_data' =>  null
            ],
            200
        );
    }

 /*   public function getBySale(  ){
        
        $args = [['price_sale','>',0],['status','=',1]];
        $data = Product::where($args)->orderBy('price_sale','DESC')->get();
        if(count($data)>0){
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Tải dữ liệu thành công',
                    'data' => $data,
                    
                
                ],
                200
            );
        }else{
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Tải dữ liệu thất bại',
                    'data' => null,
                ],
                200
            );
        }
    }
*/
    public function product_detail($slug){
        $product = Product::where([['slug','=',$slug],['status','=',1]])->first();
        if($product==null){
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'product' => null
                ],
                404
            );
        }
        $listid = array();
        array_push($listid, $product->category_id);
        $args_cat1 = [
            ['parent_id', '=', $product->category_id],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1)>0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=',1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2)>0){
                    foreach($list_category2 as $row2){
                        array_push($listid,$row2->id);
                    }
                }
            }
        }
        $product_other = Product::where([['id','!=',$product->id],['status','=',1]])
        ->whereIn('category_id',$listid)
        ->orderby('created_at','DESC')
        ->limit('8')
        ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'product' => $product,
                'product_other' => $product_other
            ],
            200
        );
    }
    public function getProductsByCatAndBrand($parent, $child, $page = 1, $limit, Request $request)
    {
        $listcat = array();
        if ($child == "all") {
            $category = Category::where([['slug', '=', $parent], ['status', '=', 1]])->first();
            array_push($listcat, $category->id);
            $cat_child = Category::where([['parent_id','=',$category->id],['status','=',1]])->get();
            foreach ($cat_child as $s1) {
                array_push($listcat, $s1->id);
            }
        } else {
            $category = Category::where([['slug', '=', $child], ['status', '=', 1]])->first();
            array_push($listcat, $category->id);
        }
        $offset = ($page - 1) * $limit;
        $brands = $request->all();
        if (count($brands) != 0) {
            $products = Product::where('status', 1)->whereIn('category_id', $listcat)->whereIn('brand_id', $request)->offset($offset)->limit($limit)->get();
            $products_all = Product::where('status', 1)->whereIn('category_id', $listcat)->whereIn('brand_id', $request)->get();
        } else {
            $products = Product::where('status', 1)->whereIn('category_id', $listcat)->offset($offset)->limit($limit)->get();
            $products_all = Product::where('status', 1)->whereIn('category_id', $listcat)->get();
        }


        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $products, 'data_total' => $products_all],
            200
        );
    }
    public function destroy($id)
    {
        $product=Product::find($id);
        if($product==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $product->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            200
        );
    }
    public function product_all($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $products = Product::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }

    
    
}
