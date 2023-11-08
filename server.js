// const http = require("http");

// const server = http.createServer((request, respone)=>{
//     // console.log("darrel pro")
//     respone.end("darrel pro")
// })

// //default addres => localhost or 127.0.0.1
// port = 8080;
// server.listen(8080, ()=>{
//     console.log(`server sudah hidup...${port}`);
// });





//////////////////////////////////////////////////////////////////////////////////////////


const http = require("http");

const data = [
    {id: 1, nama: 'Gien'},
    {id: 2, nama: 'Darrel'},
    {id: 3, nama: 'Adli'}
];

const server = http.createServer((req,res) => {

    const {method, url} = req;
    
    let body = [];
    
    req.on('data', (chunk) => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();
        
        let status = 404;
        const response = {
            success: false,
            results: [],
            error: ''
        };
        
        if (method === 'GET' && url === '/ambil') {
            
            status = 200;
            response.success = true;
            response.results = data;
        } else if (method === 'POST' && url === '/tambah') {
            
            const {id, nama} = JSON.parse(body);
            
            if (!id || !nama) {
                status = 400;
                response.error = 'Please add id and nama';
            } else {
                data.push({id, nama});
                status = 201;
                response.success = true;
                response.results = data;
            }
        }

        //status code & header in writeHead
        res.writeHead(status, {
            'Content-Type': 'application/json',
            'X-Powered-By': 'Node.js',
        });

        res.end(JSON.stringify(response));
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server sedang berjalan ${PORT}`);
});