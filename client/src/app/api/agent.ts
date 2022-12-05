import axios, {AxiosResponse, AxiosError} from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));
// intercept the error when we get from api server
axios.interceptors.response.use( async response => {
    await sleep();
    return response
}, (error: AxiosError) => {
    // ! override Axios Error here only
    const {data, status}:any = error?.response!;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErors.push(data.errors[key]);
                    }
                }
                throw modelStateErors.flat();
            }
            toast.error(data.title);
            break;
        case 404:
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            history.push({
                pathname: '/server-error',
                state: {error: data}
            });
            toast.error(data.title);
            break;
        default:
            break;
    }
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