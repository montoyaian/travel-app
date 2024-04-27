export const storage={
    get(key) {
        const val = window.localStorage.getItem(key);
        if (!val) {
          return null;
        }
        try {
          return JSON.parse(val);
        } catch (e) {
          // Manejo de errores: devolver null o manejar el error según tus necesidades.
          return null;
        }
    },
    set(key,val){
        window.localStorage.setItem(key,JSON.stringify(val))

    },
    remove(key){
        window.localStorage.removeItem(key)
        
    },
    clear(){
        window.localStorage.clear()
    }
}

export default storage;
