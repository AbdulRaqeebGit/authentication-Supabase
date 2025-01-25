const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95YnJ3ZmtwYm9vZ2Jtb2l3eWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODA3NDAsImV4cCI6MjA1Mjg1Njc0MH0.N39c8Gdbgf6xp0TfmA793x5019YjAF3ZAJq2svw7kXk'

const SUPABASE_Url = 'https://oybrwfkpboogbmoiwygs.supabase.co'
const supa_base = supabase.createClient(SUPABASE_Url, SUPABASE_KEY)

async function handleLoginSubmit(event) {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("username", email);
    console.log("password", password);

    // supa_base

    
    const { data, error } = await supa_base.auth.signUp({
        email,
        password,
      })
    console.log("data", data);
    console.log("error", error);
    
}
async function handleSignupSubmit(event) {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("username", email);
    console.log("password", password);

    // supa_base

    const { data, error } = await supa_base.auth.signUp({
        email,
        password,
      })
    console.log("data", data);
    console.log("error", error);
}