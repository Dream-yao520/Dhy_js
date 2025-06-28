/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = '黄老板'
//封装-获取并渲染函数
function getBookList() {
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        params: {
            creator
        }
    }).then(res => {
        const bookList = res.data.data
        const htmlstr = bookList.map((item, index) => {
            return `
        <tr>
          <td>${index + 1}</td>
          <td>${item.bookname}</td>
          <td>${item.author}</td>
          <td>${item.publisher}</td>
          <td data-id = ${item.id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
          </tr>
            `
        }).join('')
        document.querySelector('.list').innerHTML = htmlstr
    })
}
//网页加载并渲染一次
getBookList()
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)
//添加图书
document.querySelector('.add-btn').addEventListener('click', () => {
    //获取新增表单元素
    const addForm = document.querySelector('.add-form')
    const bookObj = serialize(addForm, { hash: true, empty: true })
    //提交到服务器
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        method: 'POST',
        data: {
            ...bookObj,
            creator
        }
    }).then(result => {
        getBookList()
        addForm.reset()
        addModal.hide()
    })

})
document.querySelector('.list').addEventListener('click', e => {
    if (e.target.classList.contains('del')) {//判断点击的是删除按钮
        const id = e.target.parentNode.dataset.id
        axios({
            url: `http://hmajax.itheima.net/api/books/${id}`,
            method: 'DELETE'
        }).then(res => {
            getBookList()
        })
    }
})
const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)
//编辑元素绑定点击事件
document.querySelector('.list').addEventListener('click', e => {
    if (e.target.classList.contains('edit')) {//判断点击的是编辑按钮
        const id = e.target.parentNode.dataset.id
        //获取编辑表单
        axios({
            url: `http://hmajax.itheima.net/api/books/${id}`,
            method: 'GET'
        }).then(result => {
            const editForm = document.querySelector('.edit-form')
            const bookObj = result.data.data
            const keys = Object.keys(bookObj)
            keys.forEach(key => {
                editForm[key].value = bookObj[key]
            })
        })
        editModal.show()
    }
})
document.querySelector('.edit-btn').addEventListener('click', () => {
    const editForm = document.querySelector('.edit-form')
    const bookObj = serialize(editForm, { hash: true, empty: true })
    axios({
        url: `http://hmajax.itheima.net/api/books/${bookObj.id}`,
        method: 'PUT',
        data: {
            ...bookObj,
            creator
        }
    }).then(res => {
        getBookList()
        editModal.hide()
    })
})