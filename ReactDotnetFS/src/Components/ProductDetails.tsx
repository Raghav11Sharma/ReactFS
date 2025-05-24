import type { Product } from "../Models/Product"

type Props = {
    apiresponse :Product[]
}

export default function ProductDetails({apiresponse} : Props) {
    return (
        <div>
            <div className="row mb-3">
                <h5 className="themeFontColor text-center">
                    Houses Currently on the Market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> Id</th>
                        <th> Title</th>
                        <th>Asking Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>


                    </tr>
                </thead>
                <tbody>
                    {apiresponse.map((h) => (
                        <tr key={h.id}>
                            <td>{h.id}</td>
                            <td> {h.title}</td>
                            <td> {h.price}</td>
                            <td> {h.description}</td>
                            <td> {h.category}</td>
                            <td> <img src={h.image} className="logo"></img></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}