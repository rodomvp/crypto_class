var will = artifacts.require("Will");

contract('Will', function(accounts) {
  
  it("should assert true", function(done) {
    will = will.deployed();
    assert.isTrue(true);
    done();
  });
  
  it("should withdraw, right passwords ", function(){
        return will.then(instance=>{
             return instance.Withdraw.call('who', 'dat').then(result=>{
                assert.isTrue(result);
             });
        });
    });   

  it("shouldnt withdraw, wrong passwords ", function(){
          return will.then(instance=>{
               return instance.Withdraw.call('whole', 'dates').then(result=>{
                  assert.isFalse(result);
               });
          });
      });
});
