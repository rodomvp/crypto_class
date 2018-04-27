var will = artifacts.require("Will");

contract('Will', function(accounts) {
  
  it("should assert true", function(done) {
    will = will.deployed();
    assert.isTrue(true);
    done();
  });
  
  it("should withdraw, right passwords ", function(){
        return will.then(instance=>{
             return instance.gethethers.call('who', 'dat').then(result=>{
                assert.isTrue(result);
             });
        });
    });   

  it("should withdraw, wrong passwords ", function(){
          return will.then(instance=>{
               return instance.Withdraw.call('whole', 'dates').then(result=>{
                  assert.isTrue(result);
               });
          });
      });
});
