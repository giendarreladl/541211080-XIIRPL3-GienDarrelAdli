let users = [
    {id: 1, name: 'darrel', email: "darrel@gmail.com"},
    {id: 2, name: 'gien', email: "gien@gmail.com"},
  ]

module.exports = {
    index: (req, res) => {
        if(users.length > 0) {
          res.json({
              status: true,
              data: users,
              method: req.method,
              url: req.url
          })
        }else{
            res.json({
              status: false,
              message: "data masih kosong..."
            })
        }
      },
      store :  (req, res) => {
        users.push(req.body)
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data berhasil ditambahkan"
      })
      },
      udate :  (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.name = req.body.name
                user.email = req.body.email
                return user
            }
        })
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data berhasil diubah"
      })
      },
      delete :  (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data berhasil dihapus"
      })
      }
}