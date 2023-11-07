export const fetching = async () => {


    const isertdata = await fetch('http://localhost:8000/api/category/all',

        {
            method: "GET",
            headers: {
                "auth_token": localStorage.getItem("token"),

            }

        })

    const data = await isertdata.json();

    return data
}