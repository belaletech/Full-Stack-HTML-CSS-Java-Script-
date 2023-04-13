const accesskey="TOrpvitUejQ0WRB0_NbqBdJKztp4O6dbxgtxkbadXXg";

const formEl=document.querySelector("form");

const searchInputel=document.getElementById("search-input");

const searchResultsEl=document.querySelector(".search-results");

const showMoreButton=document.getElementById("show-more-button");

formEl.addEventListener("submit",(event)=>{
  event.preventDefault();
searchImages();
})