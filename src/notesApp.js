// Move modified notes to the top of the list 
  
function updateNote(text => {
    //try to rearrange the most recently-modified 
    // note to be at the top
    setNotes(prevNotes=> 
        const newNotes = []
        for(let note of prevNotes){
            if(note.id === currentNoteId){
                //  if a note is being editted by the user (currentNoteId),
                // Then push that note to the top of side bar/beginning of array UNSHIFT()  
               newNotes.unshift({...note, body: text})
            } else {
                return newNotes.push(note)
            }
            
        }
        //create a new empty array
        // Loop over the original array 
            //if the id matches
                // put the updated note at the beginning of the  ew array
                //else
                //push the old note tho the end of the new array
        // reutn the new array
        
    )
  }, [notes])
  
  
  
  
  // ADD SUMMARY TO NOTES SIDEBAR

  
  <h4>{notes.body.split("/n")[0]}</h4>
  
  
  // syncing notes with local storage
  
  
  const [notes, setNotes] = useReact((
    () => JSON.parse(localStorage.getItem("notes") || [])
  )) 

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  // OR EMPTY ARRAY, if you try to get local data that dosent exist... it will come back undfined

  || [] 


