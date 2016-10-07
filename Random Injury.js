var sevNums = { 1:"bruised", 2:"scratched", 3:"sprained", 4:"dislocated", 5:"functionally impaired", 6:"broken", 7:"shredded", 8:"torn apart", 9:"ripped off/out", 10:"unsalvagable"};
         var head = {1:"forehead", 2:"skull", 3:"nose", 4:"left ear", 5:"right ear", 6:"left cheek", 7:"right cheek", 8:"left eye", 9:"right eye", 10:"neck", 11:"lips", 12:"throat", 13:"brain"};
        var upperBody = {1:"chest", 2:"heart", 3:"spleen", 4:"liver", 5:"lungs", 6:"nipple", 7:"ribs", 8:"upper spine", 9:"shoulder blade", 10:"back", 11:"sternum"};
        var lowerBody = {1:"kidneys", 2:"intestines", 3:"pancreas", 4:"bladder", 5:"urinary bladder", 6:"sex organ", 7:"butt", 8:"pelvis", 9:"hip", 10:"lower spine", 11:"thyroid", 12:"prostate", 13:"appendix", 14:"colon", 15:"stomach"};
        var limbs = {1:"left arm", 2:"right arm", 3:"left leg", 4:"right leg", 5:"wrist", 6:"finger", 7:"upper arm", 8:"lower arm", 9:"upper leg", 10:"lower leg", 11:"calf", 12:"Achilles heel", 13:"ACL", 14:"MCL", 15:"meniscus", 16:"rotator cuff", 17:"shoulder", 18:"bicep", 19:"tricep"};
        var regions = {1:head, 2:upperBody, 3:lowerBody, 4:limbs};
       
        
        
        function calcInjury(){
            var region = document.getElementById("region").value;
            var severity = document.getElementById("severity").value;
            
            var genInj = "You have a(n) " + calcSeverity(severity) + " " + calcRegion(region)+ ".";
            
            var injury = document.getElementById("injury");
            injury.innerHTML = genInj;
        }
        
        function calcSeverity(x){
            var severity = sevNums[x];
            return severity;
        }
        
        function calcRegion(x){
            var region = regions[x];
            var injury;
            switch(x){
                case "1":
                    injury = Math.floor((Math.random() * 12) + 1);
                    break;
                case "2":
                    injury = Math.floor((Math.random() * 11) + 1);
                    break;
                case "3":
                    injury = Math.floor((Math.random()*15)+1);
                    break;
                case "4":
                    injury = Math.floor((Math.random()*19)+1);
                    break;
                default:
                    return "broken";
            }
            injury = region[injury];
            return injury;
            
            
        }
        
        