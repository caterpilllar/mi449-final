
import './App.css';
// import { motion } from "framer-motion";

import {TweenLite} from "gsap";


import { createClient } from '@supabase/supabase-js';
// import { hover } from '@testing-library/user-event/dist/hover';

const supabaseUrl = 'https://tnmvuhleqrqasrdlpbgi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRubXZ1aGxlcXJxYXNyZGxwYmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2Nzk5MjYsImV4cCI6MjAyOTI1NTkyNn0._HCbE90YXgDtUL8OgXUO5eD74Bl8l4kNKxXv2THg6_o';
const supabase = createClient(supabaseUrl, supabaseKey);


const API_KEY = 'YOUR_API_KEY';
const URL = `https://tastedive.com/api/similar?q=The%20Lion%20King&type=movie&k=${API_KEY}&info=1&limit=5`;

fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data.Similar.Results))
  .catch(error => console.error(error));

async function getAlbums(){
  let { data: albums } = await supabase
    .from('albums')
    .select('*');
  
    for (let album of albums){
      let albumList = document.getElementById('albums');
      albumList.innerHTML += `
      <div class='bg-cyan-100 text-cyan-400 grid gap-20 grid-cols-3'>
      <div>
      <h4>${album.artist}</h4>
      </div>
      <div>
      <h4>${album.name}</h4>
      </div>
      <div>
      <h4>${album.year}</h4>
      </div>
    </div>
      
      `;
    }
  }
  
  getAlbums();




  async function getPlaylists(){
    let { data: playlists } = await supabase
      .from('playlists')
      .select('*');
    
      for (let playlist of playlists){
        let playList = document.getElementById('playlists');
        playList.innerHTML += `
        <div class='bg-pink-100 text-pink-400 grid gap-40 grid-cols-3'>
        <div>
        <h4>${playlist.name}</h4>
        </div>
        <div>
        <h4>${playlist.genre}</h4>
        </div>
        <div>
        <h4>${playlist.length}</h4>
        </div>
      </div>
        
        `;
      }
    }
  
    getPlaylists();


const title = document.getElementById('title');

const hello = () => {
  window.alert('start animation');
}

const done = () => {
  window.alert('done');
}

TweenLite.to(title, 1, {
  backgroundColor: '#fbcfe8',
  x: 200,
  onStart: hello,
  onComplete: done
});

// TweenLite.to(title, 1, {
//   backgroundColor: '#a5f3fc',
//   x: -200
// });


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 id='title' class='p-4 m-4 text-slate-600 text-5xl font-extrabold'>MY TASTE IN MUSIC</h1>

        <h2 class='text-4xl text-cyan-700 font-bold'>Albums</h2>
        <div class='px-4 bg-cyan-200 text-cyan-500 grid gap-60 grid-cols-3'>
          <h3 class='p-4 m-4 font-bold'>artist</h3>
          <h3 class='p-4 m-4 font-bold'>album name</h3>
          <h3 class='p-4 m-4 font-bold'>year</h3>
        </div>

        <div class='mb-10 pb-5' id='albums'></div>


        <h2 class='text-4xl text-pink-700 font-bold'>Playlists</h2>
        <div class='bg-pink-200 text-pink-500 grid gap-60 grid-cols-3'>
          <h3 class='p-4 m-4 font-bold'>name</h3>
          <h3 class='p-4 m-4 font-bold'>genre</h3>
          <h3 class='p-4 m-4 font-bold'>length</h3>
        </div>

        <div class='mb-10 pb-5' id='playlists'></div>


      </header>
    </div>
  );
}

export default App;
