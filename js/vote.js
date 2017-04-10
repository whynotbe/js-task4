/**
 * Created by luzhaolin on 2017/4/8.
 */
window.onload = function(){
    createPlayers();
    clickPlayers();
    submit();
    close();
};


function createPlayers(){
    var killers = localStorage.killers.split(",");
    var civil = localStorage.civil.split(",");
    for(var i = 1; i <= localStorage.wholeNum;i++){
        if(killers.indexOf(i.toString())!=-1){
           var player = document.createElement("div");
            player.setAttribute("class","player");
            var playername = document.createElement("div");
            playername.setAttribute("class","playername");
            playername.innerHTML = "杀手";
            var playerid = document.createElement("div");
            playerid.setAttribute("class","playerid");
            playerid.innerHTML = i;
            player.appendChild(playername);
            player.appendChild(playerid);
            players = document.getElementById("players");
            players.appendChild(player);
        }
        else if (civil.indexOf(i.toString())!=-1){
            var player1 = document.createElement("div");
            player1.setAttribute("class","player");
            var playername1 = document.createElement("div");
            playername1.setAttribute("class","playername");
            playername1.innerHTML = "平民";
            var playerid1 = document.createElement("div");
            playerid1.setAttribute("class","playerid");
            playerid1.innerHTML = i;
            player1.appendChild(playername1);
            player1.appendChild(playerid1);
            players = document.getElementById("players");
            players.appendChild(player1);
        }

    }

}

function clickPlayers(){
    console.log(players.childNodes.length);
    for(var i = 0;i < players.childNodes.length;i++){
        players.childNodes[i].onclick = function(){
            var tags = document.getElementsByClassName("tag");
            for(var j = 0; j<tags.length;j++){
                tags[j].setAttribute("style","display:none");
            }
            
            var tag = document.createElement("div");
            tag.setAttribute("class","tag");
            this.appendChild(tag);
            voteResult = this.childNodes[1].innerHTML;
            voteId =this.childNodes[0].innerHTML;
            console.log(typeof(voteResult)); //?为什么这里innerHTML都是字符串类型
        }
    }
}

function submit(){
    var submit = document.getElementsByClassName("submit")[0];
    submit.onclick = function(){
        var killers = localStorage.killers.split(",");
        var civil = localStorage.civil.split(",");
        if(killers.indexOf(voteResult)!= -1){
            killers.splice(killers.indexOf(voteResult),1);
            localStorage.killers = killers.join();
            
        }
        else if (civil.indexOf(voteResult)!=-1){
            civil.splice(civil.indexOf(voteResult),1);
            localStorage.civil = civil.join();
            
        }
        localStorage.voteResult = voteResult;
        localStorage.currentStatus = 4;
        localStorage.changeDate = 1;
        if(localStorage.currentDate ==1){
            var voted =[];
            voted.push(voteResult);
            localStorage.voted = voted.join();
            var votedIds = [];
            votedIds.push(voteId);
            localStorage.votedId =votedIds.join();
        }
        else{
            var voted1 = localStorage.voted.split(",");
            console.log("ok");
            voted1.push(voteResult);
            localStorage.voted = voted1.join();
            var votedIds1 = localStorage.votedId.split(",");
            votedIds1.push(voteId);
            localStorage.votedId =votedIds1.join();
            
        }
        window.location.href ="6-gameStart.html";
    }
    
}


function close(){
    var close = document.getElementById("close");
    close.onclick = function(){
        localStorage.clear();
        window.location.href = "1-main.html";
    }
}


