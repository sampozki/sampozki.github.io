a = 0
for a in range(1,19):
    print('<span>'+str(a)+': </span><input onblur="sumInputs()" maxlength="3" name="qty' + str(a) + '" type="text" id="point"/><hr><hr>')
    
