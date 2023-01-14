let contacts=[];
    function add(){
        let contact = {}
        contact.name =prompt("Enter the name");
        contact.phone =prompt("Enter the phone");
        contacts.push(contact);
        confirm("If you want to Add another contact or search click on their buttons in home page")
    }
    
    function search(){
        let searchkey = prompt("Please Enter key to search with: ");
        for(let i=0;i<contacts.length;i++)
        if(contacts[i].name==searchkey || contacts[i].phone==searchkey){
        alert(JSON.stringify(contacts[i]));}
    }
        
                


        