import Swal from "sweetalert2";
import storage from "./Storage/storage";

export const show_alerta=(msj,icon) =>{
    Swal.fire({title:msj, icon:icon, buttonsStyling:true})

}

export const sendrequest = async (method, params, url, redir = '', token = true) => {
    try {
      if (token) {
        const authToken = storage.get('token')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken
      }
  
      const response = await axios({ method: method, url: url, data: params });
  
      if (method !== 'GET') {
        show_alerta(response.data.message || 'Success', 'success');
      }
  
      if (redir !== '') {
        setTimeout(() => (window.location.href = redir), 2000);
      }
  
      return response.data;
    } catch (errors) {
      let desc = '';
  
      if (errors.response && errors.response.data && errors.response.data.errors) {
        errors.response.data.errors.forEach((e) => {
          desc = desc + ' ' + e;
        });
        show_alerta(desc || 'Validation Error', 'error');
        return errors.response.data;
      } else if (errors.response && errors.response.status === 401) {
        show_alerta('Unauthorized Access', 'error');
        // Handle unauthorized access, e.g., redirect to login
      } else {
        show_alerta('An unexpected error occurred. Please try again.', 'error');
        return { error: 'An unexpected error occurred while processing your request.' };
      }
    }
  };

export const confirmation = async(name,url,redir) => {
    const alert= Swal.mixin({buttonsStyling:true})
    alert.fire({
        title:'¿Are you sure delete?'+ ' ' + name,
        icon:'question',showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Yes, delete',
        cancelButtonText:'<i class="fa-solid fa-bad"></i> Cancel'

    }).then((result => {
        if(result.isConfirmed){
            sendrequest('DELETE',{},url,redir)
        }
    }))
}

export default show_alerta