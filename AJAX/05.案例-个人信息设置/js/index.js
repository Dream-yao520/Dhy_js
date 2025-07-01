/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
const creator = '耀'
axios({
    url: 'http://hmajax.itheima.net/api/settings',
    method: 'GET',
    params: {
        creator,
    }
}).then(result => {
    const userObj = result.data.data
    // 1.2 回显数据到标签上
    Object.keys(userObj).forEach(key => {
        if (key === 'avatar') {
            document.querySelector('.prew').src = userObj[key]
        } else if (key === 'gender') {
            const gRadioList = document.querySelectorAll('.gender')
            const gNum = userObj[key]
            gRadioList[gNum].checked = true
        } else {
            document.querySelector(`.${key}`).value = userObj[key]
        }
    })
})
const upload = document.querySelector('.upload')
upload.addEventListener('change', e => {
    const file = e.target.files[0]
    const fd = new FormData()
    fd.append('avatar', file)
    fd.append('creator', creator)
    axios({
        url: 'http://hmajax.itheima.net/api/avatar',
        method: 'PUT',
        data: fd,
    }).then(result => {
        console.log(result)
        const imgUrl = result.data.data.avatar
        document.querySelector('.prew').src = imgUrl
    })
})

//保存个人信息修改
document.querySelector('.submit').addEventListener('click', () => {
    const useForm = document.querySelector('.user-form')
    const useObj = serialize(useForm, { hash: true, empty: true })
    useObj.creator = creator
    useObj.gender = +useObj.gender
    axios({
        url: 'http://hmajax.itheima.net/api/settings',
        method: 'PUT',
        data: useObj
    }).then(result => {
        const toastDom = document.querySelector('.my-toast')
        const toast = new bootstrap.Toast(toastDom)
        toast.show()
    })
})