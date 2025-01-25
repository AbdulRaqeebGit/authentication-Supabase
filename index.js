const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhteG5oeGVmdWNycGF0eXV3dHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3OTkwNDEsImV4cCI6MjA1MzM3NTA0MX0.UgrW_PPyO5VNS23OmJe5hn43Q5ZR7951V9MeyViUV9U";
const SUPABASE_URL = "https://hmxnhxefucrpatyuwtqs.supabase.co";
const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


async function handleLoginSubmit(event) {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("username", email);
    console.log("password", password);
}
async function handleSignupSubmit(event){

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("username", email);
    console.log("password", password);


    const { data, error } = await supa_base.auth.signUp({
        email,
        password,

      })
    console.log("data", data);
    console.log("error", error);
}