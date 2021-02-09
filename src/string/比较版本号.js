var compareVersion = function(version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    if (v1.length > v2.length) {
        let i = v1.length - v2.length
        while (i > 0) {
            v2.push('0')
            i--
        }
    } else if (v1.length < v2.length) {
        let i = v2.length - v1.length
        while (i > 0) {
            v1.push('0')
            i--
        }
    }
    let res = 0
    for (let i = 0; i < v1.length; i++) {
        if (parseInt(v1[i]) === parseInt(v2[i]))
            continue
        else if (parseInt(v1[i]) > parseInt(v2[i])) {
            res = 1
            break
        } else {
            res = -1
            break
        }
    }
    return res

};