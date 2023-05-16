        //Get Id's DOM
        let signUpBtn = document.getElementById('signUpBtn');
        let signInBtn = document.getElementById('signInBtn');
        let nameField = document.getElementById('nameField');
        let emailField = document.getElementById('emailField');
        let title = document.getElementById('title');

        //Sign In Button
        signInBtn.addEventListener('click', signIn);

        function signIn(e){
            e.preventDefault();
            //Animation
            nameField.style.maxHeight = "0";
            title.innerHTML = "Sign In";
            signUpBtn.classList.add("disable");
            signInBtn.classList.remove("disable");


        }


        //Sign Up Button
        signUpBtn.addEventListener('click', signUp);

        function signUp(e){
            e.preventDefault();
            //Animation
            nameField.style.maxHeight = "60px";
            title.innerHTML = "Sign Up";
            signUpBtn.classList.remove("disable");
            signInBtn.classList.add("disable");

            
        }







