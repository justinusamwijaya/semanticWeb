window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
let content = document.getElementById("content");

loadPost()

function loadPost(){
    let contentToShow = [content.innerHTML]
    for(let i = 0; i < 10; i++){
        contentToShow.push(`
        <div class="col-xs-12 panel panel-default" style="min-height:400px; padding:25px;">
            <div class="panel-heading" style="background-color:rgba(0,0,0,0); height:70px; padding:0px; border:none;">
                <div class="col-xs-2" style="position:relative; height:100%">
                    <div style="position:absolute; top:20px; left:20px; width:30px; height:30px;">
                            <img class="img-responsive" alt="no image" style="max-height:100%;max-width:100%" src="others/avatar-1295429_1280.png">
                    </div>
                </div>
                <div class="col-xs-5" style="padding:15px;">
                    <label>Name Lengkap Pul Pul</label>
                    <p>Minggu, 02:15 am</p>
                </div>
            </div>
            <div class="panel-content" style="padding:25px;">
                <div class="jumbotron" style="background-color:rgba(0,0,0,0)">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis porta ex. Fusce vitae commodo lorem. Curabitur sollicitudin, mauris ultricies ornare porttitor, massa mauris mollis magna, nec ornare augue enim at quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum purus felis, egestas nec dolor eget, mollis scelerisque justo. Vivamus purus neque, porttitor eget est ut, tincidunt suscipit elit. Praesent scelerisque blandit nibh, sed pharetra arcu imperdiet in. Nam elementum ante non tempor convallis.
                    </p>
                </div>
            </div>
        </div>`)
    }
    
    content.innerHTML = contentToShow.join("")
}


let menus = document.querySelectorAll(".menus");

for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function() {
    let current = document.querySelector(".active");
    if(current)current.className = current.className.replace(" active", "");
    this.className += " active";
  });
}


window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop === document.documentElement.scrollHeight-window.innerHeight)loadPost()
})
