const API_URL = "http://localhost:3015/api";

const fetchData = async(route,method,inputData=null)=>{    
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        const data  = await result.json();

        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const getProjects = async()=>{
    const result = await fetchData("/projects","get");
    return result;
}
const getProject= async(id)=>{
    const result = await fetchData("/projects/"+id,"get");
    return result;
}
const createProject = async(projectData)=>{
    const result = await fetchData("/projects","post",projectData);
    return result;
}


export {
    getProjects,
    getProject,
    createProject,
}