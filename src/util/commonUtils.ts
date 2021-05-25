export class CommonUtils{

    isMobileDevice() {
        var check = false;
        var ua = navigator.userAgent;

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
            check = true;
        }
        return check;
    };

}