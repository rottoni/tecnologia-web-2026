const url = "http://localhost:5173/produtos"

async function criar (){
    try {
        const response = await fecth(url, {
            method: "POST",
            body: JSON.stringify(produto),
            headers: { "content-type" : "application/jobs"},
        });
        const data = await response.json();
        return data;
    } 
    catch (error) {
    return { msg: error.message};
    }
};

async function listar(){
    try {
        const response = await fecth(url, {});
        const data = await response.json();
        return data;
    } 
    catch (error) {
    return { msg: error.message};
    }
};

async function consultar(produto){
    try {
        const response = await fecth(`${url}/${produto.id}`, {});
        const data = await response.json();
        return data;
    } 
    catch (error) {
    return { msg: error.message};
    }
};

async function alterar(){
    try {
        const response = await fecth(`${url}/${produto.id}`, {
            method: "PUT",
            body: JSON.stringify(produto),
            headers: { "content-type" : "application/jobs"},
        });
        const data = await response.json();
        return data;
    } 
    catch (error) {
    return { msg: error.message};
    }
};

async function excluir(){
    try {
        const response = await fecth(`${url}/${produto.id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } 
    catch (error) {
    return { msg: error.message};
    }
};


export {criar, listar, consultar, alterar, excluir};