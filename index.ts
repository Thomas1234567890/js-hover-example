// Import stylesheets
import './style.css';
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

///loop through empties
for (const item of empties)
{
  item.addEventListener('dragover', drag_over)
  item.addEventListener('dragenter', drag_enter)
  item.addEventListener('dragleave', drag_leave)
  item.addEventListener('drop', drag_drop)
}

function drag_over(e)
{
    e.preventDefault()
}

function drag_enter(e)
{
e.preventDefault();
this.className += ' hover' 
}

function drag_leave(e)
{
this.className = 'empty' 
}

function drag_drop(e)
{
  this.className = 'empty'
  this.append(fill)
}

///fill listeners
fill.addEventListener( 'dragstart', drag_start );
fill.addEventListener( 'dragend', drag_end );

function drag_start ()
{
  this.className += ' hold';
  setTimeout( ()=> (this.className += ' invisible'), 0.1 );
  
}
function drag_end() 
{
  this.className = 'fill'
}