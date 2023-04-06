//! неправильный вариант 
//! должно так 
const randomIntegerFromInterval=(o,a)=>Math.floor(Math.random()*(a-o+1)+o),makeTransaction=o=>{const a=(r=200,n=500,Math.floor(Math.random()*(n-r+1)+r));var r,n;return new Promise(((r,n)=>{setTimeout((()=>{Math.random()>.3?r(o.id,a):n(o.id)}),a)}))},logSuccess=(o,a)=>{console.log(`Transaction ${o} processed in ${a}ms`)},logError=o=>{console.warn(`Error processing transaction ${o}. Please try again later.`)};makeTransaction({id:70,amount:150}).then(logSuccess).catch(logError),makeTransaction({id:71,amount:230}).then(logSuccess).catch(logError),makeTransaction({id:72,amount:75}).then(logSuccess).catch(logError),makeTransaction({id:73,amount:100}).then(logSuccess).catch(logError);
//# sourceMappingURL=task-3.272837d5.js.map
