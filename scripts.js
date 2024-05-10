//pour faire disparaitre le sidebar
document.getElementById('toggle-sidebar').addEventListener('click', function() {
  document.querySelector('.container').classList.toggle('hiddenSidebar');
});

// pour faire appaitre le formulaire dans le content
document.getElementById('create-contact').addEventListener('click', function() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
  <form id="contactForm" class="contact-form">
    
    <img class="LrbNhc tUOMob" src="https://www.gstatic.com/identity/boq/profilepicturepicker/photo_silhouette_e02a5f5deb3ffc173119a01bc9575490.png" alt="Photo d'un contact." data-iml="25926.400000000373">  <br><br>
    <div jscontroller="e5kR5e" jsaction="Plcnff:QYO7ie;kHDiCf:cq1rbe;" class="Tabbqd" data-is-editing="true" data-is-photo-editable="true">
    <div jsname="wbokw" class="vG9DHf">
    <div class="LrbNhc  tUOMob kFZzKd" aria-hidden="true" jsaction="click:QYO7ie; pointerenter:jvnswc; pointerleave:iIBTxf;" jslog="24356; track:click,impression">
    <img class="LrbNhc tUOMob" src="https://www.gstatic.com/identity/boq/profilepicturepicker/photo_silhouette_e02a5f5deb3ffc173119a01bc9575490.png" alt="Photo d'un contact." data-iml="25926.400000000373">
    <span class="RBHQF-ksKsZd n0h7yd" data-unbounded="false" jscontroller="LBaJxb" jsname="K7hHib" soy-skip="" ssk="6:RWVI5c"></span>
    </div><div class="jkrPQc tUOMob" jsaction="JIbuQc:QYO7ie" jslog="24356; track:click,impression">
    <div jscontroller="GF6Mvc" jsaction="rcuQ6b:npT2md;rds8ac: trigger.A8NGYc;" jsshadow="">
    <span class="HPTfYd-suEOdc-sM5MNb-OWXEXe-nzrxxc">
    <span jsslot="">
    <button class="VYBDae-Bz112c-LgbsSe KFsjXe tUOMob" jscontroller="PIVayb" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;" data-idom-class="KFsjXe tUOMob" jsname="zGhMqc" aria-label="Définir la photo d'un contact" data-tooltip-enabled="true" data-tooltip-is-rich="true" data-tooltip-with-caret="true" aria-expanded="false" aria-haspopup="dialog" data-tooltip-id="c191" data-tooltip-with-caret-position="10">
    <span class="OiePBf-zPjgPe VYBDae-Bz112c-UHGRz"></span><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c">
    </span><span class="VYBDae-Bz112c-kBDsod-Rtc0Jf" jsname="S5tZuc" aria-hidden="true">
    <i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true">
    add
    </i>
    </span>
    <div class="VYBDae-Bz112c-RLmnJb">
    </div>
    </button>
    </span>
    <div jsshadow="" jscontroller="VBl5Ff" jsaction="BfpAHf:TCTP9d;Nwyqre:DsZxZc; transitionend:e204de;" data-title-id-disregard="ucc-8" id="c191" class="HPTfYd-suEOdc HPTfYd-suEOdc-OWXEXe-nzrxxc Dpllwf" role="dialog" data-mdc-tooltip-has-caret="true" style="left: -142px; top: -194.66px; width: 320px;" aria-hidden="true">
    <div class="HPTfYd-z59Tgd-OiiCO" style="transform-origin: calc(146.234px) 156px;">
    <span class="SXdXAb-BFbNVe HPTfYd-z59Tgd-cGMI2b-BFbNVe">
    <span class="SXdXAb-ugnUJb">
    </span>
    </span>
    <div class="HPTfYd-z59Tgd">
    <span class="SXdXAb-BFbNVe">
    <span class="SXdXAb-ugnUJb">
    </span>
    </span>
    <div jsslot="" class="HPTfYd-IqDDtd">
    <div jsname="bN97Pc">
    <div class="P5SIYd">
    Choisir une photo
    </div>
    <div jsname="kEMzy">
    <div jscontroller="Veyl8" class="lgoecd" jsaction="rcuQ6b:npT2md;">
    <div class="SJyhnc" jsshadow="">
    <div jsslot="" class="NBZP0e GzR15 xbmkib" jsname="phY4mf" jscontroller="XTf4dd" jsaction="rcuQ6b:iEVEeb;qUuEUd:.CLIENT;j9grLe:.CLIENT;HUObcd:.CLIENT" data-snap-point="0" data-snap-debounce-ms="250" data-snap-animation-ms="250" data-selector="orw63d" style="padding-bottom: 20px; margin-bottom: -20px;">
    <ul class="W7g1Rb-rymPhb v4XPmc" role="menu" tabindex="0" data-list-type="MENU" data-updated-layout="true" jscontroller="QVysJe" jsaction="mouseleave:JywGue; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; keydown:I481le;" jsname="kPsmje" aria-label="Choisir une photo">
    <div class="hFbUic"><div class="orw63d">
    <li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-HiaYvf  pL14Wb" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="f5pGkb" data-image-id="-2238429752291491839" jslog="201185; track:click"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"><img src="https://lh3.googleusercontent.com/IHhHCCId5nCy7KyJj_VWuN5980DG_0dbLmhcw5ZHU0BTN6oa6IsGiwrQhCel9jqpmhJyQu9DvMv9r8HzjzFPYe0A0w" data-mt="1B158823-B6B4-4846-AEC2-C79A4F659F34" alt="Tatou dans son habitat naturel" class="XBA8xd" data-iml="31475.5"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff"></span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div><div class="orw63d"><li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-HiaYvf  pL14Wb" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="f5pGkb" data-image-id="573927477513027585" jslog="201185; track:click"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"><img src="https://lh3.googleusercontent.com/y_v3du2UZlA4i007mX6grilkHD0zb3PUese2slOrjXhK6CiKak1_ofgOl7f0-f6DnB-cWCFEYpVtTpKUCFQMtSeO" data-mt="1B158823-B6B4-4846-AEC2-C79A4F659F34" alt="Protée royale au soleil" class="XBA8xd" data-iml="32540.299999998882"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff"></span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div><div class="orw63d"><li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-HiaYvf  pL14Wb" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="f5pGkb" data-image-id="3289035102864015361" jslog="201185; track:click"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"><img src="https://lh3.googleusercontent.com/4dts1O6hzFAs5NWXb0IxG7apmdoEhb-XtxLjNY3twAI4OlSR-c5lLGEyYWdGwoeKx0Widjrlo6OIcK09fOevRjvZ1g" data-mt="1B158823-B6B4-4846-AEC2-C79A4F659F34" alt="Croquis de squelette avec intitulés" class="XBA8xd" data-iml="40685.5"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff"></span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div><div class="orw63d"><li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-HiaYvf  pL14Wb" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="f5pGkb" data-image-id="7505952466454708225" jslog="201185; track:click"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"><img src="https://lh3.googleusercontent.com/gPlLI5RGrVsRAnn8Q5oaJ1k7GzRYSy2lgj3AIS72IJ7y6LWwyLaormOR6eFK1tPifJy4M3qzJz1KhE_n9VRe5ovGNA" data-mt="1B158823-B6B4-4846-AEC2-C79A4F659F34" alt="Alligator" class="XBA8xd" data-iml="35217.29999999888"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff"></span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div><div class="orw63d"><li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-HiaYvf  pL14Wb" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="f5pGkb" data-image-id="-236298242948595711" jslog="201185; track:click"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"><img src="https://lh3.googleusercontent.com/UZNiBD-vCYTNFB_8mvc99DFWj6da543vPEycS9fJx66_ctN9hzwnmTBDfacoWIqy5UjDrIAVwwsJet2AqpwHLBF7" data-mt="1B158823-B6B4-4846-AEC2-C79A4F659F34" alt="Pot de pop-corn qui se renverse au cinéma" class="XBA8xd" data-iml="35372.79999999888"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff"></span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div><div class="orw63d"><li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-HiaYvf  pL14Wb" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="f5pGkb" data-image-id="-28147497671065599" jslog="201185; track:click"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"><img src="https://lh3.googleusercontent.com/F3Ur-NTJChx4rpa_b4jNF1SGS5KR1M2WtAsFZQT0Fw_uzr8Lz2xlC1a89S52AKr1SMQFK8Z1QP0kSi1IeCXH6oY3rg" data-mt="1B158823-B6B4-4846-AEC2-C79A4F659F34" alt="Personne qui marche près de Wave&nbsp;Rock" class="XBA8xd" data-iml="36495.09999999963"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff"></span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div><div class="orw63d"><li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-HiaYvf  pL14Wb" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="f5pGkb" data-image-id="-3901243177209692159" jslog="201185; track:click"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"><img src="https://lh3.googleusercontent.com/ngGjxsYZFB9Rx26XC9_DFFQImKoqAw_LL3LxAk_z5lUBJnKMruNRosGv9Mm1pWGzvrzbxau2uMMW08AZorqok72WiAs" data-mt="1B158823-B6B4-4846-AEC2-C79A4F659F34" alt="Statue de La Petite Sirène" class="XBA8xd" data-iml="36779.79999999888"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff"></span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div><div class="orw63d"><li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-HiaYvf  pL14Wb" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="f5pGkb" data-image-id="7941394255426093057" jslog="201185; track:click"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"><img src="https://lh3.googleusercontent.com/snCUb0C5INCTuN8ond9wKZAq10FHPMBC4599TzllyhtHJ8qIBcTN0S2t7cVJp9MMbAAixUzPKs4BenobS4G0AtTacWk" data-mt="1B158823-B6B4-4846-AEC2-C79A4F659F34" alt="Gâteau d'anniversaire" class="XBA8xd" data-iml="36094.59999999963"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff"></span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div><div class="orw63d"><li class="W7g1Rb-rymPhb-ibnC6b W7g1Rb-rymPhb-ibnC6b-OWXEXe-hXIJHe W7g1Rb-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc   CEhYne" jsaction="click:o6ZaF; keydown:RDtNu; keyup:JdS61c; focusin:MeMJlc; focusout:bkTmIf; mousedown:teoBgf; mouseup:NZPHBc; mouseenter:SKyDAe; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8; change:uOgbud;" tabindex="-1" role="menuitem" jsname="JoVx" jslog="201187; track:click,impression"><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="frX3lc-vlkzWd W7g1Rb-rymPhb-sNKcce"></span><span class="W7g1Rb-rymPhb-KkROqb"></span><span class="W7g1Rb-rymPhb-Gtdoyb"><span class="W7g1Rb-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff">Plus</span></span><span class="W7g1Rb-rymPhb-JMEf7e"></span></li></div></div></ul></div></div><div class="HqYV1e"><div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button class="lqLMt-BIzmGd lqLMt-BIzmGd-OWXEXe-dgl2Hf TDIhae Z6bbDe" jscontroller="IUkCmb" jsname="PU8vv" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox; focus:h06R8; blur:zjh6rb;" data-idom-class="TDIhae Z6bbDe" tabindex="-1" jslog="201186; track:click,impression" aria-label="Faire défiler vers la gauche" style="display: none;"><span class="SXdXAb-BFbNVe"><span class="SXdXAb-ugnUJb"></span></span><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="OiePBf-zPjgPe"></span><span class="lqLMt-Q0XOV" jsname="ENL0A"><i class="google-material-icons giSqbe" aria-hidden="true">chevron_left</i></span><div class="lqLMt-D4TID"></div></button></div><div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button class="lqLMt-BIzmGd lqLMt-BIzmGd-OWXEXe-dgl2Hf TDIhae xCcn3c" jscontroller="IUkCmb" jsname="m4eCTc" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox; focus:h06R8; blur:zjh6rb;" data-idom-class="TDIhae xCcn3c" tabindex="-1" jslog="201188; track:click,impression" aria-label="Faire défiler vers la droite"><span class="SXdXAb-BFbNVe"><span class="SXdXAb-ugnUJb"></span></span><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="OiePBf-zPjgPe"></span><span class="lqLMt-Q0XOV" jsname="ENL0A"><i class="google-material-icons giSqbe" aria-hidden="true">chevron_right</i></span><div class="lqLMt-D4TID"></div></button></div></div></div></div><div class="CHtqdc"><div jsname="pPzbsd"><div jsaction="JIbuQc:trigger.Plcnff" jsname="CVRR1e" jslog="201184; track:click,impression"><div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button class="mUIrbf-LgbsSe mUIrbf-LgbsSe-OWXEXe-dgl2Hf mUIrbf-LgbsSe-OWXEXe-wdeprb-MD85tf-DKzjMe" jscontroller="O626Fe" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox; focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;"><span class="OiePBf-zPjgPe"></span><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="mUIrbf-RLmnJb"></span><span class="mUIrbf-kBDsod-Rtc0Jf mUIrbf-kBDsod-Rtc0Jf-OWXEXe-M1Soyc" jsname="Xr1QTb"></span><span jsname="V67aGc" class="mUIrbf-vQzf8d">Google&nbsp;Photos</span><span class="mUIrbf-kBDsod-Rtc0Jf mUIrbf-kBDsod-Rtc0Jf-OWXEXe-UbuQg" jsname="UkTUqb"></span></button></div></div></div><div jsaction="JIbuQc:trigger.Plcnff" jsname="EXrBc" jslog="201189; track:click,impression"><div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button class="mUIrbf-LgbsSe mUIrbf-LgbsSe-OWXEXe-dgl2Hf mUIrbf-LgbsSe-OWXEXe-wdeprb-MD85tf-DKzjMe" jscontroller="O626Fe" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox; focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;"><span class="OiePBf-zPjgPe"></span><span class="RBHQF-ksKsZd" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="mUIrbf-RLmnJb"></span><span class="mUIrbf-kBDsod-Rtc0Jf mUIrbf-kBDsod-Rtc0Jf-OWXEXe-M1Soyc" jsname="Xr1QTb"></span><span jsname="V67aGc" class="mUIrbf-vQzf8d">Importer</span><span class="mUIrbf-kBDsod-Rtc0Jf mUIrbf-kBDsod-Rtc0Jf-OWXEXe-UbuQg" jsname="UkTUqb"></span></button></div></div></div></div></div></div><div class="HPTfYd-Djsh7e-XxIAqe-ma6Yeb" style="bottom: 0px; left: calc(146.234px); transform: rotate(35deg) skewY(20deg) scaleX(0.939693); transform-origin: left bottom; border-bottom-left-radius: 0px; border-top-right-radius: 0px;"><span class="SXdXAb-BFbNVe HPTfYd-Djsh7e-ma6Yeb-BFbNVe"><span class="SXdXAb-ugnUJb"></span></span></div><div class="HPTfYd-Djsh7e-XxIAqe-cGMI2b" style="bottom: 0px; left: calc(146.234px); transform: rotate(35deg) skewY(20deg) scaleX(0.939693); transform-origin: left bottom; border-bottom-left-radius: 0px; border-top-right-radius: 0px;"><span class="SXdXAb-BFbNVe"><span class="SXdXAb-ugnUJb"></span></span></div></div></div></span></div></div></div><div class="NFixgb"><div class="qhML4e tUOMob" role="heading" aria-level="1"></div></div><
    /div>
    <div class="VYBDae-Bz112c-RLmnJb"></div>

    <label for="prenom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
    </svg></label>
    <input type="text" id="prenom" placeholder="Prénom" name="prenom"><br><br>
    <label for="nom"></label>
    <input type="text" id="nom" name="nom" placeholder="Nom"><br><br>
    


    <label for="entreprise"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
    </svg></label>
    <input type="text" id="entreprise" name="entreprise" placeholder="Entreprise"><br><br>
    
    <label for="fonction"></label>
    <input type="text" id="fonction" name="fonction" placeholder="Fonction"><br><br>
    
    <label for="telephone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
    </svg></label> 
    <select id="pays">
      <option value="valeur1">Valeur 1</option>
      <option value="valeur2" selected>Valeur 2</option>
      <option value="valeur3">Valeur 3</option>
    </select>
    <input type="tel" id="telephone" name="telephone" pattern="^\+\d{1,3}\s?\(\d{1,3}\)\s?\d{3,4}\s?-?\d{2,3}\s?-?\d{2,3}$
    " required /> <br><br>

    <label for="email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
    </svg></label>
    <input type="email" id="email" name="email" placeholder="E-mail" patter="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
    "><br><br>

    <button type="submit" class="save-button">Enregistrer</button>

  </form>

  `;
});

//déclencher un evenement à chaque fois qu'un formulaire est soumis sur la page
document.addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  if (form.id === 'contactForm') {
    const prenom = form.querySelector('#prenom').value;
    const nom = form.querySelector('#nom').value;
    const entreprise = form.querySelector('#entreprise').value;
    const fonction = form.querySelector('#fonction').value;
    const telephone = form.querySelector('#telephone').value;
    const email = form.querySelector('#email').value;
    addContact(prenom,nom,entreprise,fonction, telephone,email);
  }
});


let contacts = [];
//ajouter un nouveau contact au tableau 
function addContact(prenom,nom,entreprise,fonction, telephone,email) {
  contacts.push({prenom,nom,entreprise,fonction, telephone,email});
  displayContacts(); //pour mettre à jour l'affichage de la liste des contacts.
}


function displayContacts() {
  const contentDiv = document.getElementById('content');
  let html = `<h3>Contacts</h3>
            <table>
              <thead>
                <tr>
                  <td>Titre</td>
                  <td>E-mail</td>
                  <td>Numéro de téléphone</td>
                  <td>Fonction et entreprise</td>
                  <td>Libéllés</td>
                </tr>
              </thead>
              <tbody>`;
              // Ajoutez une ligne pour chaque contact dans le tableau
              contacts.forEach(contact => {
              html += `<tr>
                        <td>${contact.prenom} ${contact.nom}</td>
                        <td>${contact.email}</td>
                        <td>${contact.telephone}</td>
                        <td>${contact.fonction} ${contact.entreprise}</td>
                        <td>${contact.email}</td>
                      </tr>`;
              });
              html += '</tbody></table>';
  contentDiv.innerHTML = html;
}

