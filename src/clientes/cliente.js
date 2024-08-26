import axios from "axios";

const guardar= async(producto)=>{
    const data= axios.post(`http://localhost:8082/API/v1.0/Inventario/productos`,producto)
    .then(r=>r.data)
    return data;
}

const buscarTodos= async()=>{
    const data= axios.get(`http://localhost:8082/API/v1.0/Inventario/productos`)
    .then(r=>r.data)
    return data;
}

const borrar= async(codigoBarras)=>{
    const data= axios.delete(`http://localhost:8082/API/v1.0/Inventario/productos/${codigoBarras}`)
    .then(r=>r.data)
    return data;
}

const buscarPorCodigo= async(url)=>{
    const data= axios.get(`${url}`)
    .then(r=>r.data)
    return data;
}

const actualizar= async(producto,codigoBarras)=>{
    const data= axios.put(`http://localhost:8082/API/v1.0/Inventario/productos/${codigoBarras}`,producto)
    .then(r=>r.data);
    return data;
}

//Metodos fachada
export const guardarFachada= async(producto)=>{
    return await guardar(producto);
}

export const buscarTodosFachada= async()=>{
    return await buscarTodos();
}

export const borrarFachada= async (codigoBarras)=>{
    return await borrar(codigoBarras);
}

export const buscarPorCodigoFachada= async(url)=>{
    return await buscarPorCodigo(url);

}

export const actualizarFachada= async(producto, codigoBarras)=>{
    return await actualizar(producto, codigoBarras);
}