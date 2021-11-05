function check(form)
{
    if(form.id.value=="tjrenffl8" && form.password.value=="1234")
    {
        alert("로그인 완료!!");
        window.location.href = "Home.html";
    }
    else
    {
        alert("로그인 실패!!")
    }
}