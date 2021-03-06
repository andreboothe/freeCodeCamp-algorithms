/*--
You are given a JSON object representing a part of your musical album collection. 
Each album has several properties and a unique id number as its key. 
Not all albums have complete information.

Write a function which takes an album's id (like 2548), 
a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, 
create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.
--*/
function updateRecords(id, prop, value) {
    // assumption no need to check if the id exist in collection
    if(value == ""){
      if(collection[id].hasOwnProperty(prop)){
        delete collection[id][prop];
      }
    }
    else if(prop == "tracks"){
     if(collection[id].hasOwnProperty(prop)){
       collection[id][prop].push(value);
      }else{collection[id].tracks = [value];}  
    }
    else if(prop == "album"){
      if(collection[id].hasOwnProperty(prop)){
       collection[id][prop] = value;
      }else{collection[id].album = value;}  
    }
    else if(prop == "artist"){
      if(collection[id].hasOwnProperty(prop)){
         collection[id][prop] = value;
        }else{collection[id].artist = value;} 
    }
    //pushes value unto tacks
    return collection;
  }