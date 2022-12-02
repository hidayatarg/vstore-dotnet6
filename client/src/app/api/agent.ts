import axios, {AxiosResponse} from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

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
    get400Error: () => axios.get('buggy/bad-request'),
    get401Error: () => axios.get('buggy/unauthorised'),
    get404Error: () => axios.get('buggy/not-found'),
    get500Error: () => axios.get('buggy/server-error'),
    getValidationError: () => axios.get('buggy/validation-error'),
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;