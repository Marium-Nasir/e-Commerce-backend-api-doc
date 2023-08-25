const data = [
    {
    divID:"signup",
    title: `Sign Up`,
    description:`From this API user can signup in aws cognito user pool
    `,
    urlval:`https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/signup`,
    method:`POST`,
    headerVal:"None",
    reqBody:`{
        "fname":"String",
        "email":"Valid Email Address",
        "password":"String contains atlest 8-digits and must contain ateast one special character"
    }`,
    resBody:`If user already exists:
    {"error":"Failed to sign up","errorMsg":{"message":"An account with the given email already 
   exists.","code":"UsernameExistsException","[__type]":"See error.__type for 
   details.","time":"2023-08-13T01:04:05.554Z","requestId":"8b0e28fa-cf88-4110-9598-
   ec50efa36886","statusCode":400,"retryable":false,"retryDelay":47.65349783477903}}
   If user not exists:
   {"message":"User signed up 
   successfully","cognitoResponse":{"UserConfirmed":false,"CodeDeliveryDetails":{"Destination":"
   m***@g***","DeliveryMedium":"EMAIL","AttributeName":"email"},"UserSub":"64b8d448-
   f081-70e5-093b-69224aaae470"}}`
},
{
    divID:"confirmemail",
    title: `Confirm Email`,
    description:`From this API user can confirm their email address using confirmation code`,
    urlval:`https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/confirmemail`,
    method:`POST`,
    headerVal:"None",
    reqBody:`{
        "confirmationCode":"Received Code",
        "username":"Your Email Address"   
    }`,
    resBody:`If invalid code
    {"cognitoResults":{"statusCode":400,"body":"{error:Invalid 
    verification code provided, please try again.}"}
    If valid code
    {"message":"Email confirmation successful."}`
},
{
    divID:"signin",
    title: `Sign In`,
    description:`from this API user can signin in aws cognito user pool`,
    urlval:`https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/signin`,
    method:`POST`,
    headerVal:"None",
    reqBody:`{
        "username":"email address",
        "password":"password"
       }`,
    resBody:`If invalid email or password
    {"statusCode":400,"body":"{error:Incorrect username or password.}"}
    If valid email or password:
    It returns auth token`
},
{
    divID:"createproduct",
    title:"Create Product",
    description:`In this API I send access token in header and it creates product for the 
    corresponding user`,
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/addproduct",
    method:"POST",
    headerVal:`Bearer Token : Access Token`,
    reqBody:`{
        "productTitle":"Finger Rings",
        "productPrice":"350",
        "productCategory":"Jewlery",
        "productDescription":"Product Description",
        "productImage":"https://i.pinimg.com/originals/3d/0b/7d/3d0b
       7d52e9e994ac71ffc6f91cd6a082.jpg"
       }`,
    resBody:`{"productObj":{"productTitle":"Finger 
    Rings","productPrice":"350","productCategory":"Jewllery","productDescription":"Product 
    Description","productImage":"https://i.pinimg.com/originals/3d/0b/7d/3d0b7d52e9e994ac71f
    fc6f91cd6a082.jpg","userId":"64d8303a58dcbce5d00ff5ed","_id":"64d834bcff94403f10e535cd
    ","createdAt":"2023-08-13T01:41:16.916Z","updatedAt":"2023-08-13T01:41:16.916Z","__v":0}}
    `
},
{
    divID:"getallpro",
    title:"Get All Products",
    description:"From this API we can get all the products",
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/getallproduct",
    method:"GET",
    headerVal:"None",
    reqBody:`None`,
    resBody:`[{"_id":"64d834bcff94403f10e535cd","productTitle":"Finger 
    Rings","productPrice":"350","productCategory":"Jewllery","productDescription":"Product 
    Description","productImage":"https://i.pinimg.com/originals/3d/0b/7d/3d0b7d52e9e994ac71ffc
    6f91cd6a082.jpg","userId":"64d8303a58dcbce5d00ff5ed","createdAt":"2023-08-
    13T01:41:16.916Z","updatedAt":"2023-08-
    13T01:41:16.916Z","__v":0},{"_id":"64b7a5884dfc0255a8f568bb","productTitle":"Finger 
    Rings","productPrice":"300","productCategory":"Jewllery","productDescription":"Product 
    Description","productImage":"https://i.pinimg.com/originals/3d/0b/7d/3d0b7d52e9e994ac71ffc
    6f91cd6a082.jpg","createdAt":"2023-07-19T08:57:44.244Z","updatedAt":"2023-07-
    19T08:57:44.244Z","__v":0},{"_id":"64b78f5e4187be4094b78f1d","productTitle":"Finger 
    Rings","productPrice":"400","productCategory":"Jewllery","productDescription":"Product 
    Description","productImage":"https://th.bing.com/th/id/OIP.sQejLm7h3hIVjqlapEe1CgHaHa?pid
    =ImgDet&w=800&h=800&rs=1","createdAt":"2023-07-19T07:23:10.832Z","updatedAt":"2023-
    07-
    19T07:23:10.832Z","__v":0},]`
},
{
    divID:"bycat",
    title:"Get Products By Category",
    description:"Get all the products by category",
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/getproductbycategory/{category}",
    method:"GET",
    headerVal:"None",
    reqBody:"None",
    resBody:`[{"_id":"64b78a9d8786043209e1ff8e","productTitle":"Ladies Shalwar 
    Kameez","productPrice":"3000","productCategory":"Ladies 
    Dress","productDescription":"Product 
    Description","productImage":"https://th.bing.com/th/id/OIP.TA4kJLQE9QGvN4PKC_C5QwHaN
    K?pid=ImgDet&rs=1","createdAt":"2023-07-19T07:02:53.929Z","updatedAt":"2023-07-
    19T07:02:53.929Z","__v":0},{"_id":"64b78b018786043209e1ff90","productTitle":"Ladies 
    Shalwar Kameez","productPrice":"3000","productCategory":"Ladies 
    Dress","productDescription":"Product 
    Description","productImage":"https://th.bing.com/th/id/OIP.TA4kJLQE9QGvN4PKC_C5QwHaN
    K?pid=ImgDet&rs=1","createdAt":"2023-07-19T07:04:33.744Z","updatedAt":"2023-07-
    19T07:04:33.744Z","__v":0},{"_id":"64b78b268786043209e1ff92","productTitle":"Ladies 
    Shalwar Kameez","productPrice":"3000","productCategory":"Ladies 
    Dress","productDescription":"Product 
    Description","productImage":"https://i.pinimg.com/originals/fb/57/ba/fb57ba6a9575d2c3bd62
    e7df5fa43857.jpg","createdAt":"2023-07-19T07:05:10.708Z","updatedAt":"2023-07-
    19T07:05:10.708Z","__v":0},{"_id":"64b78b438786043209e1ff94","productTitle":"Ladies 
    Shalwar Kameez","productPrice":"3000","productCategory":"Ladies 
    Dress","productDescription":"Product 
    Description","productImage":"https://ik.imagekit.io/ldqsn9vvwgg/images/1649108.jpg","creat
    edAt":"2023-07-19T07:05:39.692Z","updatedAt":"2023-07-
    19T07:05:39.692Z","__v":0},{"_id":"64b78b608786043209e1ff96","productTitle":"Ladies 
    Shalwar Kameez","productPrice":"3000","productCategory":"Ladies 
    Dress","productDescription":"Product 
    Description","productImage":"https://i.pinimg.com/736x/0b/c1/89/0bc18951478a9680a85870
    b3f703c37e.jpg","createdAt":"2023-07-19T07:06:08.159Z","updatedAt":"2023-07-
    19T07:06:08.159Z","__v":0}]
    `
},
{
    divID:"category",
    title:"Get All Categories",
    description:"",
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/getallcategories",
    method:"GET",
    headerVal:"None",
    reqBody:"None",
    resBody:`["Hijab","Ladies Dress","Jewllery"]`
},
{
    divID:"updpro",
    title:"Update Product",
    description:`In this API sends access token in header and pass product’s id in the url and it 
    updates a single product which belongs to that user`,
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/updateproduct/{id}",
    method:"PATCH",
    headerVal:"Bearer Token : Access Token",
    reqBody:`{
        "productTitle":"Finger Rings",
        "productPrice":"300",
        "productCategory":"Jewlery",
        "productDescription":"Product Description",
        "productImage":"https://i.pinimg.com/originals/3d/0b/7d/3d0b7d52e9e994ac71ffc6f91c
       d6a082.jpg"
       }`,
    resBody:`Response Body For Authorized User: 
    {"productObj":{"_id":"64dcce141a9321b6093dde59","productTitle":"Finger 
    Rings","productPrice":"300","productCategory":"Jewlery","productDescription":"
    Product 
    Description","productImage":"https://i.pinimg.com/originals/3d/0b/7d/3d0b7d5
    2e9e994ac71ffc6f91cd6a082.jpg","userId":"64d22ae57f95c5a0abc30fe9","create
    dAt":"2023-08-16T13:24:36.745Z","updatedAt":"2023-08-
    16T13:25:54.106Z","__v":0},"msg":"Product Updated"}
    Response Body For Unauthorized User : 
    {"msg":"Not Authorized User"}
    `
},
{
    divID:"dltpro",
    title:"Delete Product",
    description:`In this API sends access token in header and pass products’s id in the url and it 
    deletes a single product which belongs to that user`,
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/deleteproduct/{id}",
    method:"DELETE",
    headerVal:"Bearer Token : Access Token",
    reqBody:"None",
    resBody:`Response Body For Authorized User: 
    {"productObj":{"_id":"64dcce141a9321b6093dde59","productTitle":"Finger 
    Rings","productPrice":"300","productCategory":"Jewlery","productDescriptio
    n":"Product 
    Description","productImage":"https://i.pinimg.com/originals/3d/0b/7d/3d0
    b7d52e9e994ac71ffc6f91cd6a082.jpg","userId":"64d22ae57f95c5a0abc30fe
    9","createdAt":"2023-08-16T13:24:36.745Z","updatedAt":"2023-08-
    16T13:25:54.106Z","__v":0},"msg":"Product Deleted"}
    Response Body For Unauthorized User : 
    {"msg":"Not Authorized User"}`
},
{
    divID:"createcart",
    title:"Create Cart",
    description:`In this API sends access token in header and it creates cart for the corresponding 
    user`,
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/addcart",
    method:"POST",
    headerVal:"Bearer Token : Access Token",
    reqBody:`{
        "productId":"Product _id",
        "quantity":2,
        "createdDate":"2022-04-12"
       }`,
    resBody:`{"msg":{"userId":"64d22ae57f95c5a0abc30fe9","products":[{"productId":"64b
    78d588786043209e1ffae","quantity":2,"_id":"64d4e28cd556d4d762cbcc51"}]
    ,"createdDate":"2022-04-
    12T00:00:00.000Z","_id":"64d4e28cd556d4d762cbcc50","createdAt":"2023-
    08-10T13:13:48.888Z","updatedAt":"2023-08-10T13:13:48.888Z","__v":0}}`
},
{
    divID:"getcart",
    title:"Get A Single Cart",
    description:`In this API sends access token in header and pass Cart’s id in the url and it got a 
    single cart which belongs to that user`,
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/getcarts/{id}",
    method:"GET",
    headerVal:"Bearer Token : Access Token",
    reqBody:"None",
    resBody:`Response Body For Authorized User : 
    {"msg":[{"_id":"64d4d4236db79646e027e95b","userId":{"_id":"64d22ae57f95
    c5a0abc30fe9","fname":"Marium 
    Nasir","email":"mariumnasirse@gmail.com","createdAt":"2023-08-
    08T11:45:41.568Z","updatedAt":"2023-08-
    08T11:45:41.568Z","__v":0},"products":[{"productId":{"_id":"64b78d58878604
    3209e1ffae","productTitle":"Ear 
    Rings","productPrice":"500","productCategory":"Jewllery","productDescripti
    on":"Product 
    Description","productImage":"https://th.bing.com/th/id/OIP.IDI1_LlxCFsbhff
    OHg-5bgHaJQ?pid=ImgDet&w=1600&h=2000&rs=1","createdAt":"2023-
    07-19T07:14:32.585Z","updatedAt":"2023-07-
    19T07:14:32.585Z","__v":0},"quantity":2,"_id":"64d4d4236db79646e027e95c"}
    ],"createdDate":"2022-04-12T00:00:00.000Z","createdAt":"2023-08-
    10T12:12:19.921Z","updatedAt":"2023-08-10T12:12:19.921Z","__v":0}]}
    Response Body For Unauthorized User : 
{msg:[]}
    `
},
{
    divID:"getcarts",
    title:"Get All Carts",
    description:`In this API sends access token in header and it get all the carts which belongs to 
    that user`,
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/getallcart",
    method:"GET",
    headerVal:`Bearer Token : Access Token`,
    reqBody:"None",
    resBody:`Response Body For Authorized User : 
    {"msg":[{"_id":"64d4d3f66db79646e027e957","userId":{"_id":"64d22ae57f95c
    5a0abc30fe9","fname":"Marium Nasir","userName":"a4a804a8-5011-7063-
    b159-
    a4929a0083e8","email":"mariumnasirse@gmail.com","createdAt":"2023-08-
    08T11:45:41.568Z","updatedAt":"2023-08-
    08T11:45:41.568Z","__v":0},"products":[{"productId":{"_id":"64b78d36878604
    3209e1ffac","productTitle":"Ear
    Rings","productPrice":"500","productCategory":"Jewllery","productDescripti
    on":"Product 
    Description","productImage":"https://th.bing.com/th/id/R.b3cf950ca8df4d2
    6c87bd534b9d29969?rik=SPfDHYedfW4KCg&riu=http%3a%2f%2fwww.png
    mart.com%2ffiles%2f6%2fEarring-PNGPhotos.png&ehk=6JXnC8sIbJxtYBPer2cq4jWnuIe71qezWMe%2baNF9vLM%
    3d&risl=&pid=ImgRaw&r=0","createdAt":"2023-07-
    19T07:13:58.111Z","updatedAt":"2023-07-
    19T07:13:58.111Z","__v":0},"quantity":4,"_id":"64d4d3f76db79646e027e958"}
    ],"createdDate":"2022-02-12T00:00:00.000Z","createdAt":"2023-08-
    10T12:11:35.062Z","updatedAt":"2023-08-
    10T12:11:35.062Z","__v":0},{"_id":"64d4d4236db79646e027e95b","userId":{"_i
    d":"64d22ae57f95c5a0abc30fe9","fname":"Marium 
    Nasir","userName":"a4a804a8-5011-7063-b159-
    a4929a0083e8","email":"mariumnasirse@gmail.com","createdAt":"2023-08-
    08T11:45:41.568Z","updatedAt":"2023-08-
    08T11:45:41.568Z","__v":0},"products":[{"productId":{"_id":"64b78d58878604
    3209e1ffae","productTitle":"Ear 
    Rings","productPrice":"500","productCategory":"Jewllery","productDescripti
    on":"Product 
    Description","productImage":"https://th.bing.com/th/id/OIP.IDI1_LlxCFsbhff
    OHg-5bgHaJQ?pid=ImgDet&w=1600&h=2000&rs=1","createdAt":"2023-
    07-19T07:14:32.585Z","updatedAt":"2023-07-
    19T07:14:32.585Z","__v":0},"quantity":2,"_id":"64d4d4236db79646e027e95c"}
    ],"createdDate":"2022-04-12T00:00:00.000Z","createdAt":"2023-08-
    10T12:12:19.921Z","updatedAt":"2023-08-10T12:12:19.921Z","__v":0}]}
    `
},
{
    divID:"updcart",
    title:"Update Cart",
    description:`In this API sends access token in header and pass Cart’s id in the url and it 
    updates a single cart which belongs to that user`,
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/updatecart/{id}",
    method:"PATCH",
    headerVal:"Bearer Token : Access Token",
    reqBody:`{
        "productId":"Product _id",
        "quantity":10,
        "createdDate":"2022-04-08"
       }`,
    resBody:`Response Body For Authorized User: 
    {"UpdatedData":{"_id":"64d81dab4072c1b84fffd7c2","userId":"64d22ae57f95c5a
    0abc30fe9","products":[{"productId":"64b7a5884dfc0255a8f568bb","quantity":1
    0,"_id":"64d82062c24e7751febf63d6"}],"createdAt":"2023-08-
    13T00:02:51.114Z","updatedAt":"2023-08-
    13T00:14:26.108Z","__v":0},"msg":"Cart has been updated successfully"}
    Response Body For Unauthorized User : 
    {"msg":"Not Authorized User"}`
},
{
    divID:"dltcart",
    title:"Delete Cart",
    description:`In this API sends access token in header and pass Cart’s id in the url and it deletes
    a single cart which belongs to that user`,
    urlval:"https://5bwrepvt19.execute-api.us-east-1.amazonaws.com/deletecart/{id}",
    method:"DELETE",
    headerVal:"Bearer Token : Access Token",
    reqBody:"None",
    resBody:`Response Body For Authorized User: 
    {"msg":[{"_id":"64d4d4236db79646e027e95b","userId":{"_id":"64d22ae57f95
    c5a0abc30fe9","fname":"Marium 
    Nasir","email":"mariumnasirse@gmail.com","createdAt":"2023-08-
    08T11:45:41.568Z","updatedAt":"2023-08-
    08T11:45:41.568Z","__v":0},"products":[{"productId":{"_id":"64b78d58878604
    3209e1ffae","productTitle":"Ear 
    Rings","productPrice":"500","productCategory":"Jewllery","productDescripti
    on":"Product 
    Description","productImage":"https://th.bing.com/th/id/OIP.IDI1_LlxCFsbhff
    OHg-5bgHaJQ?pid=ImgDet&w=1600&h=2000&rs=1","createdAt":"2023-
    07-19T07:14:32.585Z","updatedAt":"2023-07-
    19T07:14:32.585Z","__v":0},"quantity":2,"_id":"64d4d4236db79646e027e95c"}
    ],"createdDate":"2022-04-12T00:00:00.000Z","createdAt":"2023-08-
    10T12:12:19.921Z","updatedAt":"2023-08-10T12:12:19.921Z","__v":0}]} Cart Deleted Successfully
    Response Body For Unauthorized User : 
    {"msg":"Not Authorized User"}`
},
];

export default data;