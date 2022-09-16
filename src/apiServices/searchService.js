import * as request from '~/utils/request';

//api services sẽ sử dụng để gọi mục đích cụ thể chứ mà không 
// can thiệp vào baseURL
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('user/search', {
            params: {
                q,
                type
            }
        }
        )
        return res.data;
    } catch (error) {

    }
}