<?php

namespace App\AppModules\Api\Infra\Requests\Registration;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'cpf' => 'required|numeric',
            'event_id' => 'required|exists:events,id',
        ];
    }
}
