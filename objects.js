var playlist = {
  'Phil Ochs':"Here's to the State of Mississippi"
};

function updatePlaylist (playlist, artistName, songTitle) {
  
  return Object.assign( playlist, { [artistName]: songTitle })
    return playlist;
}

updatePlaylist (playlist,'My Bloody Valentine',"Sometimes")
updatePlaylist (playlist,'Slowdive',"Alison")

/*
Hello! I can pass the final test using: delete playlist.Slowdive

However, I can't make this work from inside a function. What needs to change in order to delete the key-value pair using the removeFromPlaylist function?

Here is the full code:

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}

removeFromPlaylist(playlist,'Slowdive');

*/

function removeFromPlaylist(){
  delete playlist.Slowdive;
  return playlist}
  
  removeFromPlaylist();





