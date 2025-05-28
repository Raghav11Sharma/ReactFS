import type { Product } from "../models/Product";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"

type Props = {
    apiresponse: Product[]
}

export default function ProductDetails({ apiresponse }: Props) {


    return (
        // <div>
        //     <div className="row mb-3">
        //         <h5 className="themeFontColor text-center">
        //             Houses Currently on the Market
        //         </h5>
        //     </div>
        //     <table className="table table-hover">
        //         <thead>
        //             <tr>
        //                 <th> Id</th>
        //                 <th> Title</th>
        //                 <th>Asking Price</th>
        //                 <th>Description</th>
        //                 <th>Category</th>
        //                 <th>Image</th>


        //             </tr>
        //         </thead>
        //         <tbody>
        //             {apiresponse.map((h) => (
        //                 <tr key={h.id}>
        //                     <td>{h.id}</td>
        //                     <td> {h.title}</td>
        //                     <td> {h.price}</td>
        //                     <td> {h.description}</td>
        //                     <td> {h.category}</td>
        //                     <td> <img src={h.image} className="logo"></img></td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>

        // </div>
        <Grid container spacing={5}>
            {apiresponse.map(product => (
                <Grid size={3} display='flex' key={product.id}>
                    <Card
                        elevation={5}
                        sx={{
                            width: 600,

                            borderRadius: 9,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <CardMedia
                            sx={{ height: 300, backgroundSize: 'cover', paddingTop: 50 }}
                            image={product.image}
                            title={product.title}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                sx={{ textTransform: 'uppercase' }}
                                variant="subtitle2">
                                {product.title}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ color: 'secondary.main' }}
                            >
                                {('$' + product.price)}
                            </Typography>
                        </CardContent>
                        <CardActions
                            sx={{ justifyContent: 'space-between' }}
                        >
                            <Button
                            // onClick={() => addBasketItem({product, quantity: 1})}
                            >Add to cart
                            </Button>

                        </CardActions>
                    </Card>
                </Grid>

            ))}
        </Grid>
    )
}