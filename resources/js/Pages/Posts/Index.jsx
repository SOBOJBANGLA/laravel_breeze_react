import { usePage } from '@inertiajs/react'
import React from 'react'
import './style.css'

export default function Index(props) {
    const { items,pgtitle } = usePage().props
  return (
    <div>
        
        <h1>{pgtitle}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dignissimos ipsa? Repudiandae, cumque cum non commodi voluptate cupiditate sint atque, ipsum quod natus voluptatem assumenda doloribus totam aspernatur fugiat quibusdam, minima repellat delectus expedita. Sed quam quod harum quae voluptatem, nisi, optio quo inventore nobis asperiores modi libero sunt unde.</p>

        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {items.map(({ id, title, body }) => (
            <tr>
                <td>{ id }</td>
                <td>{ title }</td>
                <td>{ body }</td>
            </tr>
 ))}
        </table>
        
        
        
        </div>
  )
}
