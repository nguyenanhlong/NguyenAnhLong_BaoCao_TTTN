<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\Product;
use App\Models\ProductSale;


class ProductSaleController extends Controller
{
    public function index(){
        $ProductsSale = ProductSale::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $ProductsSale],
            200
        );

    }
    public function index_all($limit){
        $ProductsSale = ProductSale::limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $ProductsSale],
            200
        );

    }
    public function show($id)
    {
        $ProductSale = ProductSale::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $productSale],
            200
        );
    }
    public function store(Request $request)
    {
        $productSale = new ProductSale();
        $productSale->product_id = $request->product_id;
        $productSale->pricesale = $request->price_sale; //form
        $productSale->qty = $request->qty; //form
        $productSale->date_begin = Carbon::parse($request->day_begin)->format('Y-m-d H:i:s');
        $productSale->date_end = Carbon::parse($request->day_end)->format('Y-m-d H:i:s');
        $productSale->created_at = date('Y-m-d H:i:s');
        $productSale->created_by = 1;
        $productSale->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productSale],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $productSale->product_id = $request->product_id;
        $productSale->pricesale = $request->price_sale; //form
        $productSale->qty = $request->qty; //form
        $productSale->date_begin = Carbon::parse($request->day_begin)->format('Y-m-d H:i:s');
        $productSale->date_end = Carbon::parse($request->day_end)->format('Y-m-d H:i:s');
        $productSale->created_at = date('Y-m-d H:i:s');
        $productSale->created_by = 1;
        $productSale->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productSale],
            200
        );
    }
    public function getBySale(  ){
        
        $args = [['price_sale','>',0],['status','=',1]];
        $data = ProductSale::where($args)->orderBy('price_sale','DESC')->get();
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
    public function destroy($id)
    {
        $productsale=ProductSale::find($id);
        if($productsale==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $productsale->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productsale],
            200
        );
    }
}