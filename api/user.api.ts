import {
    APIRequestContext,
    APIResponse
} from '@playwright/test';

export class UserAPI {

    constructor(
        private request: APIRequestContext
    ) {}

    async getUsers(): Promise<APIResponse> {

        return await this.request.get('/api/users');
    }

    async getUser(id: number): Promise<APIResponse> {

        return await this.request.get(`/api/users/${id}`);
    }

    async createUser(data: object): Promise<APIResponse> {

        return await this.request.post('/api/users', {
            data
        });
    }

    async updateUser(
        id: number,
        data: object
    ): Promise<APIResponse> {

        return await this.request.put(`/api/users/${id}`, {
            data
        });
    }

    async deleteUser(id: number): Promise<APIResponse> {

        return await this.request.delete(`/api/users/${id}`);
    }
}