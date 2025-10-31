/*para mobile*/
function toggleMenu(){
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
    
}
/*scroll leve*/
function scrollActive(sectionId){
    const section =document.getElementById(sectionID);

    if(!section) return;

    const headerHeight = 70;
    const sectionPosition = section.offsetTop - headerHeight;

    window.scrollTo({top: sectionPosition, behavior: "smooth"});

    const menu = document.getElementById('navMenu');
    menu.classList.remove('active');
    }

    /*cadastro*/

    function handleSubmit(event){
        event.preventDefault();

        const form = document.getElementById('volunteerForm');

        const formData = {
            nome:form.nome.value,
            email:form.email.value,
            telefone:form.telefone.value,
            idade:form.idade.value,
            disponibilidade:form.disponibilidade.value,
            areainteresse:form.areainteresse.value,
            experiencia:form.experiencia.value,
            motivacao:form.motivacao.value,
            datacadastro:new Date().toLocaleDateString()
        }

        let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);
        voluntarios.push(formData);
        localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

        const sucessMessage = document.getElementById('successMessage');
        sucessMessage.classList.add('show');
        sucessMessage.scrollIntoView({behavior: 'smooth', block:'center'});

        setTimeout(()=> form.reset(),2000);
        settimeout(() => sucessMessage.classList.remove('show'), 3000);

        exibirvoluntarios();
    }
    function exibirvoluntarios(){
        const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
        const tabelacontainer = documento.getElementById('tabelavoluntarios');

        if(!tabelacontainer) return
        if(voluntarios.lenght === 0) {
            tabelacontainer.innerhtml = <p>Nenhum voluntario cadastrado</p>;
        }
    }