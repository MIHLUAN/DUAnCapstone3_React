import axios from 'axios';
import { history } from '../index';
import { isExpired, decodeToken } from "react-jwt";



export const confgis = {
    saveStore: (name, values) => {
        localStorage.setItem(name, values);
    },
    saveStoreJson: (name, values) => {
        //Biến thành chuỗi
        values = JSON.stringify(values);
        //Lưu vào store
        localStorage.setItem(name, values);
    },
    getStore: (name) => {
        return localStorage.getItem(name);
    },
    getStoreJson: (name) => {
        if (localStorage.getItem(name)) {
            return JSON.parse(localStorage.getItem(name));
        }
        return null;
    },
    removeStore: (name) => {
        if (localStorage.getItem(name)) {
            localStorage.removeItem(name);
        }
    },
    setStoreJSON: (name, values) => {
        //Biến thành chuỗi
        values = JSON.stringify(values);
        //Lưu vào store
        localStorage.setItem(name, values);
    },
    getStoreJSON: (name) => {
        if (localStorage.getItem(name)) {
            let content = JSON.parse(localStorage.getItem(name));
            return content;
        }
        return null;
    },
    setCookie: (value, days, name) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    clearCookie: (name) => {
        setCookie('', -1, name);
    },
    clearLocalStorage: (name) => {
        localStorage.removeItem(name);
    },
    ACCESS_TOKEN: 'accessToken',
    USER_LOGIN: 'userLogin',
}
export const { USER_LOGIN, ACCESS_TOKEN, saveStore, saveStoreJson, getStore, getStoreJson, removeStore, getStoreJSON, setCookie, getCookie, clearCookie, clearLocalStorage } = confgis;
const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjE5LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDQ1NDQwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0NjAyMDAwfQ.49m9-EoDr6zr7UOk_79hfcvJWKI_s0Wy_g40ossfl9c';
//Cấu hình cho tất các request api

export const http = axios.create({
    baseURL: 'https://shop.cyberlearn.vn',
    timeout: 60000
})

http.interceptors.request.use((configs) => {
    //Cấu hình tất cả header add thêm thuộc tính Authorization
    configs.headers = {
        ...configs.headers,
        ['Authorization']: `Bearer ${getStore(ACCESS_TOKEN)}`,
        ['TokenCybersoft']: TOKEN_CYBERSOFT
    }

    return configs;
}, (err) => {
    return Promise.reject(err);
})

// export const httpb = axios.create({
//     baseURL:'https://shop2.cyberlearn.vn'
// })
//Cấu hình cho tất cả các response api
http.interceptors.response.use((response) => {
    return response;
}, (err) => {
    //Bắt lỗi 400 hoặc 404
    if (err.response.status === 400 || err.response.status === 404) {
        //Lỗi do tham số => backend trả về 400 hoặc 404 mình sẽ xử lý
        alert('Tài khoản không hợp lệ! Yêu cầu đăng nhập lại!');
        //chuyển hướng về home
        history.push('/');
        return Promise.reject(err);
    }
    if (err.response?.status === 401 || err.response.status == 403) {
        const isMyTokenExpired = isExpired(getStore(ACCESS_TOKEN));
        if (isMyTokenExpired) {
            alert('Hết phiên đăng nhập! Yêu cầu đăng nhập lại!');
            removeStore(ACCESS_TOKEN);
            removeStore(USER_LOGIN);
            //Chuyển hướng trang dạng f5
            window.location.href = '/login';
        }
        history.push('/login');
        return Promise.reject(err);
    }
    return Promise.reject(err);
})






/* Các status code thường gặp
    200: Request gửi đi và nhận về kết quả thành
    201: request gửi đi thành công và đã được khởi tạo 
    400: bad request => request gửi đi thành công tuy nhiên không tìm thấy dữ liệu từ tham số gửi đi
    404: Not found (Không tìm thấy api đó), hoặc tương tự 400
    401: Unauthorize token không hợp lệ không có quyền truy cập vào api đó
    403: Forbinden token hợp lệ tuy nhiên chưa đủ quyền để truy cập vào api đó
    500: Error server (Lỗi xảy ra trên server có khả năng là frontend gửi dữ liệu chưa hợp lệ dẫn đến backend xử lý bị lỗi). Backend code lỗi trên server ! => Test bằng post man hoặc swagger nếu api không lỗi => front code sai, ngược lại tail fail trên post man và swagger thì báo backend fix.

*/