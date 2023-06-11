// Lv. 1 달리기 경주

/**
 * @param {number} players 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열
 * @param {number} callings 해설진이 부른 이름을 담은 문자열 배열
 * @return {number[]} 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 담은 배열
 */

function solution(players, callings) {
    let idx;
    let name1;
    let name2;
    const idxList = {}

    players.forEach((name,index)=>idxList[name]=index)
    for(let call of callings){
        idx = idxList[call]
        name1 = players[idx]
        name2 = players[idx-1]
        idxList[call]-=1
        idxList[name2]+=1
        players[idx] = name2
        players[idx-1] = name1
    }    

    return players;
}