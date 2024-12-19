import { useForm } from '@inertiajs/react'
import React from 'react'


export default function Create() {
    const { data, setData,errors,post} =useForm({
        title:"",
        body:""
    })

    //console.log(data)

    function handleSubmit(e) {
        e.preventDefault();
        post(route("post.store"));
        //alert('Data Sent')
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Enter Title' value={data.title} onChange={(e) =>setData("title", e.target.value)}/> <span className="text-red-600">{errors.title}</span><br />

        <textarea name="body" id="" placeholder='Enter Body' value={data.body} onChange={(e) =>setData("body", e.target.value)} /><span className="text-red-600">{errors.body}</span><br />

        <button type="submit" className="px-6 py-2 font-bold text-white bg-green-500 rounded">Save</button>

    </form>



    </>
  )
}
