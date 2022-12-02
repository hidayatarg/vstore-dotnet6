import axios, {AxiosResponse, AxiosError} from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

// intercept the error when we get from api server
axios.interceptors.response.use(response => {
    return response
}, (error: AxiosError) => {
    console.log('caught by interceptor');
    return Promise.reject(error.response)
})

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body : {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body : {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => request.get('product'),
    details: (id: number) => request.get(`product/${id}`)
}

const TestErrors = {
    get400Error: () => request.get('buggy/bad-request'),
    get401Error: () => request.get('buggy/unauthorised'),
    get404Error: () => request.get('buggy/not-found'),
    get500Error: () => request.get('buggy/server-error'),
    getValidationError: () => request.get('buggy/validation-error'),
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;