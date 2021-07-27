/* eslint-disable no-console */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Dialog, makeStyles } from "@material-ui/core";
import { useKonami } from "react-konami-code";

import PPCongrats from "./PPCongrats";
import PPresentation from "./PPresentation";
import PPMessageBoard from "./PPMessageBoard/PPMessageBoardContainer";
import PPMessageBoardCSV from "./PPMessageBoard/PPMessageBoardContainer_csv";
import PPBackToTop from "./PPBackToTop";
import PPShowcase from "./PPShowcase/PPShowcaseContainer";
import Footer from "../../components/Footer";
import i18n from "../../i18n";

import kanatowa from "../../assets/images/kanatowa.png";

const useStyles = makeStyles((theme) => ({
  paperScrollPaper: {
    alignItems: "flex-start",
  },
}));

const Main = ({ t, onLoaded, locale }) => {
  const [easterEgg, setEasterEgg] = useState(false);
  const navigate = useNavigate();

  const classes = useStyles();

  useEffect(() => {
    console.log(
      `
                                                     *.,,*                                              
                                                  ,,***/. ./.                                       
                                                   .,**///*%#*  ,*                                  
                                                     /**////(/(((%(  .(                             
                                                      .,/////*, /(//((%#....,*////(%./              
                                         *(*. ..,*,,,.../*////*,.    //(**,,,*(((##%(,,             
                                  .(. .*/*//*//*/////////(,***,,*.              *(#%&.*             
                               (.*,,,#%%%%#(//////,,*,/*//*#,,.  . .*.          /(#%&,/             
                            # ,. *,&%%%%&%,///////////////*(   . *, .*.*         (////,..           
                          / % * ,*%%##%****/////#*////////(  .../*  .,*,../        ///*( (          
                        / #/,*, /%###**,,,,,,,,#***///////.....,,%.. ,,*.*((,/,     .///( .         
                      / *%.,,,,,%##*,,,,,,,,,,#,,,,,,,,,,* ..../((#####((((((*****,/*.///*, *       
                     ,.*/,,,,,.&## ..,,,,,,,,,/,,,,,,,,,,/..,((((((((////////,,,,,********/* *      
                   . ..*.,,,,,/#/,,, . .,,,,,(,,,,,,,,,,,*********/((//*,..#...#*.,,,,*,,,,,*,      
                  ( ..*..,,,..&,,,,,., ,   ..*     ,. ..    /.,,,,,,(*,,,,,,#....,  .,,..,,,,,,.*   
                 *., ( ......*..,,,,..%.    *.     .. .    .#**,*,,,.#,,,,,,,% .. .,        ./. .*  
                .,, ,......../...,,,,%(,,,,,*.   ..,  , ..,/#.**,//,.,,,,,,,,.(  . (/               
               ,/.  ,   ....#...... %/(,,,,./....,,,,,*.,*.#,#..,../*.(...... *,  ,./,              
              *#   .     ../*......,/*%...,.*.,,....../.*.(***.,    .%(    ..  #   *(,*             
             /,,,  *     .,(.......**(,.....,.........(*.,* % .,*     (.       ,,   ,,,*            
            *..,  *       (/  .... // ......,.........,..,,.(.*. ., ,  /        (    / **           
              %  .,      ./,.      /. / .......... ..* .,,.,,,*.** / * /        (    ., ,           
           */.,  ,/      ,/ ,      ( .* *  , ...     *.,        . *.,* (        **    *  /          
           , #. . ,      ,* *      ( *,.%  ,        .(.            ,..//        ,#     , /.         
           /.*  *.       ,, /      /,/*.,. *      . /.  ,,..,/(###/,. .(        .%.    /  (         
           (/,...*       *. ,* ....%%*&%(@ *    .,,.,    ./@@@@@(@&&@&&% .      .#*  .. . /         
           /(..,.*       *  ,& ..,,/@&&&*#,,   *./,,        %%#%&&&&&#.**,      .#* ..../(/         
           (/,.*,*       ,   (,., ,*%##//% . ../,,,.        ((//////#. .*.      .#/....,(.          
          *(,,*,/*.      ,    (...,**.,,(, .**, ,            #*...*(  .,..      .#(..,*,*           
          (#,//.**..  .  , #  *,*.**,,.                        ........,.       .##,,,(,/           
          #@*(#.*/.,     , (( ./.......            .           ........,.    .. .#(,*(#.(           
          #.*(#.((,,..   ..*,(/*......                           .....,,.   .,. .##*##%./           
          % /&#,##*,,.    ,,,,#&,                                    ,%....,,,./ #,%#((,.           
          % ./,.#%#,,/    .,,.#(%                **,/               /#/,..,**,,% ## ..**            
          (  . ,. #.,/,    .,**((/(            ......             *###,*,****,*. . * ./             
           (   .   /,/,,    ./.*/**##%#########################%&#(/(/*,***/,. .*    #              
                /  ../,,,.   .&.%&######(///(((((##########((//(####%#******   *.  .                
  ,(.     *.    .#  //.*,,,  .**/@&#(#%%#%%%%#####%%%%%%%%%&@@&&%#(%%***, ,    ,      .,   ,*       
            ,     (/ #./,,,,.,./*#&&&&&&&&%%%%%%%%%%%%%%&&&&&@@@@@@@,                ,              
 .    ,,.   %      ,((,*,,,,,,,, *%&&&&&&&%%%%%%%%%%&&&&&&&&&&@@@@@*                 *  ,.       ./.
 ,*                   .#/.,,,,,,**/@&&&@@&%%%%%%%%&&&&&&&@@@@@@@@@%,,,./            ,.       **,    
,*////.*,     .,,     ,/(/*,,***,***%@@@@@@&&&&&&&&&&@@@@&&&@@@@@.....,,,,,*,  .,**.    ./*,  .///. 
.    *//////   .   (.,/(,*(/(******,.,,@@@&&@@@@@@@@@@@@@&&&@@&/*,,,/.....,,..*./.   (    *       /,
    .#,   (  *(/,,.    (  ,,//#*****/..*.%@@@@@@@@@@@@@@@#*****,,,,,***,.    .    * &,/    /  ..,**.
    `
    );
  }, []);

  useEffect(() => {
    const reroute = () => {
      const lang = localStorage.getItem("i18nextLng");
      if (!locale) {
        if (lang === "ja") {
          navigate("/jp");
        } else {
          navigate("/en");
        }
      }
    };
    const setLang = () => {
      if (locale === "jp") {
        i18n.changeLanguage("ja");
      } else {
        i18n.changeLanguage("en");
      }
    };
    reroute();
    setLang();

    onLoaded();
  }, [locale, navigate, onLoaded]);

  useKonami(() => setEasterEgg(true));

  const handleOpen = () => {
    setEasterEgg(true);
  };

  const handleClose = () => {
    setEasterEgg(false);
  };

  return (
    <div>
      <PPCongrats t={t} />
      <PPresentation t={t} />
      <PPShowcase t={t} />
      {process.env.REACT_APP_MESSAGE_MODE === "GOOGLE" ? (
        <PPMessageBoard t={t} />
      ) : (
        <PPMessageBoardCSV t={t} />
      )}
      <PPBackToTop />
      <Footer
        t={t}
        onGori={() => {
          handleOpen();
        }}
      />
      <Dialog
        open={easterEgg}
        onClose={handleClose}
        classes={{
          paperScrollPaper: classes.paperScrollPaper,
        }}
      >
        <img
          src={kanatowa}
          alt="knt"
          style={{ margin: 0, padding: 0, width: "100%", height: "auto" }}
        />
      </Dialog>
    </div>
  );
};

export default Main;
