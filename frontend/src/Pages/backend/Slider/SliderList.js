import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import sliderservice from "../../../Services/SliderService";
import { urlImage } from "../../../Config";

function SliderList() {
    const [status_delete, setStatus_delete] = useState([]);
    const [sliders, setSlider] = useState([]);
    useEffect(function () {
        (async function () {
            await sliderservice.getAll().then(function (result) {
                setSlider(result.data.data)
            });
        })();
    }, [status_delete])
    function sliderDelete($id) {
        sliderservice.remove($id)
            .then(function (res) {
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">SLIDER</strong></div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/slider/create">
                            <FaSearchPlus />Thêm
                        </Link>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <table className="table table-bordered table-hover table-striped text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Tên Slider</th>
                            <th>Đường Dẫn</th>
                            <th>Hình Ảnh</th>
                            <th>Vị Trí</th>
                            <th>Ngày Tạo</th>
                            <th>Chức Năng</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sliders.map(function(slider,index){
                            return (<tr key={index}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{slider.id}</td>
                                <td>
                                    {slider.name}
                                </td>
                                <td>
                                    {slider.link}
                                </td>
                                <td>
                                    <img src={urlImage +'slider/'+ slider.image} width={50}/>
                                </td>
                                <td>
                                    {slider.position}
                                </td>
                                <td>
                                    {slider.created_at}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1 mr-2" to={"/admin/slider/show/" + slider.id}>
                                        <FaEye /> </Link>
                                    <Link className="btn btn-sm btn-primary me-1 mr-2" to={"/admin/slider/update/" + slider.id}>
                                        <FaEdit /> </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => sliderDelete(slider.id)}><FaTrash /></button>
                                </td>
                            </tr>);
                        }
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default SliderList;