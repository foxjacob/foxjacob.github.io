function supports_html5_storage() {
	var a = "localStorage";
	try {
		return u8l.H7(a, window) && u8l.t7(u8l.S4s, L1Y7y[t7y]["localStorage"])
	} catch (b) {
		return !u8l.K1F
	}
}

function fullScreen() {}

function trace(a) {
	console.log(a)
}
var C9y, c1y, q1y, y7w3j, L1Y7y, c7y, M7y, t7y, u8l, __extends, game, dragonBones, z9i1y = window;
for (C9y in z9i1y)
	if (9 === C9y.length && 116 === C9y.charCodeAt(6) && 114 === C9y.charCodeAt(8) && 103 === C9y.charCodeAt(4) && 110 === C9y.charCodeAt(0)) break;
for (c1y in z9i1y)
	if (8 === c1y.length && 101 === c1y.charCodeAt(5) && 116 === c1y.charCodeAt(7) && 117 === c1y.charCodeAt(3) && 100 === c1y.charCodeAt(0)) break;
for (q1y in z9i1y)
	if (6 === q1y.length && 100 === q1y.charCodeAt(3) && 119 === q1y.charCodeAt(5) && 105 === q1y.charCodeAt(1) && 119 === q1y.charCodeAt(0)) break;
y7w3j = {
		l0L: function(a, b) {
			return b > a
		},
		U4C: function(a, b) {
			return b > a
		},
		f3C: function(a, b) {
			return a * b
		},
		L9H: function(a, b) {
			return a > b
		},
		r9L: function(a, b) {
			return a - b
		},
		g7L: function(a, b) {
			return a == b
		},
		k6L: function(a, b) {
			return a != b
		},
		W4V: function(a, b) {
			return a * b
		},
		s6C: function(a, b) {
			return a >= b
		},
		m1V: function(a, b) {
			return a > b
		},
		j6H: function(a, b) {
			return a == b
		},
		m4V: function(a, b) {
			return a * b
		},
		T8C: function(a, b) {
			return a != b
		},
		B8S: function(a, b) {
			return a > b
		},
		W9H: function(a, b) {
			return a == b
		},
		x1H: function(a, b) {
			return a == b
		},
		M59: function(a, b) {
			return a == b
		},
		g3H: function(a, b) {
			return a == b
		},
		V0F: function(a, b) {
			return a * b
		},
		x7C: function(a, b) {
			return a == b
		},
		a3C: function(a, b) {
			return a == b
		},
		w89: function(a, b) {
			return a > b
		},
		E9C: function(a, b) {
			return a - b
		},
		V59: function(a, b) {
			return a != b
		},
		z2L: function(a, b) {
			return a > b
		},
		f1L: function(a, b) {
			return a == b
		},
		L1V: function(a, b) {
			return a > b
		},
		o29: function(a, b) {
			return a * b
		},
		u3V: function(a, b) {
			return a == b
		},
		e9j: function(a, b) {
			return a * b
		},
		x5V: function(a, b) {
			return a % b
		},
		e7S: function(a, b, c) {
			return a * b * c
		},
		H19: function(a, b) {
			return a == b
		},
		d9H: function(a, b) {
			return a != b
		},
		k0C: function(a, b) {
			return a == b
		},
		D69: function(a, b) {
			return a == b
		},
		b8S: function(a, b) {
			return a > b
		},
		Y0V: function(a, b) {
			return a == b
		},
		V2L: function(a, b) {
			return a - b
		},
		N6j: function(a, b) {
			return a == b
		},
		w0C: function(a, b) {
			return a != b
		},
		U8L: function(a, b) {
			return a > b
		},
		n79: function(a, b) {
			return a == b
		},
		N8C: function(a, b) {
			return a != b
		},
		q5F: function(a, b) {
			return a * b
		},
		P7F: function(a, b, c) {
			return a * b * c
		},
		B8F: function(a, b, c, d) {
			return a * b * c * d
		},
		D3L: function(a, b) {
			return a != b
		},
		M7j: function(a, b) {
			return a == b
		},
		u9C: function(a, b) {
			return a == b
		},
		J5H: function(a, b) {
			return a == b
		},
		c2H: function(a, b) {
			return a == b
		},
		Y9j: function(a, b) {
			return a * b
		},
		A1C: function(a, b) {
			return a == b
		},
		h5F: function(a, b) {
			return a > b
		},
		s0L: function(a, b) {
			return a != b
		},
		U8F: function(a, b, c) {
			return a * b * c
		},
		N9L: function(a, b) {
			return a != b
		},
		c1S: function(a, b) {
			return a * b
		},
		p9C: function(a, b) {
			return a >= b
		},
		p4L: function(a, b) {
			return a | b
		},
		D7V: function(a, b) {
			return a > b
		},
		k7j: function(a, b) {
			return a > b
		},
		y9j: function(a, b) {
			return a != b
		},
		n7S: function(a, b) {
			return a > b
		},
		n6C: function(a, b) {
			return a > b
		},
		I2V: function(a, b) {
			return b > a
		},
		M99: function(a, b) {
			return a == b
		},
		j2H: function(a, b) {
			return a instanceof b
		},
		v0C: function(a, b) {
			return a / b
		},
		n59: function(a, b) {
			return a != b
		},
		H4L: function(a, b) {
			return a * b
		},
		e1C: function(a, b) {
			return a == b
		},
		O0F: function(a, b, c) {
			return a / b * c
		},
		g19: function(a, b) {
			return a != b
		},
		K5C: function(a, b) {
			return a / b
		},
		w2C: function(a, b) {
			return a > b
		},
		a9j: function(a, b) {
			return a * b
		},
		w99: function(a, b) {
			return a != b
		},
		K0V: function(a, b) {
			return a / b
		},
		c49: function(a, b) {
			return a == b
		},
		G6V: function(a, b) {
			return a / b
		},
		C9j: function(a, b) {
			return a != b
		},
		y3C: function(a, b) {
			return a == b
		},
		q4H: function(a, b) {
			return a != b
		},
		c0V: function(a, b) {
			return a == b
		},
		H8L: function(a, b) {
			return a - b
		},
		x39: function(a, b) {
			return a > b
		},
		k7H: function(a, b) {
			return a != b
		},
		c3L: function(a, b) {
			return a != b
		},
		p3V: function(a, b) {
			return a > b
		},
		K0H: function(a, b) {
			return a == b
		},
		a5L: function(a, b) {
			return a > b
		},
		Z3S: function(a, b) {
			return a > b
		},
		S6S: function(a, b) {
			return a > b
		},
		S0C: function(a, b) {
			return a == b
		},
		A1S: function(a, b) {
			return a - b
		},
		y3L: function(a, b) {
			return a > b
		},
		k1V: function(a, b) {
			return a > b
		},
		v79: function(a, b) {
			return a == b
		},
		U7L: function(a, b) {
			return a / b
		},
		o3L: function(a, b) {
			return a == b
		},
		c2S: function(a, b) {
			return a / b
		},
		b0L: function(a, b) {
			return a - b
		},
		b4F: function(a, b) {
			return b > a
		},
		o8F: function(a, b) {
			return a === b
		},
		a6H: function(a, b) {
			return a == b
		},
		s8S: function(a, b) {
			return b >= a
		},
		g4C: function(a, b) {
			return a == b
		},
		Z1H: function(a, b) {
			return a instanceof b
		},
		k8S: function(a, b) {
			return a - b
		},
		g1j: function(a, b) {
			return a | b
		},
		o69: function(a, b) {
			return a >= b
		},
		I69: function(a, b) {
			return a == b
		},
		d7H: function(a, b) {
			return a == b
		},
		v5S: function(a, b) {
			return a == b
		},
		O3S: function(a, b) {
			return a * b
		},
		d2L: function(a, b) {
			return a > b
		},
		V2C: function(a, b) {
			return a == b
		},
		K8F: function(a, b) {
			return a - b
		},
		f8F: function(a, b) {
			return a / b
		},
		y2H: function(a, b) {
			return a > b
		},
		q9S: function(a, b) {
			return a - b
		},
		Z4H: function(a, b) {
			return a != b
		},
		m6C: function(a, b) {
			return a != b
		},
		S99: function(a, b) {
			return a instanceof b
		},
		o5H: function(a, b) {
			return a instanceof b
		},
		T4F: function(a, b) {
			return a - b
		},
		G4F: function(a, b) {
			return a - b
		},
		S6L: function(a, b) {
			return a >= b
		},
		K6V: function(a, b) {
			return a / b
		},
		j3C: function(a, b) {
			return a >= b
		},
		h7S: function(a, b) {
			return a > b
		},
		y69: function(a, b) {
			return a == b
		},
		R0V: function(a, b) {
			return a * b
		},
		Z39: function(a, b) {
			return a > b
		},
		g3F: function(a, b) {
			return a - b
		},
		W89: function(a, b) {
			return a * b
		},
		n0F: function(a, b) {
			return a == b
		},
		z2C: function(a, b) {
			return a == b
		},
		P8V: function(a, b) {
			return a * b
		},
		T7L: function(a, b) {
			return a >= b
		},
		Y3L: function(a, b) {
			return a > b
		},
		q3H: function(a, b) {
			return a == b
		},
		o0V: function(a, b) {
			return a * b
		},
		J2F: function(a, b) {
			return a > b
		},
		d7j: function(a, b) {
			return a >= b
		},
		d4V: function(a, b) {
			return a * b
		},
		B89: function(a, b) {
			return a > b
		},
		T0F: function(a, b) {
			return a == b
		},
		C49: function(a, b) {
			return a > b
		},
		O4C: function(a, b) {
			return a != b
		},
		X8C: function(a, b) {
			return a * b
		},
		m0F: function(a, b, c) {
			return a / b * c
		},
		j9j: function(a, b) {
			return a * b
		},
		n99: function(a, b) {
			return a == b
		},
		U2V: function(a, b) {
			return a != b
		},
		l1V: function(a, b) {
			return a > b
		},
		U9L: function(a, b) {
			return a != b
		},
		o2V: function(a, b) {
			return a == b
		},
		K2V: function(a, b) {
			return a | b
		},
		v59: function(a, b) {
			return a == b
		},
		b6C: function(a, b) {
			return a > b
		},
		S7H: function(a, b) {
			return a == b
		},
		s99: function(a, b) {
			return a == b
		},
		N1j: function(a, b) {
			return a === b
		},
		f6H: function(a, b) {
			return a >= b
		},
		j4S: function(a, b) {
			return a > b
		},
		D1C: function(a, b) {
			return a == b
		},
		B2C: function(a, b) {
			return b > a
		},
		C4F: function(a, b) {
			return a - b
		},
		I29: function(a, b) {
			return a * b
		},
		V7S: function(a, b) {
			return a | b
		},
		L79: function(a, b) {
			return a == b
		},
		C2H: function(a, b) {
			return a === b
		},
		Q5V: function(a, b) {
			return a * b
		},
		t9V: function(a, b) {
			return a & b
		},
		y2S: function(a, b) {
			return a * b
		},
		N9S: function(a, b) {
			return a > b
		},
		U0S: function(a, b) {
			return a * b
		},
		i2F: function(a, b) {
			return a - b
		},
		f5H: function(a, b) {
			return a > b
		},
		b4V: function(a, b) {
			return a * b
		},
		t1j: function(a, b) {
			return a | b
		},
		P99: function(a, b) {
			return a instanceof b
		},
		P5S: function(a, b) {
			return a > b
		},
		Y2S: function(a, b) {
			return a != b
		},
		P0L: function(a, b) {
			return a > b
		},
		F9S: function(a, b) {
			return a - b
		},
		U3V: function(a, b) {
			return b >= a
		},
		f1C: function(a, b) {
			return a * b
		},
		a1C: function(a, b) {
			return a > b
		},
		p4C: function(a, b) {
			return a == b
		},
		R5F: function(a, b, c) {
			return a * b * c
		},
		m8H: function(a, b) {
			return a !== b
		},
		x3V: function(a, b) {
			return a == b
		},
		d0C: function(a, b) {
			return a > b
		},
		r6j: function(a, b) {
			return a > b
		},
		D2V: function(a, b) {
			return a - b
		},
		u89: function(a, b) {
			return a * b
		},
		i1L: function(a, b) {
			return a != b
		},
		R2F: function(a, b) {
			return a != b
		},
		L6L: function(a, b) {
			return a - b
		},
		D5L: function(a, b) {
			return a != b
		},
		H1H: function(a, b) {
			return a > b
		},
		k99: function(a, b) {
			return a != b
		},
		a2H: function(a, b) {
			return a == b
		},
		U6j: function(a, b) {
			return a == b
		},
		B6S: function(a, b) {
			return a >= b
		},
		m79: function(a, b) {
			return a == b
		},
		t19: function(a, b) {
			return a != b
		},
		R4F: function(a, b) {
			return a * b
		},
		z59: function(a, b) {
			return a * b
		},
		x3H: function(a, b) {
			return a != b
		},
		T3S: function(a, b) {
			return a / b
		},
		f29: function(a, b) {
			return a * b
		},
		g7C: function(a, b) {
			return a > b
		},
		Q3H: function(a, b) {
			return a instanceof b
		},
		B6L: function(a, b) {
			return a != b
		},
		A2H: function(a, b) {
			return a > b
		},
		U5F: function(a, b) {
			return a == b
		},
		T4C: function(a, b) {
			return a - b
		},
		Y7V: function(a, b) {
			return a == b
		},
		C3F: function(a, b, c) {
			return a * b * c
		},
		H8C: function(a, b) {
			return a !== b
		},
		f69: function(a, b) {
			return a > b
		},
		R1S: function(a, b) {
			return a > b
		},
		g6j: function(a, b) {
			return a - b
		},
		Z7S: function(a, b) {
			return a == b
		},
		T6j: function(a, b) {
			return a != b
		},
		M1V: function(a, b) {
			return a * b
		},
		D7F: function(a, b, c) {
			return a * b * c
		},
		g9S: function(a, b) {
			return a >>> b
		},
		o4S: function(a, b) {
			return a != b
		},
		I7V: function(a, b) {
			return a == b
		},
		i0F: function(a, b, c) {
			return a * b / c
		},
		A9j: function(a, b) {
			return a * b
		},
		b1V: function(a, b) {
			return a * b
		},
		E4C: function(a, b) {
			return a == b
		},
		J2S: function(a, b) {
			return a != b
		},
		D4S: function(a, b) {
			return a * b
		},
		W2C: function(a, b) {
			return a == b
		},
		r09: function(a, b) {
			return a * b
		},
		o0H: function(a, b) {
			return a == b
		},
		T7S: function(a, b) {
			return a / b
		},
		m6S: function(a, b) {
			return a << b
		},
		h6C: function(a, b) {
			return a > b
		},
		p39: function(a, b) {
			return a instanceof b
		},
		X3F: function(a, b) {
			return a - b
		},
		p09: function(a, b) {
			return a / b
		},
		t0S: function(a, b) {
			return a - b
		},
		G49: function(a, b) {
			return a * b
		},
		s59: function(a, b) {
			return a * b
		},
		k2C: function(a, b) {
			return a >= b
		},
		c5L: function(a, b) {
			return a * b
		},
		s2L: function(a, b) {
			return a == b
		},
		C5C: function(a, b) {
			return a - b
		},
		d8V: function(a, b) {
			return a / b
		},
		e4S: function(a, b) {
			return b > a
		},
		M6L: function(a, b) {
			return a != b
		},
		w5S: function(a, b) {
			return a > b
		},
		w6C: function(a, b) {
			return a > b
		},
		q7S: function(a, b) {
			return a == b
		},
		b2C: function(a, b) {
			return a >= b
		},
		u39: function(a, b) {
			return a > b
		},
		Y69: function(a, b) {
			return a != b
		},
		o4F: function(a, b) {
			return b > a
		},
		e49: function(a, b) {
			return a == b
		},
		g89: function(a, b) {
			return a == b
		},
		u4L: function(a, b) {
			return a != b
		},
		P0C: function(a, b) {
			return a != b
		},
		m99: function(a, b) {
			return a > b
		},
		G5H: function(a, b) {
			return a == b
		},
		F39: function(a, b) {
			return a == b
		},
		M0C: function(a, b) {
			return a != b
		},
		D2S: function(a, b) {
			return a != b
		},
		j29: function(a, b) {
			return a in b
		},
		r1j: function(a, b) {
			return a > b
		},
		i7V: function(a, b) {
			return a == b
		},
		u6j: function(a, b) {
			return a == b
		},
		a5H: function(a, b) {
			return a > b
		},
		S6C: function(a, b) {
			return a >= b
		},
		G2H: function(a, b) {
			return a === b
		},
		p0F: function(a, b) {
			return a * b
		},
		L5S: function(a, b) {
			return a > b
		},
		K9j: function(a, b) {
			return a * b
		},
		e2V: function(a, b) {
			return a > b
		},
		c8F: function(a, b, c) {
			return a * b * c
		},
		R2S: function(a, b) {
			return a != b
		},
		t4H: function(a, b) {
			return a != b
		},
		C0H: function(a, b) {
			return a == b
		},
		I1S: function(a, b) {
			return a > b
		},
		c5H: function(a, b) {
			return a - b
		},
		k79: function(a, b) {
			return a != b
		},
		d6C: function(a, b) {
			return a > b
		},
		K5H: function(a, b) {
			return a instanceof b
		},
		H4C: function(a, b) {
			return a * b
		},
		q6j: function(a, b) {
			return a / b
		},
		Z3H: function(a, b) {
			return a instanceof b
		},
		e0V: function(a, b) {
			return a == b
		},
		n0C: function(a, b) {
			return a != b
		},
		i5H: function(a, b) {
			return a / b
		},
		E19: function(a, b) {
			return a != b
		},
		I2H: function(a, b) {
			return a > b
		},
		f1S: function(a, b) {
			return a > b
		},
		z4V: function(a, b) {
			return a * b
		},
		i9j: function(a, b) {
			return a * b
		},
		f4S: function(a, b) {
			return a == b
		},
		Q9L: function(a, b) {
			return a / b
		},
		u4H: function(a, b) {
			return a == b
		},
		W6L: function(a, b) {
			return a >= b
		},
		R29: function(a, b) {
			return a * b
		},
		H3V: function(a, b) {
			return a instanceof b
		},
		r9S: function(a, b) {
			return a > b
		},
		N3S: function(a, b) {
			return a - b
		},
		q19: function(a, b) {
			return a > b
		},
		T39: function(a, b) {
			return a * b
		},
		k59: function(a, b) {
			return a * b
		},
		R0H: function(a, b) {
			return a != b
		},
		S8V: function(a, b) {
			return a >= b
		},
		s1V: function(a, b) {
			return a - b
		},
		B8H: function(a, b) {
			return a == b
		},
		n1V: function(a, b) {
			return a > b
		},
		E3H: function(a, b) {
			return a > b
		},
		Z9S: function(a, b) {
			return a - b
		},
		Y2H: function(a, b) {
			return a != b
		},
		i49: function(a, b) {
			return a > b
		},
		k9H: function(a, b) {
			return a == b
		},
		R2V: function(a, b) {
			return a != b
		},
		Z7L: function(a, b) {
			return a == b
		},
		V0L: function(a, b) {
			return b > a
		},
		b6S: function(a, b) {
			return a << b
		},
		R3C: function(a, b) {
			return a * b
		},
		G0H: function(a, b) {
			return a == b
		},
		o5L: function(a, b) {
			return a == b
		},
		s7j: function(a, b) {
			return a == b
		},
		y2V: function(a, b) {
			return a == b
		},
		F9C: function(a, b) {
			return a > b
		},
		F3S: function(a, b) {
			return a > b
		},
		l9H: function(a, b) {
			return a == b
		},
		h99: function(a, b) {
			return a != b
		},
		e2S: function(a, b) {
			return a != b
		},
		C1L: function(a, b) {
			return a >= b
		},
		c5C: function(a, b) {
			return a - b
		},
		f49: function(a, b) {
			return a - b
		},
		V9H: function(a, b) {
			return b > a
		},
		Q39: function(a, b) {
			return a * b
		},
		z8H: function(a, b) {
			return a == b
		},
		t3F: function(a, b) {
			return a == b
		},
		r7C: function(a, b) {
			return a == b
		},
		X8L: function(a, b) {
			return a - b
		},
		U3H: function(a, b) {
			return a != b
		},
		H9V: function(a, b) {
			return a & b
		},
		Z9V: function(a, b) {
			return a >> b
		},
		F7C: function(a, b) {
			return a > b
		},
		P2C: function(a, b) {
			return a == b
		},
		X0S: function(a, b) {
			return a > b
		},
		o2F: function(a, b) {
			return a === b
		},
		L6V: function(a, b, c) {
			return a / b * c
		},
		l79: function(a, b) {
			return a > b
		},
		u1H: function(a, b) {
			return a == b
		},
		Y4S: function(a, b) {
			return a == b
		},
		G1S: function(a, b) {
			return a > b
		},
		O4L: function(a, b) {
			return a * b
		},
		W6S: function(a, b) {
			return a * b
		},
		V4V: function(a, b) {
			return a * b
		},
		q4F: function(a, b) {
			return a * b
		},
		F4C: function(a, b) {
			return a != b
		},
		m9H: function(a, b) {
			return a != b
		},
		H9C: function(a, b) {
			return a > b
		},
		s89: function(a, b) {
			return a != b
		},
		l2L: function(a, b) {
			return a != b
		},
		x8C: function(a, b) {
			return a == b
		},
		u9S: function(a, b) {
			return a > b
		},
		I9V: function(a, b, c) {
			return a * b * c
		},
		x9S: function(a, b) {
			return a << b
		},
		L7S: function(a, b) {
			return a | b
		},
		M8V: function(a, b) {
			return a / b
		},
		Q3V: function(a, b) {
			return a == b
		},
		F3V: function(a, b) {
			return a == b
		},
		t5V: function(a, b) {
			return a * b
		},
		P7H: function(a, b) {
			return a != b
		},
		k8H: function(a, b) {
			return a == b
		},
		o1L: function(a, b) {
			return a >= b
		},
		I3C: function(a, b) {
			return a != b
		},
		P6S: function(a, b) {
			return a >>> b
		},
		f2F: function(a, b) {
			return a * b
		},
		W7H: function(a, b) {
			return a == b
		},
		I3L: function(a, b) {
			return a == b
		},
		s79: function(a, b) {
			return a / b
		},
		B0L: function(a, b) {
			return a == b
		},
		o2H: function(a, b) {
			return a > b
		},
		c69: function(a, b) {
			return a != b
		},
		B1V: function(a, b) {
			return a - b
		},
		o6H: function(a, b) {
			return a == b
		},
		r19: function(a, b) {
			return a != b
		},
		H7L: function(a, b) {
			return a - b
		},
		x6V: function(a, b) {
			return a - b
		},
		M8H: function(a, b) {
			return a == b
		},
		d6L: function(a, b) {
			return a != b
		},
		K4F: function(a, b, c) {
			return a * b / c
		},
		E9S: function(a, b) {
			return a << b
		},
		I1C: function(a, b) {
			return a == b
		},
		C5F: function(a, b) {
			return a - b
		},
		k6S: function(a, b) {
			return a - b
		},
		h8V: function(a, b) {
			return a == b
		},
		m6L: function(a, b) {
			return a > b
		},
		m7H: function(a, b) {
			return a != b
		},
		g8L: function(a, b) {
			return a > b
		},
		q9V: function(a, b) {
			return a | b
		},
		q3V: function(a, b) {
			return a instanceof b
		},
		n9H: function(a, b) {
			return a == b
		},
		e5L: function(a, b) {
			return a * b
		},
		Z4L: function(a, b) {
			return a != b
		},
		N39: function(a, b) {
			return a > b
		},
		E8L: function(a, b) {
			return a > b
		},
		Y0H: function(a, b) {
			return a == b
		},
		l9V: function(a, b) {
			return a * b
		},
		b8H: function(a, b) {
			return a == b
		},
		f0V: function(a, b) {
			return a == b
		},
		F7L: function(a, b) {
			return a == b
		},
		L99: function(a, b) {
			return a != b
		},
		i0V: function(a, b) {
			return a == b
		},
		T9V: function(a, b, c) {
			return a * b / c
		},
		D2F: function(a, b) {
			return a * b
		},
		U9V: function(a, b) {
			return a | b
		},
		w4V: function(a, b) {
			return a * b
		},
		e69: function(a, b) {
			return a != b
		},
		r4C: function(a, b) {
			return a != b
		},
		T9S: function(a, b) {
			return a << b
		},
		A0V: function(a, b) {
			return a / b
		},
		N09: function(a, b) {
			return a * b
		},
		z7S: function(a, b) {
			return a * b
		},
		e3C: function(a, b) {
			return a == b
		},
		o1S: function(a, b) {
			return a == b
		},
		J49: function(a, b) {
			return a == b
		},
		M6C: function(a, b) {
			return a == b
		},
		P2L: function(a, b) {
			return a > b
		},
		a4S: function(a, b) {
			return a != b
		},
		u1j: function(a, b) {
			return a / b
		},
		w0L: function(a, b) {
			return a > b
		},
		b89: function(a, b) {
			return a * b
		},
		R7V: function(a, b) {
			return a == b
		},
		s6L: function(a, b) {
			return a > b
		},
		a2S: function(a, b) {
			return a / b
		},
		p8C: function(a, b) {
			return a == b
		},
		n6L: function(a, b) {
			return a != b
		},
		j6V: function(a, b) {
			return a / b
		},
		I2S: function(a, b) {
			return a != b
		},
		o2S: function(a, b) {
			return a - b
		},
		v8V: function(a, b) {
			return a * b
		},
		j2F: function(a, b) {
			return a > b
		},
		v2L: function(a, b) {
			return a instanceof b
		},
		q3F: function(a, b) {
			return a == b
		},
		T1H: function(a, b) {
			return a == b
		},
		z8S: function(a, b) {
			return a > b
		},
		R49: function(a, b) {
			return a * b
		},
		B59: function(a, b) {
			return a == b
		},
		a6V: function(a, b) {
			return a * b
		},
		p7C: function(a, b) {
			return a >= b
		},
		c29: function(a, b) {
			return a > b
		},
		f7V: function(a, b) {
			return a == b
		},
		d8S: function(a, b) {
			return a == b
		},
		t8C: function(a, b) {
			return a != b
		},
		g3S: function(a, b) {
			return a - b
		},
		S0L: function(a, b) {
			return a - b
		},
		r9V: function(a, b) {
			return a * b
		},
		A6V: function(a, b) {
			return a - b
		},
		X6j: function(a, b) {
			return a == b
		},
		Q1H: function(a, b) {
			return a > b
		},
		C5H: function(a, b) {
			return a >= b
		},
		b79: function(a, b) {
			return a == b
		},
		I5C: function(a, b) {
			return a - b
		},
		j1C: function(a, b) {
			return a == b
		},
		V8V: function(a, b) {
			return a == b
		},
		E09: function(a, b) {
			return a * b
		},
		o3C: function(a, b) {
			return a != b
		},
		I6H: function(a, b) {
			return a == b
		},
		l5S: function(a, b) {
			return a > b
		},
		Z19: function(a, b) {
			return a instanceof b
		},
		h59: function(a, b) {
			return a > b
		},
		O8L: function(a, b) {
			return a > b
		},
		M7H: function(a, b) {
			return a instanceof b
		},
		C2V: function(a, b) {
			return a == b
		},
		F09: function(a, b, c) {
			return a * b / c
		},
		U7S: function(a, b) {
			return a > b
		},
		g1H: function(a, b) {
			return a > b
		},
		E89: function(a, b) {
			return a * b
		},
		Y1C: function(a, b) {
			return a > b
		},
		L8H: function(a, b) {
			return a == b
		},
		Y2F: function(a, b) {
			return a - b
		},
		K7V: function(a, b) {
			return a % b
		},
		K5L: function(a, b) {
			return a == b
		},
		F8L: function(a, b) {
			return a > b
		},
		X4H: function(a, b) {
			return a != b
		},
		U4L: function(a, b) {
			return a instanceof b
		},
		N19: function(a, b) {
			return a == b
		},
		T4L: function(a, b) {
			return a == b
		},
		h5S: function(a, b) {
			return a > b
		},
		K0F: function(a, b, c) {
			return a * b / c
		},
		I49: function(a, b) {
			return a * b
		},
		B8V: function(a, b) {
			return a == b
		},
		G7V: function(a, b) {
			return a % b
		},
		k6C: function(a, b) {
			return a == b
		},
		C7V: function(a, b) {
			return a & b
		},
		c7V: function(a, b) {
			return a == b
		},
		B99: function(a, b) {
			return a == b
		},
		n5S: function(a, b) {
			return a * b
		},
		Z4C: function(a, b) {
			return a != b
		},
		p1j: function(a, b) {
			return a / b
		},
		v1V: function(a, b) {
			return a > b
		},
		r8L: function(a, b) {
			return a - b
		},
		V79: function(a, b) {
			return a == b
		},
		n6S: function(a, b) {
			return a >>> b
		},
		V8H: function(a, b) {
			return a != b
		},
		N3H: function(a, b) {
			return a == b
		},
		N8L: function(a, b) {
			return a > b
		},
		K1C: function(a, b) {
			return a == b
		},
		R5H: function(a, b) {
			return a == b
		},
		K3C: function(a, b) {
			return a == b
		},
		B0C: function(a, b) {
			return a > b
		},
		A2V: function(a, b) {
			return a > b
		},
		h6S: function(a, b) {
			return a - b
		},
		A69: function(a, b) {
			return a == b
		},
		i69: function(a, b) {
			return a > b
		},
		W6C: function(a, b) {
			return a == b
		},
		m0L: function(a, b) {
			return a > b
		},
		x09: function(a, b) {
			return a * b
		},
		d2C: function(a, b) {
			return a == b
		},
		H9S: function(a, b) {
			return a >>> b
		},
		f5C: function(a, b) {
			return a != b
		},
		I4F: function(a, b) {
			return a - b
		},
		a29: function(a, b) {
			return a in b
		},
		z6L: function(a, b) {
			return a == b
		},
		y29: function(a, b) {
			return a * b
		},
		P9V: function(a, b) {
			return a > b
		},
		H09: function(a, b) {
			return a == b
		},
		R5C: function(a, b) {
			return a != b
		},
		A7V: function(a, b) {
			return a > b
		},
		X5F: function(a, b) {
			return a == b
		},
		c3C: function(a, b) {
			return a > b
		},
		m8S: function(a, b) {
			return a > b
		},
		O9S: function(a, b) {
			return a >>> b
		},
		J2H: function(a, b) {
			return a == b
		},
		Z9C: function(a, b) {
			return a > b
		},
		D3C: function(a, b) {
			return a == b
		},
		U4F: function(a, b) {
			return b > a
		},
		I0H: function(a, b) {
			return a instanceof b
		},
		H3S: function(a, b) {
			return a * b
		},
		O39: function(a, b) {
			return b > a
		},
		C4S: function(a, b) {
			return a != b
		},
		Q4L: function(a, b) {
			return a != b
		},
		i3C: function(a, b) {
			return a == b
		},
		T2V: function(a, b) {
			return a == b
		},
		p8L: function(a, b) {
			return a > b
		},
		O4H: function(a, b) {
			return a === b
		},
		V1V: function(a, b) {
			return a / b
		},
		E9L: function(a, b) {
			return a * b
		},
		C1S: function(a, b) {
			return a == b
		},
		X4F: function(a, b) {
			return a - b
		},
		X4L: function(a, b) {
			return a != b
		},
		Z8C: function(a, b) {
			return a >= b
		},
		O4F: function(a, b, c) {
			return a * b * c
		},
		u8L: function(a, b) {
			return a - b
		},
		t3V: function(a, b) {
			return a > b
		},
		K69: function(a, b) {
			return a >= b
		},
		q7L: function(a, b) {
			return a == b
		},
		R1C: function(a, b) {
			return a == b
		},
		W8V: function(a, b) {
			return a == b
		},
		d59: function(a, b) {
			return a == b
		},
		F9L: function(a, b) {
			return a - b
		},
		u7L: function(a, b) {
			return a == b
		},
		N4H: function(a, b) {
			return a != b
		},
		x4L: function(a, b) {
			return a % b
		},
		z5S: function(a, b) {
			return a > b
		},
		p19: function(a, b) {
			return a == b
		},
		s8H: function(a, b) {
			return a == b
		},
		G7F: function(a, b, c) {
			return a * b * c
		},
		x4H: function(a, b) {
			return a == b
		},
		O09: function(a, b) {
			return a * b
		},
		c1C: function(a, b) {
			return a != b
		},
		F5V: function(a, b) {
			return a * b
		},
		T4H: function(a, b) {
			return a == b
		},
		y8F: function(a, b) {
			return a == b
		},
		Q19: function(a, b) {
			return a == b
		},
		r3S: function(a, b) {
			return a * b
		},
		x9L: function(a, b) {
			return a | b
		},
		z0C: function(a, b) {
			return a == b
		},
		N89: function(a, b) {
			return a * b
		},
		O19: function(a, b) {
			return a == b
		},
		w1j: function(a, b) {
			return a - b
		},
		u5V: function(a, b) {
			return a * b
		},
		X0F: function(a, b) {
			return a * b
		},
		V6L: function(a, b) {
			return a == b
		},
		O9V: function(a, b) {
			return a >> b
		},
		H7C: function(a, b) {
			return a > b
		},
		d89: function(a, b) {
			return a - b
		},
		X7C: function(a, b) {
			return a != b
		},
		r39: function(a, b) {
			return a * b
		},
		m2C: function(a, b) {
			return a == b
		},
		h7H: function(a, b) {
			return a != b
		},
		T9C: function(a, b) {
			return a > b
		},
		Q9C: function(a, b) {
			return b > a
		},
		M0L: function(a, b) {
			return a > b
		},
		I4S: function(a, b) {
			return a > b
		},
		t8L: function(a, b) {
			return a > b
		},
		t1H: function(a, b) {
			return a == b
		},
		f3L: function(a, b) {
			return a != b
		},
		K1L: function(a, b) {
			return a > b
		},
		S7j: function(a, b) {
			return a == b
		},
		d0L: function(a, b) {
			return a > b
		},
		L0L: function(a, b) {
			return b > a
		},
		V6C: function(a, b) {
			return a > b
		},
		Q6V: function(a, b, c) {
			return a / b * c
		},
		Q3S: function(a, b) {
			return a >= b
		},
		F6j: function(a, b) {
			return a == b
		},
		B9H: function(a, b) {
			return a != b
		},
		A29: function(a, b) {
			return a * b
		},
		H7F: function(a, b) {
			return a * b
		},
		m59: function(a, b) {
			return a == b
		},
		t6j: function(a, b) {
			return a > b
		},
		C6H: function(a, b) {
			return a == b
		},
		w59: function(a, b) {
			return a % b
		},
		F1H: function(a, b) {
			return a > b
		},
		w79: function(a, b) {
			return a == b
		},
		O8C: function(a, b) {
			return a == b
		},
		u0S: function(a, b) {
			return a - b
		},
		N4C: function(a, b) {
			return a != b
		},
		E7C: function(a, b) {
			return a > b
		},
		N5V: function(a, b) {
			return a * b
		},
		v0L: function(a, b) {
			return b > a
		},
		n8H: function(a, b) {
			return a == b
		},
		Y6H: function(a, b) {
			return a > b
		},
		D5H: function(a, b) {
			return a != b
		},
		B79: function(a, b) {
			return a == b
		},
		J2V: function(a, b, c) {
			return a % b * c
		},
		Q7L: function(a, b) {
			return a - b
		},
		y1C: function(a, b) {
			return a > b
		},
		l6L: function(a, b) {
			return a != b
		},
		x6j: function(a, b) {
			return a == b
		},
		F1j: function(a, b) {
			return a / b
		},
		d79: function(a, b) {
			return a == b
		},
		Z8F: function(a, b, c, d) {
			return a * b * c * d
		},
		y4S: function(a, b) {
			return a != b
		},
		R2H: function(a, b) {
			return a === b
		},
		S1V: function(a, b) {
			return a > b
		},
		s4V: function(a, b) {
			return a * b
		},
		G69: function(a, b) {
			return a - b
		},
		C5L: function(a, b) {
			return a == b
		},
		k0L: function(a, b) {
			return b > a
		},
		T3H: function(a, b) {
			return a != b
		},
		Z9L: function(a, b) {
			return a >= b
		},
		G9j: function(a, b) {
			return a * b
		},
		W99: function(a, b) {
			return a == b
		},
		s7H: function(a, b) {
			return a != b
		},
		j5C: function(a, b) {
			return a * b
		},
		H9L: function(a, b) {
			return a | b
		},
		G0V: function(a, b) {
			return a / b
		},
		j1L: function(a, b) {
			return a == b
		},
		o49: function(a, b) {
			return a / b
		},
		E1H: function(a, b) {
			return a == b
		},
		A2S: function(a, b) {
			return a != b
		},
		l2C: function(a, b) {
			return a == b
		},
		i5C: function(a, b) {
			return a == b
		},
		e5C: function(a, b) {
			return a == b
		},
		a2F: function(a, b) {
			return a * b
		},
		F5F: function(a, b) {
			return a * b
		},
		S59: function(a, b) {
			return a * b
		},
		c2F: function(a, b) {
			return a > b
		},
		e6V: function(a, b) {
			return a == b
		},
		J7V: function(a, b) {
			return a > b
		},
		i2H: function(a, b) {
			return a == b
		},
		h0L: function(a, b) {
			return a > b
		},
		J6V: function(a, b) {
			return a - b
		},
		t7C: function(a, b) {
			return a > b
		},
		n0L: function(a, b) {
			return a > b
		},
		X19: function(a, b) {
			return a - b
		},
		F4L: function(a, b) {
			return a * b
		},
		h0C: function(a, b) {
			return a != b
		},
		e29: function(a, b) {
			return a * b
		},
		e8F: function(a, b, c) {
			return a * b * c
		},
		j0H: function(a, b) {
			return a == b
		},
		p3S: function(a, b) {
			return a * b
		},
		z8V: function(a, b) {
			return b > a
		},
		w7H: function(a, b) {
			return a == b
		},
		N0S: function(a, b) {
			return a != b
		},
		d8H: function(a, b) {
			return a == b
		},
		J69: function(a, b) {
			return a != b
		},
		r0S: function(a, b) {
			return a > b
		},
		g5V: function(a, b) {
			return a * b
		},
		p5V: function(a, b) {
			return a * b
		},
		n2C: function(a, b) {
			return a == b
		},
		M4V: function(a, b) {
			return a * b
		},
		k89: function(a, b) {
			return a * b
		},
		Z1j: function(a, b, c) {
			return a - b - c
		},
		h9H: function(a, b) {
			return a != b
		},
		G2F: function(a, b) {
			return a * b
		},
		L0C: function(a, b) {
			return a != b
		},
		c6H: function(a, b) {
			return a != b
		},
		M6S: function(a, b) {
			return a * b
		},
		u7C: function(a, b) {
			return a >= b
		},
		C3L: function(a, b) {
			return a > b
		},
		F9V: function(a, b) {
			return a > b
		},
		q8L: function(a, b) {
			return a > b
		},
		X9C: function(a, b) {
			return a > b
		},
		y1L: function(a, b) {
			return a >= b
		},
		A3L: function(a, b) {
			return a == b
		},
		f2H: function(a, b) {
			return a > b
		},
		c1L: function(a, b) {
			return a != b
		},
		e2H: function(a, b) {
			return a != b
		},
		K2H: function(a, b) {
			return a > b
		},
		X4C: function(a, b) {
			return a > b
		},
		O0S: function(a, b) {
			return a > b
		},
		S4F: function(a, b) {
			return a * b
		},
		H3H: function(a, b) {
			return a != b
		},
		j49: function(a, b) {
			return a instanceof b
		},
		U0F: function(a, b) {
			return a == b
		},
		Z5V: function(a, b) {
			return a - b
		},
		o1C: function(a, b) {
			return a != b
		},
		m8V: function(a, b) {
			return a * b
		},
		T19: function(a, b) {
			return a == b
		},
		R6H: function(a, b) {
			return a == b
		},
		r7L: function(a, b) {
			return a >= b
		},
		Q8L: function(a, b) {
			return a - b
		},
		L2L: function(a, b) {
			return a - b
		},
		M2L: function(a, b) {
			return a == b
		},
		q1H: function(a, b) {
			return a == b
		},
		Y5L: function(a, b) {
			return a > b
		},
		a3L: function(a, b) {
			return a == b
		},
		Q8C: function(a, b) {
			return a != b
		},
		P6C: function(a, b) {
			return a == b
		},
		Z3V: function(a, b) {
			return a != b
		},
		p4H: function(a, b) {
			return a === b
		},
		G3C: function(a, b) {
			return a == b
		},
		Q09: function(a, b) {
			return a * b
		},
		H39: function(a, b) {
			return a > b
		},
		x7L: function(a, b) {
			return a == b
		},
		O1j: function(a, b) {
			return b > a
		},
		Y49: function(a, b) {
			return a - b
		},
		v2C: function(a, b) {
			return a - b
		},
		R8F: function(a, b) {
			return a >= b
		},
		T7C: function(a, b) {
			return a == b
		},
		P8H: function(a, b) {
			return a == b
		},
		K1S: function(a, b) {
			return a - b
		},
		s5S: function(a, b) {
			return a == b
		},
		D2H: function(a, b) {
			return a == b
		},
		J3L: function(a, b) {
			return a > b
		},
		w09: function(a, b) {
			return a * b
		},
		W7j: function(a, b) {
			return a > b
		},
		l7F: function(a, b) {
			return a - b
		},
		E5V: function(a, b) {
			return a * b
		},
		s09: function(a, b) {
			return a * b
		},
		W8H: function(a, b) {
			return a == b
		},
		G29: function(a, b) {
			return a * b
		},
		b0C: function(a, b) {
			return a == b
		},
		n2L: function(a, b) {
			return a >= b
		},
		p4F: function(a, b) {
			return a - b
		},
		I5L: function(a, b) {
			return a / b
		},
		g9C: function(a, b) {
			return a > b
		},
		M2C: function(a, b) {
			return a > b
		},
		d99: function(a, b) {
			return a != b
		},
		l8V: function(a, b) {
			return a * b
		},
		m0C: function(a, b) {
			return a != b
		},
		d4F: function(a, b, c, d) {
			return a * b * c * d
		},
		X3V: function(a, b) {
			return a == b
		},
		j3L: function(a, b) {
			return a != b
		},
		Y2V: function(a, b) {
			return a * b
		},
		z79: function(a, b) {
			return a == b
		},
		p0S: function(a, b) {
			return a - b
		},
		T3V: function(a, b) {
			return b > a
		},
		h4V: function(a, b) {
			return a * b
		},
		q4C: function(a, b) {
			return a != b
		},
		w9H: function(a, b) {
			return a != b
		},
		X39: function(a, b) {
			return a * b
		},
		P1V: function(a, b) {
			return a > b
		},
		D0V: function(a, b) {
			return a - b
		},
		A49: function(a, b) {
			return a - b
		},
		l0H: function(a, b, c) {
			return a / b * c
		},
		M09: function(a, b) {
			return a / b
		},
		L7H: function(a, b) {
			return a != b
		},
		R9j: function(a, b) {
			return a * b
		},
		J0H: function(a, b) {
			return a != b
		},
		v6C: function(a, b) {
			return a > b
		},
		X1H: function(a, b) {
			return a == b
		},
		n9V: function(a, b, c) {
			return a * b * c
		},
		R69: function(a, b) {
			return a == b
		},
		C3C: function(a, b) {
			return a != b
		},
		N4L: function(a, b) {
			return a > b
		},
		q39: function(a, b) {
			return a * b
		},
		F4H: function(a, b) {
			return a != b
		},
		z6C: function(a, b) {
			return a > b
		},
		X9V: function(a, b) {
			return a == b
		},
		G2V: function(a, b) {
			return a | b
		},
		a0V: function(a, b) {
			return a * b
		},
		U39: function(a, b) {
			return a * b
		},
		Q7C: function(a, b) {
			return a == b
		},
		t9L: function(a, b) {
			return a >= b
		},
		K2S: function(a, b) {
			return a / b
		},
		L8V: function(a, b) {
			return a * b
		},
		z99: function(a, b) {
			return a == b
		},
		x1j: function(a, b) {
			return a > b
		},
		o5F: function(a, b) {
			return a > b
		},
		W0C: function(a, b) {
			return a != b
		},
		t3S: function(a, b) {
			return a > b
		},
		I0V: function(a, b) {
			return a - b
		},
		N1H: function(a, b) {
			return a > b
		},
		i1S: function(a, b) {
			return a * b
		},
		M9H: function(a, b) {
			return a == b
		},
		y5H: function(a, b) {
			return b > a
		},
		K49: function(a, b) {
			return a << b
		},
		i2S: function(a, b) {
			return a / b
		},
		l4V: function(a, b) {
			return a * b
		},
		W0L: function(a, b) {
			return a != b
		},
		A5L: function(a, b) {
			return a > b
		},
		P9H: function(a, b) {
			return a == b
		},
		F0S: function(a, b) {
			return a / b
		},
		h8H: function(a, b) {
			return a != b
		},
		r5V: function(a, b) {
			return a * b
		},
		P6L: function(a, b) {
			return a > b
		},
		t9C: function(a, b) {
			return a != b
		},
		J4S: function(a, b) {
			return a * b
		},
		e1S: function(a, b) {
			return a * b
		},
		T5F: function(a, b, c) {
			return a / b * c
		},
		g09: function(a, b) {
			return a / b
		},
		z9H: function(a, b) {
			return a == b
		},
		Q0S: function(a, b) {
			return a - b
		},
		G6H: function(a, b) {
			return a == b
		},
		w1V: function(a, b) {
			return a * b
		},
		r3H: function(a, b) {
			return a == b
		},
		u4C: function(a, b) {
			return a != b
		},
		y4F: function(a, b) {
			return a * b
		},
		X3S: function(a, b) {
			return a > b
		},
		C2S: function(a, b) {
			return a - b
		},
		E3F: function(a, b) {
			return a - b
		},
		z6S: function(a, b) {
			return a - b
		},
		r8C: function(a, b) {
			return a != b
		},
		W5S: function(a, b) {
			return a != b
		},
		r1H: function(a, b) {
			return a != b
		},
		R4S: function(a, b) {
			return a !== b
		},
		c0H: function(a, b) {
			return a == b
		},
		F8C: function(a, b) {
			return a * b
		},
		d1V: function(a, b) {
			return a - b
		},
		C69: function(a, b) {
			return a - b
		},
		S5S: function(a, b) {
			return a != b
		},
		E4L: function(a, b) {
			return a / b
		},
		X2V: function(a, b) {
			return a == b
		},
		V7H: function(a, b) {
			return a != b
		},
		D0H: function(a, b) {
			return a == b
		},
		S2C: function(a, b) {
			return a - b
		},
		u3S: function(a, b) {
			return a * b
		},
		w6L: function(a, b) {
			return a != b
		},
		U3S: function(a, b) {
			return a - b
		},
		n4V: function(a, b) {
			return a * b
		},
		m2L: function(a, b) {
			return a >= b
		},
		E39: function(a, b) {
			return a > b
		},
		P79: function(a, b) {
			return a == b
		},
		m7S: function(a, b) {
			return a > b
		},
		Y1S: function(a, b) {
			return a > b
		},
		Y3C: function(a, b) {
			return a != b
		},
		Z5F: function(a, b) {
			return a * b
		},
		r3V: function(a, b) {
			return a > b
		},
		i5L: function(a, b) {
			return a * b
		},
		U7C: function(a, b) {
			return a > b
		},
		y7V: function(a, b) {
			return a & b
		},
		r4H: function(a, b) {
			return a == b
		},
		V5S: function(a, b) {
			return a > b
		},
		I2F: function(a, b) {
			return a * b
		},
		r9C: function(a, b) {
			return a % b
		},
		c4S: function(a, b) {
			return a > b
		},
		q9C: function(a, b) {
			return a != b
		},
		l99: function(a, b) {
			return a == b
		},
		J1L: function(a, b) {
			return a != b
		},
		q5V: function(a, b) {
			return a * b
		},
		J29: function(a, b) {
			return a in b
		},
		e6H: function(a, b) {
			return a == b
		},
		A4S: function(a, b) {
			return a * b
		},
		q8C: function(a, b) {
			return a > b
		},
		e7V: function(a, b) {
			return a > b
		},
		o5C: function(a, b) {
			return a * b
		},
		K2F: function(a, b) {
			return a != b
		},
		p9V: function(a, b) {
			return a > b
		},
		J1S: function(a, b) {
			return a * b
		},
		x8S: function(a, b) {
			return a - b
		},
		L6S: function(a, b) {
			return a >>> b
		},
		q0S: function(a, b) {
			return a / b
		},
		E8C: function(a, b) {
			return a != b
		},
		q2V: function(a, b) {
			return a * b
		},
		D29: function(a, b) {
			return a * b
		},
		B7j: function(a, b) {
			return a == b
		},
		J6H: function(a, b) {
			return a != b
		},
		l7S: function(a, b) {
			return a | b
		},
		v7S: function(a, b) {
			return a | b
		},
		i4S: function(a, b) {
			return a * b
		},
		Z6j: function(a, b) {
			return a == b
		},
		J9j: function(a, b) {
			return a * b
		},
		T8L: function(a, b) {
			return a > b
		},
		K6H: function(a, b) {
			return a == b
		},
		V6S: function(a, b) {
			return a >>> b
		},
		S8S: function(a, b) {
			return a - b
		},
		v6S: function(a, b) {
			return a - b
		},
		S7S: function(a, b, c) {
			return a * b * c
		},
		T9L: function(a, b) {
			return a > b
		},
		e1L: function(a, b) {
			return a == b
		},
		t3H: function(a, b) {
			return a != b
		},
		G5C: function(a, b) {
			return a != b
		},
		X7S: function(a, b) {
			return a / b
		},
		l7H: function(a, b) {
			return a != b
		},
		N7C: function(a, b) {
			return a != b
		},
		D1L: function(a, b) {
			return a - b
		},
		X5V: function(a, b) {
			return a * b
		},
		A6H: function(a, b) {
			return a == b
		},
		c9j: function(a, b) {
			return a * b
		},
		j5L: function(a, b) {
			return b > a
		},
		f6V: function(a, b) {
			return a - b
		},
		x9C: function(a, b) {
			return a - b
		},
		Q3F: function(a, b) {
			return a - b
		},
		V9V: function(a, b) {
			return a != b
		},
		p3F: function(a, b) {
			return a > b
		},
		w7j: function(a, b) {
			return a > b
		},
		L0F: function(a, b) {
			return a == b
		},
		A5C: function(a, b) {
			return a != b
		},
		h1V: function(a, b) {
			return a > b
		},
		T0S: function(a, b, c) {
			return a - b - c
		},
		a1S: function(a, b) {
			return a << b
		},
		J0V: function(a, b) {
			return a == b
		},
		C1C: function(a, b) {
			return a != b
		},
		i0H: function(a, b) {
			return a == b
		},
		I1L: function(a, b) {
			return a > b
		},
		p3H: function(a, b) {
			return a != b
		},
		J1C: function(a, b) {
			return a == b
		},
		g9L: function(a, b) {
			return a >= b
		},
		l0C: function(a, b) {
			return a == b
		},
		I5H: function(a, b) {
			return a instanceof b
		},
		x4C: function(a, b) {
			return a != b
		},
		S8H: function(a, b) {
			return a == b
		},
		b59: function(a, b) {
			return a * b
		},
		y1S: function(a, b) {
			return a > b
		},
		G1L: function(a, b) {
			return a - b
		},
		S79: function(a, b) {
			return a == b
		},
		l59: function(a, b) {
			return a == b
		},
		f2S: function(a, b) {
			return a != b
		},
		S0F: function(a, b) {
			return b > a
		},
		l8H: function(a, b) {
			return a == b
		},
		b7H: function(a, b) {
			return a > b
		},
		Y6V: function(a, b) {
			return a - b
		},
		Z3F: function(a, b) {
			return a != b
		},
		g9V: function(a, b) {
			return a * b
		},
		d5S: function(a, b) {
			return a != b
		},
		Z0S: function(a, b) {
			return a > b
		},
		b5S: function(a, b) {
			return a != b
		},
		J5C: function(a, b) {
			return a != b
		},
		y2F: function(a, b) {
			return a > b
		},
		v8H: function(a, b) {
			return a != b
		},
		b7j: function(a, b) {
			return a - b
		},
		y0V: function(a, b) {
			return a * b
		},
		t09: function(a, b) {
			return a > b
		},
		b0F: function(a, b) {
			return a * b
		},
		E3V: function(a, b) {
			return a == b
		},
		j0V: function(a, b) {
			return a * b
		},
		g4L: function(a, b) {
			return a / b
		},
		U1H: function(a, b) {
			return a == b
		},
		E0S: function(a, b) {
			return a == b
		},
		z7j: function(a, b) {
			return a == b
		},
		b2L: function(a, b) {
			return a == b
		},
		E6j: function(a, b) {
			return a - b
		},
		S89: function(a, b) {
			return a * b
		},
		s1j: function(a, b) {
			return a - b
		},
		O1H: function(a, b) {
			return a == b
		},
		B1j: function(a, b) {
			return a >= b
		},
		A5H: function(a, b) {
			return a == b
		},
		Q9S: function(a, b) {
			return a > b
		},
		H5V: function(a, b) {
			return a * b
		},
		D5C: function(a, b) {
			return a - b
		},
		t7L: function(a, b) {
			return a - b
		},
		w8H: function(a, b) {
			return a == b
		},
		B7H: function(a, b) {
			return a > b
		},
		L7F: function(a, b, c) {
			return a * b * c
		},
		a69: function(a, b) {
			return a > b
		},
		y49: function(a, b) {
			return a >>> b
		},
		q4L: function(a, b) {
			return a != b
		},
		u3F: function(a, b) {
			return a - b
		},
		w8V: function(a, b) {
			return a == b
		},
		A0H: function(a, b) {
			return a == b
		},
		Q1j: function(a, b) {
			return a / b
		},
		T5V: function(a, b) {
			return a * b
		},
		G8F: function(a, b) {
			return a > b
		},
		r4L: function(a, b) {
			return a | b
		},
		D6H: function(a, b) {
			return a - b
		},
		G2S: function(a, b) {
			return a == b
		},
		i6V: function(a, b) {
			return a == b
		},
		x89: function(a, b) {
			return a * b
		},
		t4L: function(a, b) {
			return a * b
		},
		n8V: function(a, b) {
			return a * b
		},
		r7F: function(a, b, c, d) {
			return a * b * c * d
		},
		S4V: function(a, b) {
			return a % b
		},
		G5L: function(a, b) {
			return a / b
		},
		u19: function(a, b) {
			return a != b
		},
		a1L: function(a, b) {
			return a - b
		},
		o7V: function(a, b) {
			return a & b
		},
		a0H: function(a, b) {
			return a == b
		},
		h8S: function(a, b) {
			return a * b
		},
		O7L: function(a, b) {
			return a == b
		},
		Y5H: function(a, b) {
			return a === b
		},
		G4S: function(a, b) {
			return a != b
		},
		c6V: function(a, b) {
			return a / b
		},
		k8V: function(a, b) {
			return a / b
		},
		q9L: function(a, b) {
			return a | b
		},
		e5H: function(a, b) {
			return a > b
		},
		H4H: function(a, b) {
			return a === b
		},
		Z8L: function(a, b) {
			return a > b
		},
		H6j: function(a, b) {
			return a > b
		},
		g8C: function(a, b) {
			return a != b
		},
		l6C: function(a, b) {
			return a > b
		},
		I8F: function(a, b) {
			return a == b
		},
		h2C: function(a, b) {
			return a - b
		},
		D49: function(a, b) {
			return a - b
		},
		z0L: function(a, b) {
			return a > b
		},
		j2S: function(a, b) {
			return a / b
		},
		N8S: function(a, b, c) {
			return a - b - c
		},
		W2L: function(a, b) {
			return a > b
		},
		a49: function(a, b) {
			return a == b
		},
		p1H: function(a, b) {
			return a != b
		},
		N6V: function(a, b) {
			return a * b
		},
		n7H: function(a, b) {
			return a != b
		},
		f0H: function(a, b) {
			return a == b
		},
		F3H: function(a, b) {
			return a == b
		},
		H1j: function(a, b) {
			return a - b
		},
		o7F: function(a, b, c, d) {
			return a * b * c * d
		},
		N3V: function(a, b) {
			return a == b
		},
		x0S: function(a, b) {
			return a != b
		},
		u3H: function(a, b) {
			return a instanceof b
		},
		E1j: function(a, b) {
			return b > a
		},
		v99: function(a, b) {
			return a == b
		},
		Y8F: function(a, b) {
			return a - b
		},
		f5L: function(a, b) {
			return a > b
		},
		L6C: function(a, b) {
			return a > b
		},
		Y29: function(a, b) {
			return a * b
		},
		s6S: function(a, b) {
			return a * b
		},
		C29: function(a, b) {
			return a * b
		},
		Q6j: function(a, b) {
			return a == b
		},
		M89: function(a, b) {
			return a * b
		},
		F3F: function(a, b) {
			return a > b
		},
		E5F: function(a, b) {
			return a > b
		},
		C8F: function(a, b) {
			return a != b
		},
		A1L: function(a, b) {
			return a > b
		},
		p9S: function(a, b) {
			return a >>> b
		},
		v4V: function(a, b) {
			return a * b
		},
		a5C: function(a, b) {
			return a / b
		},
		B5S: function(a, b) {
			return a != b
		},
		w6S: function(a, b) {
			return a > b
		},
		M79: function(a, b) {
			return a == b
		},
		s0C: function(a, b) {
			return a != b
		},
		g5F: function(a, b, c) {
			return a * b * c
		},
		P4V: function(a, b) {
			return a * b
		},
		h79: function(a, b) {
			return a == b
		},
		K29: function(a, b) {
			return a * b
		},
		t4C: function(a, b) {
			return a == b
		},
		H0S: function(a, b) {
			return a - b
		},
		W59: function(a, b) {
			return a > b
		},
		v7H: function(a, b) {
			return a != b
		},
		W8S: function(a, b) {
			return a - b
		},
		j7V: function(a, b) {
			return a == b
		},
		A8F: function(a, b) {
			return a - b
		},
		g3V: function(a, b) {
			return a != b
		},
		L4V: function(a, b) {
			return a * b
		},
		b6L: function(a, b) {
			return a > b
		},
		M5S: function(a, b) {
			return a != b
		},
		N7L: function(a, b) {
			return a - b
		},
		S2L: function(a, b) {
			return a > b
		},
		p6j: function(a, b) {
			return a - b
		},
		q3S: function(a, b) {
			return a * b
		},
		d6S: function(a, b) {
			return a * b
		},
		v8S: function(a, b) {
			return a > b
		},
		n8S: function(a, b) {
			return a - b
		},
		b9H: function(a, b) {
			return a == b
		},
		A3C: function(a, b) {
			return a * b
		},
		W09: function(a, b) {
			return a * b
		},
		J3C: function(a, b) {
			return a != b
		},
		y5C: function(a, b) {
			return a * b
		},
		Y5C: function(a, b) {
			return a != b
		},
		H3F: function(a, b) {
			return a > b
		},
		a7V: function(a, b) {
			return a == b
		},
		k2L: function(a, b) {
			return a - b
		},
		O5V: function(a, b) {
			return a * b
		},
		Y1L: function(a, b) {
			return a == b
		},
		v6L: function(a, b) {
			return a - b
		},
		s2C: function(a, b) {
			return a > b
		},
		U4H: function(a, b) {
			return a != b
		},
		r89: function(a, b, c) {
			return a / b * c
		},
		o9j: function(a, b) {
			return a != b
		},
		e2F: function(a, b) {
			return a > b
		},
		L59: function(a, b) {
			return a != b
		},
		z89: function(a, b) {
			return a - b
		},
		U3F: function(a, b) {
			return a > b
		},
		U19: function(a, b) {
			return a >= b
		},
		g39: function(a, b) {
			return a * b
		},
		g0S: function(a, b) {
			return a == b
		},
		U9S: function(a, b) {
			return a > b
		},
		f5F: function(a, b, c) {
			return a * b * c
		},
		Q4C: function(a, b) {
			return b > a
		},
		W1V: function(a, b) {
			return a * b
		},
		G1C: function(a, b) {
			return a == b
		},
		O9C: function(a, b) {
			return a == b
		},
		k5S: function(a, b) {
			return a * b
		},
		k5F: function(a, b, c) {
			return a * b * c
		},
		L2C: function(a, b) {
			return a == b
		},
		s8V: function(a, b) {
			return a == b
		},
		x3S: function(a, b) {
			return a - b
		},
		x0F: function(a, b, c) {
			return a * b * c
		},
		U5V: function(a, b) {
			return a - b
		},
		E3S: function(a, b) {
			return a - b
		},
		B6C: function(a, b) {
			return b > a
		},
		E4H: function(a, b) {
			return a != b
		},
		V99: function(a, b) {
			return a == b
		},
		B2L: function(a, b) {
			return a == b
		},
		p9L: function(a, b) {
			return a - b
		},
		X7L: function(a, b) {
			return a / b
		},
		O7C: function(a, b) {
			return a == b
		},
		U8C: function(a, b) {
			return a != b
		},
		P7S: function(a, b) {
			return a | b
		},
		u9L: function(a, b) {
			return a * b
		},
		j69: function(a, b) {
			return a > b
		},
		i3L: function(a, b) {
			return a != b
		},
		u09: function(a, b) {
			return a / b
		},
		y6H: function(a, b) {
			return a == b
		},
		j5H: function(a, b) {
			return a > b
		},
		z7H: function(a, b) {
			return a == b
		},
		N9C: function(a, b) {
			return a > b
		},
		t39: function(a, b) {
			return a == b
		},
		O3H: function(a, b) {
			return a != b
		},
		t5F: function(a, b) {
			return a > b
		},
		w8S: function(a, b) {
			return a > b
		},
		A2F: function(a, b) {
			return a != b
		},
		D8F: function(a, b) {
			return a >= b
		},
		e0H: function(a, b) {
			return a == b
		},
		m5S: function(a, b) {
			return a * b
		},
		q7C: function(a, b) {
			return a / b
		},
		i6H: function(a, b) {
			return a == b
		},
		G3L: function(a, b) {
			return a == b
		},
		L8S: function(a, b) {
			return a / b
		},
		B4V: function(a, b) {
			return a * b
		},
		p7L: function(a, b) {
			return a / b
		},
		X3H: function(a, b) {
			return a == b
		},
		S9H: function(a, b) {
			return a == b
		},
		R1L: function(a, b) {
			return a > b
		},
		k4V: function(a, b) {
			return a * b
		},
		B09: function(a, b) {
			return a * b
		},
		U9C: function(a, b) {
			return a == b
		},
		W1j: function(a, b) {
			return a - b
		},
		v9H: function(a, b) {
			return a != b
		},
		h6L: function(a, b) {
			return a > b
		},
		O3V: function(a, b) {
			return a == b
		},
		D6V: function(a, b) {
			return a - b
		},
		Q89: function(a, b) {
			return a * b
		},
		X9S: function(a, b) {
			return a - b
		},
		M8S: function(a, b) {
			return a > b
		},
		F19: function(a, b) {
			return a != b
		},
		l6S: function(a, b) {
			return a > b
		},
		Q4H: function(a, b) {
			return a == b
		},
		d0F: function(a, b, c) {
			return a * b / c
		},
		O9L: function(a, b) {
			return a - b
		},
		u8C: function(a, b) {
			return a != b
		},
		I9j: function(a, b) {
			return a * b
		},
		D9j: function(a, b) {
			return a * b
		},
		K4S: function(a, b) {
			return a != b
		},
		y5L: function(a, b) {
			return a == b
		},
		i29: function(a, b) {
			return a > b
		},
		h2L: function(a, b) {
			return a - b
		},
		C0V: function(a, b) {
			return a - b
		},
		f9j: function(a, b) {
			return a * b
		},
		s9H: function(a, b) {
			return a > b
		},
		x8L: function(a, b) {
			return a > b
		},
		g4H: function(a, b) {
			return a == b
		},
		x19: function(a, b) {
			return a == b
		},
		z1V: function(a, b) {
			return a > b
		},
		y5F: function(a, b) {
			return a * b
		},
		E7L: function(a, b) {
			return a == b
		},
		T3F: function(a, b) {
			return a == b
		},
		b8V: function(a, b) {
			return b >= a
		},
		Z7C: function(a, b) {
			return a - b
		},
		f2V: function(a, b) {
			return a * b
		},
		J5L: function(a, b) {
			return a * b
		},
		R3L: function(a, b) {
			return a > b
		},
		D1S: function(a, b) {
			return a > b
		},
		e3L: function(a, b) {
			return a >= b
		},
		r3F: function(a, b) {
			return a == b
		},
		P59: function(a, b) {
			return a != b
		},
		C2F: function(a, b) {
			return a - b
		},
		b99: function(a, b) {
			return a instanceof b
		},
		W79: function(a, b) {
			return a == b
		},
		X9L: function(a, b) {
			return a != b
		},
		w2L: function(a, b) {
			return a > b
		},
		V0C: function(a, b) {
			return a != b
		},
		j1S: function(a, b) {
			return a > b
		},
		i1C: function(a, b) {
			return a > b
		},
		O6j: function(a, b) {
			return a - b
		},
		O3F: function(a, b) {
			return a == b
		},
		K3L: function(a, b) {
			return a == b
		},
		t9S: function(a, b) {
			return a << b
		},
		R5L: function(a, b) {
			return a != b
		},
		k7S: function(a, b) {
			return a | b
		}
	}, this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c) {
				this.initialize(a, b, c)
			},
			b = a.prototype;
		b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function(a, b, c) {
			this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = (new Date).getTime()
		}, b.preventDefault = function() {
			this.defaultPrevented = !0
		}, b.stopPropagation = function() {
			this.propagationStopped = !0
		}, b.stopImmediatePropagation = function() {
			this.immediatePropagationStopped = this.propagationStopped = !0
		}, b.remove = function() {
			this.removed = !0
		}, b.clone = function() {
			return new a(this.type, this.bubbles, this.cancelable)
		}, b.toString = function() {
			return "[Event (type=" + this.type + ")]"
		}, createjs.Event = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function() {},
			b = a.prototype;
		a.initialize = function(a) {
			a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
		}, b._listeners = null, b._captureListeners = null, b.initialize = function() {}, b.addEventListener = function(a, b, c) {
			var d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {},
				e = d[a];
			return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
		}, b.on = function(a, b, c, d, e, f) {
			return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
				b.call(c, a, e), d && a.remove()
			}, f)
		}, b.removeEventListener = function(a, b, c) {
			var e, f, g, d = c ? this._captureListeners : this._listeners;
			if (d && (e = d[a]))
				for (f = 0, g = e.length; y7w3j.k7j(g, f); f++)
					if (y7w3j.z7j(e[f], b)) {
						y7w3j.S7j(1, g) ? delete d[a] : e.splice(f, 1);
						break
					}
		}, b.off = b.removeEventListener, b.removeAllEventListeners = function(a) {
			a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
		}, b.dispatchEvent = function(a, b) {
			var c, d, e, f, g;
			if ("string" == typeof a) {
				if (c = this._listeners, !c || !c[a]) return !1;
				a = new createjs.Event(a)
			}
			if (a.target = b || this, a.bubbles && this.parent) {
				for (d = this, e = [d]; d.parent;) e.push(d = d.parent);
				for (g = e.length, f = y7w3j.b7j(g, 1); y7w3j.d7j(f, 0) && !a.propagationStopped; f--) e[f]._dispatchEvent(a, 1 + y7w3j.M7j(0, f));
				for (f = 1; y7w3j.W7j(g, f) && !a.propagationStopped; f++) e[f]._dispatchEvent(a, 3)
			} else this._dispatchEvent(a, 2);
			return a.defaultPrevented
		}, b.hasEventListener = function(a) {
			var b = this._listeners,
				c = this._captureListeners;
			return !!(b && b[a] || c && c[a])
		}, b.willTrigger = function(a) {
			var b, c;
			for (b = this; b;) {
				if (c = function(a) {
						b = a.parent
					}, b.hasEventListener(a)) return !0;
				c(b)
			}
			return !1
		}, b.toString = function() {
			return "[EventDispatcher]"
		}, b._dispatchEvent = function(a, b) {
			var c, e, f, g, d = y7w3j.s7j(1, b) ? this._captureListeners : this._listeners;
			if (a && d) {
				if (e = d[a.type], !e || !(c = e.length)) return;
				for (a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice(), f = 0; y7w3j.w7j(c, f) && !a.immediatePropagationStopped; f++) g = e[f], g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, y7w3j.B7j(1, b)), a.removed = !1)
			}
		}, createjs.EventDispatcher = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		createjs.indexOf = function(a, b) {
			for (var c = 0, d = a.length; y7w3j.x1j(d, c); c++)
				if (y7w3j.N1j(b, a[c])) return c;
			return -1
		}
	}(), this.createjs = this.createjs || {},
	function() {
		var a = function() {
			throw "UID cannot be instantiated"
		};
		a._nextID = 0, a.get = function() {
			return a._nextID++
		}, createjs.UID = a
	}(), this.createjs = this.createjs || {},
	function() {
		var b, a = function() {
			throw "Ticker cannot be instantiated."
		};
		a.RAF_SYNCHED = "synched", a.RAF = "raf", a.TIMEOUT = "timeout", a.useRAF = !1, a.timingMode = null, a.maxDelta = 0, a.removeEventListener = null, a.removeAllEventListeners = null, a.dispatchEvent = null, a.hasEventListener = null, a._listeners = null, createjs.EventDispatcher.initialize(a), a._addEventListener = a.addEventListener, a.addEventListener = function() {
			return !a._inited && a.init(), a._addEventListener.apply(a, arguments)
		}, a._paused = !1, a._inited = !1, a._startTime = 0, a._pausedTime = 0, a._ticks = 0, a._pausedTicks = 0, a._interval = 50, a._lastTime = 0, a._times = null, a._tickTimes = null, a._timerId = null, a._raf = !0, a.init = function() {
			a._inited || (a._inited = !0, a._times = [], a._tickTimes = [], a._startTime = a._getTime(), a._times.push(a._lastTime = 0), a.setInterval(a._interval))
		}, a.reset = function() {
			if (a._raf) {
				var b = z9i1y[q1y].cancelAnimationFrame || z9i1y[q1y].webkitCancelAnimationFrame || z9i1y[q1y].mozCancelAnimationFrame || z9i1y[q1y].oCancelAnimationFrame || z9i1y[q1y].msCancelAnimationFrame;
				b && b(a._timerId)
			} else clearTimeout(a._timerId);
			a.removeAllEventListeners("tick")
		}, a.setInterval = function(b) {
			a._interval = b, a._inited && a._setupTick()
		}, a.getInterval = function() {
			return a._interval
		}, a.setFPS = function(b) {
			a.setInterval(y7w3j.Q1j(1e3, b))
		}, a.getFPS = function() {
			return y7w3j.u1j(1e3, a._interval)
		}, a.getMeasuredTickTime = function(b) {
			var e, c = 0,
				d = a._tickTimes;
			if (y7w3j.E1j(d.length, 1)) return -1;
			for (b = Math.min(d.length, b || y7w3j.g1j(0, a.getFPS())), e = 0; y7w3j.r1j(b, e); e++) c += d[e];
			return y7w3j.p1j(c, b)
		}, a.getMeasuredFPS = function(b) {
			var c = a._times;
			return y7w3j.O1j(c.length, 2) ? -1 : (b = Math.min(y7w3j.H1j(c.length, 1), b || y7w3j.t1j(0, a.getFPS())), y7w3j.F1j(1e3, (c[0] - c[b]) / b))
		}, a.setPaused = function(b) {
			var c = function(b) {
				a._paused = b
			};
			c(b)
		}, a.getPaused = function() {
			return a._paused
		}, a.getTime = function(b) {
			return y7w3j.Z1j(a._getTime(), a._startTime, b ? a._pausedTime : 0)
		}, a.getEventTime = function(b) {
			return y7w3j.W1j(a._lastTime || a._startTime, b ? a._pausedTime : 0)
		}, a.getTicks = function(b) {
			return y7w3j.s1j(a._ticks, b ? a._pausedTicks : 0)
		}, a._handleSynch = function() {
			var b = y7w3j.w1j(a._getTime(), a._startTime);
			a._timerId = null, a._setupTick(), y7w3j.B1j(b - a._lastTime, .97 * (a._interval - 1)) && a._tick()
		}, a._handleRAF = function() {
			a._timerId = null, a._setupTick(), a._tick()
		}, a._handleTimeout = function() {
			a._timerId = null, a._setupTick(), a._tick()
		}, a._setupTick = function() {
			var b, c;
			if (y7w3j.x6j(null, a._timerId)) {
				if (b = a.timingMode || a.useRAF && a.RAF_SYNCHED, (y7w3j.N6j(b, a.RAF_SYNCHED) || y7w3j.Q6j(b, a.RAF)) && (c = z9i1y[q1y].requestAnimationFrame || z9i1y[q1y].webkitRequestAnimationFrame || z9i1y[q1y]["mozRequestAnimationFrame"] || z9i1y[q1y].oRequestAnimationFrame || z9i1y[q1y].msRequestAnimationFrame)) return a._timerId = c(y7w3j.u6j(b, a.RAF) ? a._handleRAF : a._handleSynch), a._raf = !0, void 0;
				a._raf = !1, a._timerId = setTimeout(a._handleTimeout, a._interval)
			}
		}, a._tick = function() {
			var e, f, b = y7w3j.E6j(a._getTime(), a._startTime),
				c = y7w3j.g6j(b, a._lastTime),
				d = a._paused;
			for (a._ticks++, d && (a._pausedTicks++, a._pausedTime += c), a._lastTime = b, a.hasEventListener("tick") && (e = new createjs.Event("tick"), f = a.maxDelta, e.delta = f && y7w3j.r6j(c, f) ? f : c, e.paused = d, e.time = b, e.runTime = y7w3j.p6j(b, a._pausedTime), a.dispatchEvent(e)), a._tickTimes.unshift(y7w3j.O6j(a._getTime(), b)); y7w3j.H6j(a._tickTimes.length, 100);) a._tickTimes.pop();
			for (a._times.unshift(b); y7w3j.t6j(a._times.length, 100);) a._times.pop()
		}, b = z9i1y[q1y].performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow), a._getTime = function() {
			return b && b.call(performance) || (new Date).getTime()
		}, createjs.Ticker = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c, d, e, f, g, h, i, j) {
				this.initialize(a, b, c, d, e, f, g, h, i, j)
			},
			b = a.prototype = new createjs.Event;
		b.stageX = 0, b.stageY = 0, b.rawX = 0, b.rawY = 0, b.nativeEvent = null, b.pointerID = 0, b.primary = !1, b.addEventListener = null, b.removeEventListener = null, b.removeAllEventListeners = null, b.dispatchEvent = null, b.hasEventListener = null, b._listeners = null, createjs.EventDispatcher.initialize(b), b._get_localX = function() {
			return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
		}, b._get_localY = function() {
			return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
		};
		try {
			Object.defineProperties(b, {
				localX: {
					get: b._get_localX
				},
				localY: {
					get: b._get_localY
				}
			})
		} catch (c) {}
		b.Event_initialize = b.initialize, b.initialize = function(a, b, c, d, e, f, g, h, i, j) {
			this.Event_initialize(a, b, c), this.stageX = d, this.stageY = e, this.nativeEvent = f, this.pointerID = g, this.primary = h, this.rawX = y7w3j.F6j(null, i) ? d : i, this.rawY = y7w3j.Z6j(null, j) ? e : j
		}, b.clone = function() {
			return new a(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.target, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
		}, b.toString = function() {
			return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
		}, createjs.MouseEvent = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c, d, e, f) {
				this.initialize(a, b, c, d, e, f)
			},
			b = a.prototype;
		a.identity = null, a.DEG_TO_RAD = y7w3j.q6j(Math.PI, 180), b.a = 1, b.b = 0, b.c = 0, b.d = 1, b.tx = 0, b.ty = 0, b.alpha = 1, b.shadow = null, b.compositeOperation = null, b.initialize = function(a, b, c, d, e, f) {
			return this.a = y7w3j.X6j(null, a) ? 1 : a, this.b = b || 0, this.c = c || 0, this.d = y7w3j.U6j(null, d) ? 1 : d, this.tx = e || 0, this.ty = f || 0, this
		}, b.prepend = function(a, b, c, d, e, f) {
			var h, i, g = this.tx;
			return (y7w3j.T6j(1, a) || y7w3j.y9j(0, b) || y7w3j.C9j(0, c) || y7w3j.o9j(1, d)) && (h = this.a, i = this.c, this.a = y7w3j.R9j(h, a) + y7w3j.I9j(this.b, c), this.b = y7w3j.G9j(h, b) + y7w3j.K9j(this.b, d), this.c = y7w3j.A9j(i, a) + y7w3j.D9j(this.d, c), this.d = y7w3j.f9j(i, b) + y7w3j.Y9j(this.d, d)), this.tx = y7w3j.e9j(g, a) + y7w3j.J9j(this.ty, c) + e, this.ty = y7w3j.i9j(g, b) + y7w3j.c9j(this.ty, d) + f, this
		}, b.append = function(a, b, c, d, e, f) {
			var g = this.a,
				h = this.b,
				i = this.c,
				j = this.d;
			return this.a = y7w3j.j9j(a, g) + y7w3j.a9j(b, i), this.b = y7w3j.l4V(a, h) + y7w3j.P4V(b, j), this.c = y7w3j.V4V(c, g) + y7w3j.n4V(d, i), this.d = y7w3j.L4V(c, h) + y7w3j.m4V(d, j), this.tx = y7w3j.v4V(e, g) + y7w3j.h4V(f, i) + this.tx, this.ty = y7w3j.k4V(e, h) + y7w3j.z4V(f, j) + this.ty, this
		}, b.prependMatrix = function(a) {
			return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty), this.prependProperties(a.alpha, a.shadow, a.compositeOperation), this
		}, b.appendMatrix = function(a) {
			return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty), this.appendProperties(a.alpha, a.shadow, a.compositeOperation), this
		}, b.prependTransform = function(b, c, d, e, f, g, h, i, j) {
			if (y7w3j.S4V(f, 360)) var k = y7w3j.b4V(f, a.DEG_TO_RAD),
				l = Math.cos(k),
				m = Math.sin(k);
			else l = 1, m = 0;
			return (i || j) && (this.tx -= i, this.ty -= j), g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.prepend(y7w3j.d4V(l, d), y7w3j.M4V(m, d), -m * e, y7w3j.W4V(l, e), 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c)) : this.prepend(y7w3j.s4V(l, d), y7w3j.w4V(m, d), -m * e, y7w3j.B4V(l, e), b, c), this
		}, b.appendTransform = function(b, c, d, e, f, g, h, i, j) {
			if (y7w3j.x5V(f, 360)) var k = y7w3j.N5V(f, a.DEG_TO_RAD),
				l = Math.cos(k),
				m = Math.sin(k);
			else l = 1, m = 0;
			return g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c), this.append(y7w3j.Q5V(l, d), y7w3j.u5V(m, d), -m * e, y7w3j.E5V(l, e), 0, 0)) : this.append(y7w3j.g5V(l, d), y7w3j.r5V(m, d), -m * e, y7w3j.p5V(l, e), b, c), (i || j) && (this.tx -= y7w3j.O5V(i, this.a) + y7w3j.H5V(j, this.c), this.ty -= y7w3j.t5V(i, this.b) + y7w3j.F5V(j, this.d)), this
		}, b.rotate = function(a) {
			var b = Math.cos(a),
				c = Math.sin(a),
				d = this.a,
				e = this.c,
				f = this.tx;
			return this.a = y7w3j.Z5V(d * b, this.b * c), this.b = y7w3j.q5V(d, c) + y7w3j.X5V(this.b, b), this.c = y7w3j.U5V(e * b, this.d * c), this.d = y7w3j.T5V(e, c) + y7w3j.y0V(this.d, b), this.tx = y7w3j.C0V(f * b, this.ty * c), this.ty = y7w3j.o0V(f, c) + y7w3j.R0V(this.ty, b), this
		}, b.skew = function(b, c) {
			return b *= a.DEG_TO_RAD, c *= a.DEG_TO_RAD, this.append(Math.cos(c), Math.sin(c), -Math.sin(b), Math.cos(b), 0, 0), this
		}, b.scale = function(a, b) {
			return this.a *= a, this.d *= b, this.c *= a, this.b *= b, this.tx *= a, this.ty *= b, this
		}, b.translate = function(a, b) {
			return this.tx += a, this.ty += b, this
		}, b.identity = function() {
			return this.alpha = this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this.shadow = this.compositeOperation = null, this
		}, b.invert = function() {
			var a = this.a,
				b = this.b,
				c = this.c,
				d = this.d,
				e = this.tx,
				f = y7w3j.I0V(a * d, b * c);
			return this.a = y7w3j.G0V(d, f), this.b = -b / f, this.c = -c / f, this.d = y7w3j.K0V(a, f), this.tx = y7w3j.A0V(c * this.ty - d * e, f), this.ty = -y7w3j.D0V(a * this.ty, b * e) / f, this
		}, b.isIdentity = function() {
			return y7w3j.f0V(0, this.tx) && y7w3j.Y0V(0, this.ty) && y7w3j.e0V(1, this.a) && y7w3j.J0V(0, this.b) && y7w3j.i0V(0, this.c) && y7w3j.c0V(1, this.d)
		}, b.transformPoint = function(a, b, c) {
			return c = c || {}, c.x = y7w3j.j0V(a, this.a) + y7w3j.a0V(b, this.c) + this.tx, c.y = y7w3j.l8V(a, this.b) + y7w3j.P8V(b, this.d) + this.ty, c
		}, b.decompose = function(b) {
			y7w3j.V8V(null, b) && (b = {}), b.x = this.tx, b.y = this.ty, b.scaleX = Math.sqrt(y7w3j.n8V(this.a, this.a) + y7w3j.L8V(this.b, this.b)), b.scaleY = Math.sqrt(y7w3j.m8V(this.c, this.c) + y7w3j.v8V(this.d, this.d));
			var c = Math.atan2(-this.c, this.d),
				d = Math.atan2(this.b, this.a);
			return y7w3j.h8V(c, d) ? (b.rotation = y7w3j.k8V(d, a.DEG_TO_RAD), y7w3j.z8V(this.a, 0) && y7w3j.S8V(this.d, 0) && (b.rotation += y7w3j.b8V(b.rotation, 0) ? 180 : -180), b.skewX = b.skewY = 0) : (b.skewX = y7w3j.d8V(c, a.DEG_TO_RAD), b.skewY = y7w3j.M8V(d, a.DEG_TO_RAD)), b
		}, b.reinitialize = function(a, b, c, d, e, f, g, h, i) {
			return this.initialize(a, b, c, d, e, f), this.alpha = y7w3j.W8V(null, g) ? 1 : g, this.shadow = h, this.compositeOperation = i, this
		}, b.copy = function(a) {
			return this.reinitialize(a.a, a.b, a.c, a.d, a.tx, a.ty, a.alpha, a.shadow, a.compositeOperation)
		}, b.appendProperties = function(a, b, c) {
			return this.alpha *= a, this.shadow = b || this.shadow, this.compositeOperation = c || this.compositeOperation, this
		}, b.prependProperties = function(a, b, c) {
			return this.alpha *= a, this.shadow = this.shadow || b, this.compositeOperation = this.compositeOperation || c, this
		}, b.clone = function() {
			return (new a).copy(this)
		}, b.toString = function() {
			return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
		}, a.identity = new a, createjs.Matrix2D = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b) {
				this.initialize(a, b)
			},
			b = a.prototype;
		b.x = 0, b.y = 0, b.initialize = function(a, b) {
			return this.x = y7w3j.s8V(null, a) ? 0 : a, this.y = y7w3j.w8V(null, b) ? 0 : b, this
		}, b.copy = function(a) {
			return this.initialize(a.x, a.y)
		}, b.clone = function() {
			return new a(this.x, this.y)
		}, b.toString = function() {
			return "[Point (x=" + this.x + " y=" + this.y + ")]"
		}, createjs.Point = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c, d) {
				this.initialize(a, b, c, d)
			},
			b = a.prototype;
		b.x = 0, b.y = 0, b.width = 0, b.height = 0, b.initialize = function(a, b, c, d) {
			return this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this
		}, b.copy = function(a) {
			return this.initialize(a.x, a.y, a.width, a.height)
		}, b.clone = function() {
			return new a(this.x, this.y, this.width, this.height)
		}, b.toString = function() {
			return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
		}, createjs.Rectangle = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c, d, e, f, g) {
				this.initialize(a, b, c, d, e, f, g)
			},
			b = a.prototype;
		b.target = null, b.overLabel = null, b.outLabel = null, b.downLabel = null, b.play = !1, b._isPressed = !1, b._isOver = !1, b.initialize = function(a, b, c, d, e, f, g) {
			a.addEventListener && (this.target = a, a.cursor = "pointer", this.overLabel = y7w3j.B8V(null, c) ? "over" : c, this.outLabel = y7w3j.x3V(null, b) ? "out" : b, this.downLabel = y7w3j.N3V(null, d) ? "down" : d, this.play = e, this.setEnabled(!0), this.handleEvent({}), f && (g && (f.actionsEnabled = !1, f.gotoAndStop && f.gotoAndStop(g)), a.hitArea = f))
		}, b.setEnabled = function(a) {
			var b = this.target;
			a ? (b.addEventListener("rollover", this), b.addEventListener("rollout", this), b.addEventListener("mousedown", this), b.addEventListener("pressup", this)) : (b.removeEventListener("rollover", this), b.removeEventListener("rollout", this), b.removeEventListener("mousedown", this), b.removeEventListener("pressup", this))
		}, b.toString = function() {
			return "[ButtonHelper]"
		}, b.handleEvent = function(a) {
			var b, c = this.target,
				d = a.type;
			y7w3j.Q3V("mousedown", d) ? (this._isPressed = !0, b = this.downLabel) : y7w3j.u3V("pressup", d) ? (this._isPressed = !1, b = this._isOver ? this.overLabel : this.outLabel) : y7w3j.E3V("rollover", d) ? (this._isOver = !0, b = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, b = this._isPressed ? this.overLabel : this.outLabel), this.play ? c.gotoAndPlay && c.gotoAndPlay(b) : c.gotoAndStop && c.gotoAndStop(b)
		}, createjs.ButtonHelper = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c, d) {
				this.initialize(a, b, c, d)
			},
			b = a.prototype;
		a.identity = null, b.color = null, b.offsetX = 0, b.offsetY = 0, b.blur = 0, b.initialize = function(a, b, c, d) {
			this.color = a, this.offsetX = b, this.offsetY = c, this.blur = d
		}, b.toString = function() {
			return "[Shadow]"
		}, b.clone = function() {
			return new a(this.color, this.offsetX, this.offsetY, this.blur)
		}, a.identity = new a("transparent", 0, 0, 0), createjs.Shadow = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a) {
				this.initialize(a)
			},
			b = a.prototype = new createjs.EventDispatcher;
		b.complete = !0, b.framerate = 0, b._animations = null, b._frames = null, b._images = null, b._data = null, b._loadCount = 0, b._frameHeight = 0, b._frameWidth = 0, b._numFrames = 0, b._regX = 0, b._regY = 0, b.initialize = function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m;
			if (y7w3j.g3V(null, a)) {
				if (this.framerate = a.framerate || 0, a.images && y7w3j.r3V(c = a.images.length, 0))
					for (e = this._images = [], b = 0; y7w3j.p3V(c, b); b++) f = a.images[b], "string" == typeof f && (g = f, f = z9i1y[c1y]["createElement"]("img"), f.src = g), e.push(f), f.getContext || f.complete || (this._loadCount++, this.complete = !1, function(a) {
						f.onload = function() {
							a._handleImageLoad()
						}
					}(this));
				if (y7w3j.O3V(null, a.frames));
				else if (y7w3j.H3V(a.frames, Array))
					for (this._frames = [], e = a.frames, b = 0, c = e.length; y7w3j.t3V(c, b); b++) h = e[b], this._frames.push({
						image: this._images[h[4] ? h[4] : 0],
						rect: new createjs.Rectangle(h[0], h[1], h[2], h[3]),
						regX: h[5] || 0,
						regY: h[6] || 0
					});
				else d = a.frames, this._frameWidth = d.width, this._frameHeight = d.height, this._regX = d.regX || 0, this._regY = d.regY || 0, this._numFrames = d.count, y7w3j.F3V(0, this._loadCount) && this._calculateFrames();
				if (this._animations = [], y7w3j.Z3V(null, d = a.animations)) {
					this._data = {};
					for (i in d) {
						if (j = function() {
								k.frames = [l[0]]
							}, k = {
								name: i
							}, l = d[i], "number" == typeof l) e = k.frames = [l];
						else if (y7w3j.q3V(l, Array))
							if (y7w3j.X3V(1, l.length)) j();
							else
								for (k.speed = l[3], k.next = l[2], e = k.frames = [], b = l[0]; y7w3j.U3V(b, l[1]); b++) e.push(b);
						else k.speed = l.speed, k.next = l.next, m = l.frames, e = k.frames = "number" == typeof m ? [m] : m.slice(0);
						(k.next === !0 || void 0 === k.next) && (k.next = i), (k.next === !1 || y7w3j.T3V(e.length, 2) && y7w3j.y2V(k.next, i)) && (k.next = null), k.speed || (k.speed = 1), this._animations.push(i), this._data[i] = k
					}
				}
			}
		}, b.getNumFrames = function(a) {
			if (y7w3j.C2V(null, a)) return this._frames ? this._frames.length : this._numFrames;
			var b = this._data[a];
			return y7w3j.o2V(null, b) ? 0 : b.frames.length
		}, b.getAnimations = function() {
			return this._animations.slice(0)
		}, b.getAnimation = function(a) {
			return this._data[a]
		}, b.getFrame = function(a) {
			var b;
			return this._frames && (b = this._frames[a]) ? b : null
		}, b.getFrameBounds = function(a, b) {
			var c = this.getFrame(a);
			return c ? (b || new createjs.Rectangle).initialize(-c.regX, -c.regY, c.rect.width, c.rect.height) : null
		}, b.toString = function() {
			return "[SpriteSheet]"
		}, b.clone = function() {
			var b = new a;
			return b.complete = this.complete, b._animations = this._animations, b._frames = this._frames, b._images = this._images, b._data = this._data, b._frameHeight = this._frameHeight, b._frameWidth = this._frameWidth, b._numFrames = this._numFrames, b._loadCount = this._loadCount, b
		}, b._handleImageLoad = function() {
			0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
		}, b._calculateFrames = function() {
			var a, b, c, d, e, f, g, h, i, j;
			if (!this._frames && y7w3j.R2V(0, this._frameWidth)) {
				for (this._frames = [], a = 0, b = this._frameWidth, c = this._frameHeight, d = 0, e = this._images; y7w3j.I2V(d, e.length); d++) {
					for (f = e[d], g = y7w3j.G2V(0, f.width / b), h = y7w3j.K2V(0, f.height / c), i = y7w3j.A2V(this._numFrames, 0) ? Math.min(y7w3j.D2V(this._numFrames, a), y7w3j.f2V(g, h)) : y7w3j.Y2V(g, h), j = 0; y7w3j.e2V(i, j); j++) this._frames.push({
						image: f,
						rect: new createjs.Rectangle(y7w3j.J2V(j, g, b), y7w3j.q2V(0 | j / g, c), b, c),
						regX: this._regX,
						regY: this._regY
					});
					a += i
				}
				this._numFrames = a
			}
		}, createjs.SpriteSheet = a
	}(), this.createjs = this.createjs || {},
	function() {
		function a(a, b, c) {
			this.f = a, this.params = b, this.path = y7w3j.X2V(null, c) ? !0 : c
		}
		var b, c, d, e;
		a.prototype.exec = function(a) {
			this.f.apply(a, this.params)
		}, b = function() {
			this.initialize()
		}, c = b.prototype, b.getRGB = function(a, b, c, d) {
			return y7w3j.U2V(null, a) && y7w3j.T2V(null, c) && (d = b, c = y7w3j.y7V(255, a), b = y7w3j.C7V(255, a >> 8), a = y7w3j.o7V(255, a >> 16)), y7w3j.R7V(null, d) ? "rgb(" + a + "," + b + "," + c + ")" : "rgba(" + a + "," + b + "," + c + "," + d + ")"
		}, b.getHSL = function(a, b, c, d) {
			return y7w3j.I7V(null, d) ? "hsl(" + y7w3j.G7V(a, 360) + "," + b + "%," + c + "%)" : "hsla(" + y7w3j.K7V(a, 360) + "," + b + "%," + c + "%," + d + ")"
		}, b.Command = a, b.BASE_64 = {
			A: 0,
			B: 1,
			C: 2,
			D: 3,
			E: 4,
			F: 5,
			G: 6,
			H: 7,
			I: 8,
			J: 9,
			K: 10,
			L: 11,
			M: 12,
			N: 13,
			O: 14,
			P: 15,
			Q: 16,
			R: 17,
			S: 18,
			T: 19,
			U: 20,
			V: 21,
			W: 22,
			X: 23,
			Y: 24,
			Z: 25,
			a: 26,
			b: 27,
			c: 28,
			d: 29,
			e: 30,
			f: 31,
			g: 32,
			h: 33,
			i: 34,
			j: 35,
			k: 36,
			l: 37,
			m: 38,
			n: 39,
			o: 40,
			p: 41,
			q: 42,
			r: 43,
			s: 44,
			t: 45,
			u: 46,
			v: 47,
			w: 48,
			x: 49,
			y: 50,
			z: 51,
			0: 52,
			1: 53,
			2: 54,
			3: 55,
			4: 56,
			5: 57,
			6: 58,
			7: 59,
			8: 60,
			9: 61,
			"+": 62,
			"/": 63
		}, b.STROKE_CAPS_MAP = ["butt", "round", "square"], b.STROKE_JOINTS_MAP = ["miter", "round", "bevel"], d = createjs.createCanvas ? createjs.createCanvas() : z9i1y[c1y]["createElement"]("canvas"), d.getContext && (e = b._ctx = d.getContext("2d"), b.beginCmd = new a(e.beginPath, [], !1), b.fillCmd = new a(e.fill, [], !1), b.strokeCmd = new a(e.stroke, [], !1), d.width = d.height = 1), c._strokeInstructions = null, c._strokeStyleInstructions = null, c._strokeIgnoreScale = !1, c._fillInstructions = null, c._fillMatrix = null, c._instructions = null, c._oldInstructions = null, c._activeInstructions = null, c._active = !1, c._dirty = !1, c.initialize = function() {
			this.clear(), this._ctx = b._ctx
		}, c.isEmpty = function() {
			return !(this._instructions.length || this._oldInstructions.length || this._activeInstructions.length)
		}, c.draw = function(a) {
			this._dirty && this._updateInstructions();
			for (var b = this._instructions, c = 0, d = b.length; y7w3j.A7V(d, c); c++) b[c].exec(a)
		}, c.drawAsPath = function(a) {
			this._dirty && this._updateInstructions();
			for (var b, c = this._instructions, d = 0, e = c.length; y7w3j.D7V(e, d); d++)((b = c[d]).path || y7w3j.f7V(0, d)) && b.exec(a)
		}, c.moveTo = function(b, c) {
			return this._activeInstructions.push(new a(this._ctx.moveTo, [b, c])), this
		}, c.lineTo = function(b, c) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.lineTo, [b, c])), this
		}, c.arcTo = function(b, c, d, e, f) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.arcTo, [b, c, d, e, f])), this
		}, c.arc = function(b, c, d, e, f, g) {
			return this._dirty = this._active = !0, y7w3j.Y7V(null, g) && (g = !1), this._activeInstructions.push(new a(this._ctx.arc, [b, c, d, e, f, g])), this
		}, c.quadraticCurveTo = function(b, c, d, e) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.quadraticCurveTo, [b, c, d, e])), this
		}, c.bezierCurveTo = function(b, c, d, e, f, g) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.bezierCurveTo, [b, c, d, e, f, g])), this
		}, c.rect = function(b, c, d, e) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.rect, [b, c, d, e])), this
		}, c.closePath = function() {
			return this._active && (this._dirty = !0, this._activeInstructions.push(new a(this._ctx.closePath, []))), this
		}, c.clear = function() {
			return this._instructions = [], this._oldInstructions = [], this._activeInstructions = [], this._strokeStyleInstructions = this._strokeInstructions = this._fillInstructions = this._fillMatrix = null, this._active = this._dirty = this._strokeIgnoreScale = !1, this
		}, c.beginFill = function(b) {
			return this._active && this._newPath(), this._fillInstructions = b ? [new a(this._setProp, ["fillStyle", b], !1)] : null, this._fillMatrix = null, this
		}, c.beginLinearGradientFill = function(b, c, d, e, f, g) {
			this._active && this._newPath();
			for (var h = this._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; y7w3j.e7V(j, i); i++) h.addColorStop(c[i], b[i]);
			return this._fillInstructions = [new a(this._setProp, ["fillStyle", h], !1)], this._fillMatrix = null, this
		}, c.beginRadialGradientFill = function(b, c, d, e, f, g, h, i) {
			this._active && this._newPath();
			for (var j = this._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; y7w3j.J7V(l, k); k++) j.addColorStop(c[k], b[k]);
			return this._fillInstructions = [new a(this._setProp, ["fillStyle", j], !1)], this._fillMatrix = null, this
		}, c.beginBitmapFill = function(b, c, d) {
			this._active && this._newPath(), c = c || "";
			var e = this._ctx.createPattern(b, c);
			return this._fillInstructions = [new a(this._setProp, ["fillStyle", e], !1)], this._fillMatrix = d ? [d.a, d.b, d.c, d.d, d.tx, d.ty] : null, this
		}, c.endFill = function() {
			return this.beginFill()
		}, c.setStrokeStyle = function(c, d, e, f, g) {
			return this._active && this._newPath(), this._strokeStyleInstructions = [new a(this._setProp, ["lineWidth", y7w3j.i7V(null, c) ? "1" : c], !1), new a(this._setProp, ["lineCap", y7w3j.c7V(null, d) ? "butt" : isNaN(d) ? d : b.STROKE_CAPS_MAP[d]], !1), new a(this._setProp, ["lineJoin", y7w3j.j7V(null, e) ? "miter" : isNaN(e) ? e : b.STROKE_JOINTS_MAP[e]], !1), new a(this._setProp, ["miterLimit", y7w3j.a7V(null, f) ? "10" : f], !1)], this._strokeIgnoreScale = g, this
		}, c.beginStroke = function(b) {
			return this._active && this._newPath(), this._strokeInstructions = b ? [new a(this._setProp, ["strokeStyle", b], !1)] : null, this
		}, c.beginLinearGradientStroke = function(b, c, d, e, f, g) {
			this._active && this._newPath();
			for (var h = this._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; y7w3j.l1V(j, i); i++) h.addColorStop(c[i], b[i]);
			return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", h], !1)], this
		}, c.beginRadialGradientStroke = function(b, c, d, e, f, g, h, i) {
			this._active && this._newPath();
			for (var j = this._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; y7w3j.P1V(l, k); k++) j.addColorStop(c[k], b[k]);
			return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", j], !1)], this
		}, c.beginBitmapStroke = function(b, c) {
			this._active && this._newPath(), c = c || "";
			var d = this._ctx.createPattern(b, c);
			return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", d], !1)], this
		}, c.endStroke = function() {
			return this.beginStroke(), this
		}, c.curveTo = c.quadraticCurveTo, c.drawRect = c.rect, c.drawRoundRect = function(a, b, c, d, e) {
			return this.drawRoundRectComplex(a, b, c, d, e, e, e, e), this
		}, c.drawRoundRectComplex = function(b, c, d, e, f, g, h, i) {
			var o, p, j = y7w3j.V1V(e > d ? d : e, 2),
				k = 0,
				l = 0,
				m = 0,
				n = 0;
			return y7w3j.n1V(0, f) && (f *= k = -1), y7w3j.L1V(f, j) && (f = j), y7w3j.m1V(0, g) && (g *= l = -1), y7w3j.v1V(g, j) && (g = j), y7w3j.h1V(0, h) && (h *= m = -1), y7w3j.k1V(h, j) && (h = j), y7w3j.z1V(0, i) && (i *= n = -1), y7w3j.S1V(i, j) && (i = j), this._dirty = this._active = !0, o = this._ctx.arcTo, p = this._ctx.lineTo, this._activeInstructions.push(new a(this._ctx.moveTo, [b + d - g, c]), new a(o, [b + d + y7w3j.b1V(g, l), y7w3j.d1V(c, g * l), b + d, c + g, g]), new a(p, [b + d, c + e - h]), new a(o, [b + d + y7w3j.M1V(h, m), c + e + y7w3j.W1V(h, m), b + d - h, c + e, h]), new a(p, [b + i, c + e]), new a(o, [y7w3j.s1V(b, i * n), c + e + y7w3j.w1V(i, n), b, c + e - i, i]), new a(p, [b, c + f]), new a(o, [y7w3j.B1V(b, f * k), y7w3j.x6V(c, f * k), b + f, c, f]), new a(this._ctx.closePath)), this
		}, c.drawCircle = function(a, b, c) {
			return this.arc(a, b, c, 0, y7w3j.N6V(2, Math.PI)), this
		}, c.drawEllipse = function(b, c, d, e) {
			this._dirty = this._active = !0;
			var f = .5522848,
				g = y7w3j.Q6V(d, 2, f),
				h = y7w3j.L6V(e, 2, f),
				i = b + d,
				j = c + e,
				k = b + y7w3j.G6V(d, 2),
				l = c + y7w3j.K6V(e, 2);
			return this._activeInstructions.push(new a(this._ctx.moveTo, [b, l]), new a(this._ctx.bezierCurveTo, [b, y7w3j.A6V(l, h), y7w3j.D6V(k, g), c, k, c]), new a(this._ctx.bezierCurveTo, [k + g, c, i, y7w3j.f6V(l, h), i, l]), new a(this._ctx.bezierCurveTo, [i, l + h, k + g, j, k, j]), new a(this._ctx.bezierCurveTo, [y7w3j.Y6V(k, g), j, b, l + h, b, l])), this
		}, c.inject = function(b, c) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new a(b, [c])), this
		}, c.drawPolyStar = function(b, c, d, e, f, g) {
			var h, i;
			for (this._dirty = this._active = !0, y7w3j.e6V(null, f) && (f = 0), f = y7w3j.J6V(1, f), y7w3j.i6V(null, g) ? g = 0 : g /= y7w3j.c6V(180, Math.PI), h = y7w3j.j6V(Math.PI, e), this._activeInstructions.push(new a(this._ctx.moveTo, [b + y7w3j.a6V(Math.cos(g), d), c + y7w3j.l9V(Math.sin(g), d)])), i = 0; y7w3j.P9V(e, i); i++) g += h, y7w3j.V9V(1, f) && this._activeInstructions.push(new a(this._ctx.lineTo, [b + y7w3j.n9V(Math.cos(g), d, f), c + y7w3j.I9V(Math.sin(g), d, f)])), g += h, this._activeInstructions.push(new a(this._ctx.lineTo, [b + y7w3j.g9V(Math.cos(g), d), c + y7w3j.r9V(Math.sin(g), d)]));
			return this
		}, c.decodePath = function(a) {
			var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
			for (c = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], d = [2, 2, 4, 6, 0], e = 0, f = a.length, g = [], h = 0, i = 0, j = b.BASE_64; y7w3j.p9V(f, e);) {
				if (k = a.charAt(e), l = j[k], m = y7w3j.O9V(l, 3), n = c[m], !n || y7w3j.H9V(3, l)) throw "bad path data (@" + e + "): " + k;
				for (o = d[m], m || (h = i = 0), g.length = 0, e++, p = y7w3j.t9V(1, l >> 2) + 2, q = 0; y7w3j.F9V(o, q); q++) r = j[a.charAt(e)], s = y7w3j.Z9V(r, 5) ? -1 : 1, r = y7w3j.q9V((31 & r) << 6, j[a.charAt(e + 1)]), y7w3j.X9V(3, p) && (r = y7w3j.U9V(r << 6, j[a.charAt(e + 2)])), r = y7w3j.T9V(s, r, 10), y7w3j.x4L(q, 2) ? h = r += h : i = r += i, g[q] = r, e += p;
				n.apply(this, g)
			}
			return this
		}, c.clone = function() {
			var a = new b;
			return a._instructions = this._instructions.slice(), a._activeInstructions = this._activeInstructions.slice(), a._oldInstructions = this._oldInstructions.slice(), this._fillInstructions && (a._fillInstructions = this._fillInstructions.slice()), this._strokeInstructions && (a._strokeInstructions = this._strokeInstructions.slice()), this._strokeStyleInstructions && (a._strokeStyleInstructions = this._strokeStyleInstructions.slice()), a._active = this._active, a._dirty = this._dirty, a._fillMatrix = this._fillMatrix, a._strokeIgnoreScale = this._strokeIgnoreScale, a
		}, c.toString = function() {
			return "[Graphics]"
		}, c.mt = c.moveTo, c.lt = c.lineTo, c.at = c.arcTo, c.bt = c.bezierCurveTo, c.qt = c.quadraticCurveTo, c.a = c.arc, c.r = c.rect, c.cp = c.closePath, c.c = c.clear, c.f = c.beginFill, c.lf = c.beginLinearGradientFill, c.rf = c.beginRadialGradientFill, c.bf = c.beginBitmapFill, c.ef = c.endFill, c.ss = c.setStrokeStyle, c.s = c.beginStroke, c.ls = c.beginLinearGradientStroke, c.rs = c.beginRadialGradientStroke, c.bs = c.beginBitmapStroke, c.es = c.endStroke, c.dr = c.drawRect, c.rr = c.drawRoundRect, c.rc = c.drawRoundRectComplex, c.dc = c.drawCircle, c.de = c.drawEllipse, c.dp = c.drawPolyStar, c.p = c.decodePath, c._updateInstructions = function() {
			this._instructions = this._oldInstructions.slice(), this._instructions.push(b.beginCmd), this._appendInstructions(this._fillInstructions), this._appendInstructions(this._strokeInstructions), this._appendInstructions(this._strokeInstructions && this._strokeStyleInstructions), this._appendInstructions(this._activeInstructions), this._fillInstructions && this._appendDraw(b.fillCmd, this._fillMatrix), this._strokeInstructions && this._appendDraw(b.strokeCmd, this._strokeIgnoreScale && [1, 0, 0, 1, 0, 0])
		}, c._appendInstructions = function(a) {
			a && this._instructions.push.apply(this._instructions, a)
		}, c._appendDraw = function(b, c) {
			c ? this._instructions.push(new a(this._ctx.save, [], !1), new a(this._ctx.transform, c, !1), b, new a(this._ctx.restore, [], !1)) : this._instructions.push(b)
		}, c._newPath = function() {
			this._dirty && this._updateInstructions(), this._oldInstructions = this._instructions, this._activeInstructions = [], this._active = this._dirty = !1
		}, c._setProp = function(a, b) {
			this[a] = b
		}, createjs.Graphics = b
	}(), this.createjs = this.createjs || {},
	function() {
		var c, a = function() {
				this.initialize()
			},
			b = a.prototype = new createjs.EventDispatcher;
		a._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], a.suppressCrossDomainErrors = !1, c = createjs.createCanvas ? createjs.createCanvas() : z9i1y[c1y]["createElement"]("canvas"), c.getContext && (a._hitTestCanvas = c, a._hitTestContext = c.getContext("2d"), c.width = c.height = 1), a._nextCacheID = 1, b.alpha = 1, b.cacheCanvas = null, b.id = -1, b.mouseEnabled = !0, b.tickEnabled = !0, b.name = null, b.parent = null, b.regX = 0, b.regY = 0, b.rotation = 0, b.scaleX = 1, b.scaleY = 1, b.skewX = 0, b.skewY = 0, b.shadow = null, b.visible = !0, b.x = 0, b.y = 0, b.compositeOperation = null, b.snapToPixel = !1, b.filters = null, b.cacheID = 0, b.mask = null, b.hitArea = null, b.cursor = null, b._cacheOffsetX = 0, b._cacheOffsetY = 0, b._cacheScale = 1, b._cacheDataURLID = 0, b._cacheDataURL = null, b._matrix = null, b._rectangle = null, b._bounds = null, b.initialize = function() {
			this.id = createjs.UID.get(), this._matrix = new createjs.Matrix2D, this._rectangle = new createjs.Rectangle
		}, b.isVisible = function() {
			return !!(this.visible && y7w3j.N4L(this.alpha, 0) && y7w3j.Q4L(0, this.scaleX) && y7w3j.u4L(0, this.scaleY))
		}, b.draw = function(a, b) {
			var d, e, f, g, c = this.cacheCanvas;
			return b || !c ? !1 : (e = this._cacheScale, f = this._cacheOffsetX, g = this._cacheOffsetY, (d = this._applyFilterBounds(f, g, 0, 0)) && (f = d.x, g = d.y), a.drawImage(c, f, g, y7w3j.E4L(c.width, e), y7w3j.g4L(c.height, e)), !0)
		}, b.updateContext = function(a) {
			var b, c = this.mask,
				d = this;
			c && c.graphics && !c.graphics.isEmpty() && (b = c.getMatrix(c._matrix), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty), c.graphics.drawAsPath(a), a.clip(), b.invert(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)), b = d._matrix.identity().appendTransform(d.x, d.y, d.scaleX, d.scaleY, d.rotation, d.skewX, d.skewY, d.regX, d.regY), createjs.Stage._snapToPixelEnabled && d.snapToPixel ? a.transform(b.a, b.b, b.c, b.d, y7w3j.r4L(0, b.tx + .5), y7w3j.p4L(0, b.ty + .5)) : a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty), a.globalAlpha *= d.alpha, d.compositeOperation && (a.globalCompositeOperation = d.compositeOperation), d.shadow && this._applyShadow(a, d.shadow)
		}, b.cache = function(a, b, c, d, e) {
			e = e || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : z9i1y[c1y]["createElement"]("canvas")), this._cacheWidth = c, this._cacheHeight = d, this._cacheOffsetX = a, this._cacheOffsetY = b, this._cacheScale = e, this.updateCache()
		}, b.updateCache = function(b) {
			var c, j, d = this.cacheCanvas,
				e = this._cacheScale,
				f = y7w3j.O4L(this._cacheOffsetX, e),
				g = y7w3j.H4L(this._cacheOffsetY, e),
				h = this._cacheWidth,
				i = this._cacheHeight;
			if (!d) throw "cache() must be called before updateCache()";
			j = d.getContext("2d"), (c = this._applyFilterBounds(f, g, h, i)) && (f = c.x, g = c.y, h = c.width, i = c.height), h = Math.ceil(y7w3j.t4L(h, e)), i = Math.ceil(y7w3j.F4L(i, e)), y7w3j.Z4L(h, d.width) || y7w3j.q4L(i, d.height) ? (d.width = h, d.height = i) : b || j.clearRect(0, 0, h + 1, i + 1), j.save(), j.globalCompositeOperation = b, j.setTransform(e, 0, 0, e, -f, -g), this.draw(j, !0), this._applyFilters(), j.restore(), this.cacheID = a._nextCacheID++
		}, b.uncache = function() {
			this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = 0, this._cacheScale = 1
		}, b.getCacheDataURL = function() {
			return this.cacheCanvas ? (y7w3j.X4L(this.cacheID, this._cacheDataURLID) && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
		}, b.getStage = function() {
			var b, a = function(a) {
				b = a.parent
			};
			for (b = this; b.parent;) a(b);
			return y7w3j.U4L(b, createjs.Stage) ? b : null
		}, b.localToGlobal = function(a, b) {
			var c = this.getConcatenatedMatrix(this._matrix);
			return y7w3j.T4L(null, c) ? null : (c.append(1, 0, 0, 1, a, b), new createjs.Point(c.tx, c.ty))
		}, b.globalToLocal = function(a, b) {
			var c = this.getConcatenatedMatrix(this._matrix);
			return y7w3j.y5L(null, c) ? null : (c.invert(), c.append(1, 0, 0, 1, a, b), new createjs.Point(c.tx, c.ty))
		}, b.localToLocal = function(a, b, c) {
			var d = this.localToGlobal(a, b);
			return c.globalToLocal(d.x, d.y)
		}, b.setTransform = function(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0, this.y = b || 0, this.scaleX = y7w3j.C5L(null, c) ? 1 : c, this.scaleY = y7w3j.o5L(null, d) ? 1 : d, this.rotation = e || 0, this.skewX = f || 0, this.skewY = g || 0, this.regX = h || 0, this.regY = i || 0, this
		}, b.getMatrix = function(a) {
			var b = this;
			return (a ? a.identity() : new createjs.Matrix2D).appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY).appendProperties(b.alpha, b.shadow, b.compositeOperation)
		}, b.getConcatenatedMatrix = function(a) {
			a ? a.identity() : a = new createjs.Matrix2D;
			for (var b = this; y7w3j.R5L(null, b);) a.prependTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY).prependProperties(b.alpha, b.shadow, b.compositeOperation), b = b.parent;
			return a
		}, b.hitTest = function(b, c) {
			var e, d = a._hitTestContext;
			return d.setTransform(1, 0, 0, 1, -b, -c), this.draw(d), e = this._testHit(d), d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, 2, 2), e
		}, b.set = function(a) {
			for (var b in a) this[b] = a[b];
			return this
		}, b.getBounds = function() {
			var a, b;
			return this._bounds ? this._rectangle.copy(this._bounds) : (a = this.cacheCanvas, a ? (b = this._cacheScale, this._rectangle.initialize(this._cacheOffsetX, this._cacheOffsetY, y7w3j.I5L(a.width, b), y7w3j.G5L(a.height, b))) : null)
		}, b.getTransformedBounds = function() {
			return this._getBounds()
		}, b.setBounds = function(a, b, c, d) {
			y7w3j.K5L(null, a) && (this._bounds = a), this._bounds = (this._bounds || new createjs.Rectangle).initialize(a, b, c, d)
		}, b.clone = function() {
			var b = new a;
			return this.cloneProps(b), b
		}, b.toString = function() {
			return "[DisplayObject (name=" + this.name + ")]"
		}, b.cloneProps = function(a) {
			a.alpha = this.alpha, a.name = this.name, a.regX = this.regX, a.regY = this.regY, a.rotation = this.rotation, a.scaleX = this.scaleX, a.scaleY = this.scaleY, a.shadow = this.shadow, a.skewX = this.skewX, a.skewY = this.skewY, a.visible = this.visible, a.x = this.x, a.y = this.y, a._bounds = this._bounds, a.mouseEnabled = this.mouseEnabled, a.compositeOperation = this.compositeOperation
		}, b._applyShadow = function(a, b) {
			b = b || Shadow.identity, a.shadowColor = b.color, a.shadowOffsetX = b.offsetX, a.shadowOffsetY = b.offsetY, a.shadowBlur = b.blur
		}, b._tick = function(a) {
			var c, b = this._listeners;
			b && b.tick && (c = new createjs.Event("tick"), c.params = a, this._dispatchEvent(c, this, 2))
		}, b._testHit = function(b) {
			try {
				var c = y7w3j.A5L(b.getImageData(0, 0, 1, 1).data[3], 1)
			} catch (d) {
				if (!a.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
			}
			return c
		}, b._applyFilters = function() {
			if (this.filters && y7w3j.D5L(0, this.filters.length) && this.cacheCanvas)
				for (var a = this.filters.length, b = this.cacheCanvas.getContext("2d"), c = this.cacheCanvas.width, d = this.cacheCanvas.height, e = 0; y7w3j.f5L(a, e); e++) this.filters[e].applyFilter(b, 0, 0, c, d)
		}, b._applyFilterBounds = function(a, b, c, d) {
			var e, f, h, i, j, g = this.filters;
			if (!g || !(f = g.length)) return null;
			for (h = 0; y7w3j.Y5L(f, h); h++) i = this.filters[h], j = i.getBounds && i.getBounds(), j && (e || (e = this._rectangle.initialize(a, b, c, d)), e.x += j.x, e.y += j.y, e.width += j.width, e.height += j.height);
			return e
		}, b._getBounds = function(a, b) {
			return this._transformBounds(this.getBounds(), a, b)
		}, b._transformBounds = function(a, b, c) {
			var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
			return a ? (d = a.x, e = a.y, f = a.width, g = a.height, h = c ? this._matrix.identity() : this.getMatrix(this._matrix), (d || e) && h.appendTransform(0, 0, 1, 1, 0, 0, 0, -d, -e), b && h.prependMatrix(b), i = y7w3j.e5L(f, h.a), j = y7w3j.J5L(f, h.b), k = y7w3j.i5L(g, h.c), l = y7w3j.c5L(g, h.d), m = h.tx, n = h.ty, o = m, p = m, q = n, r = n, y7w3j.j5L(d = i + m, o) ? o = d : y7w3j.a5L(d, p) && (p = d), y7w3j.l0L(d = i + k + m, o) ? o = d : y7w3j.P0L(d, p) && (p = d), y7w3j.V0L(d = k + m, o) ? o = d : y7w3j.n0L(d, p) && (p = d), y7w3j.L0L(e = j + n, q) ? q = e : y7w3j.m0L(e, r) && (r = e), y7w3j.v0L(e = j + l + n, q) ? q = e : y7w3j.h0L(e, r) && (r = e), y7w3j.k0L(e = l + n, q) ? q = e : y7w3j.z0L(e, r) && (r = e), a.initialize(o, q, y7w3j.S0L(p, o), y7w3j.b0L(r, q))) : a
		}, b._hasMouseEventListener = function() {
			for (var b = a._MOUSE_EVENTS, c = 0, d = b.length; y7w3j.d0L(d, c); c++)
				if (this.hasEventListener(b[c])) return !0;
			return !!this.cursor
		}, createjs.DisplayObject = a
	}(), this.createjs = this.createjs || {},
	function() {
		var a = function() {
				this.initialize()
			},
			b = a.prototype = new createjs.DisplayObject;
		b.children = null, b.mouseChildren = !0, b.tickChildren = !0, b.DisplayObject_initialize = b.initialize, b.initialize = function() {
			this.DisplayObject_initialize(), this.children = []
		}, b.isVisible = function() {
			var a = this.cacheCanvas || this.children.length;
			return !!(this.visible && y7w3j.M0L(this.alpha, 0) && y7w3j.W0L(0, this.scaleX) && y7w3j.s0L(0, this.scaleY) && a)
		}, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
			var c, d, e, f;
			if (this.DisplayObject_draw(a, b)) return !0;
			for (c = this.children.slice(0), d = 0, e = c.length; y7w3j.w0L(e, d); d++) f = c[d], f.isVisible() && (a.save(), f.updateContext(a), f.draw(a), a.restore());
			return !0
		}, b.addChild = function(a) {
			var b, c;
			if (y7w3j.B0L(null, a)) return a;
			if (b = arguments.length, y7w3j.x8L(b, 1)) {
				for (c = 0; y7w3j.N8L(b, c); c++) this.addChild(arguments[c]);
				return arguments[y7w3j.Q8L(b, 1)]
			}
			return a.parent && a.parent.removeChild(a), a.parent = this, this.children.push(a), a
		}, b.addChildAt = function(a, b) {
			var e, c = arguments.length,
				d = arguments[y7w3j.u8L(c, 1)];
			if (y7w3j.E8L(0, d) || y7w3j.g8L(d, this.children.length)) return arguments[y7w3j.r8L(c, 2)];
			if (y7w3j.p8L(c, 2)) {
				for (e = 0; y7w3j.O8L(c - 1, e); e++) this.addChildAt(arguments[e], d + e);
				return arguments[y7w3j.H8L(c, 2)]
			}
			return a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), a
		}, b.removeChild = function(a) {
			var c, d, b = arguments.length;
			if (y7w3j.t8L(b, 1)) {
				for (c = !0, d = 0; y7w3j.F8L(b, d); d++) c = c && this.removeChild(arguments[d]);
				return c
			}
			return this.removeChildAt(createjs.indexOf(this.children, a))
		}, b.removeChildAt = function(a) {
			var c, d, e, f, b = arguments.length;
			if (y7w3j.Z8L(b, 1)) {
				for (c = [], d = 0; y7w3j.q8L(b, d); d++) c[d] = arguments[d];
				for (c.sort(function(a, b) {
						return y7w3j.X8L(b, a)
					}), e = !0, d = 0; y7w3j.U8L(b, d); d++) e = e && this.removeChildAt(c[d]);
				return e
			}
			return y7w3j.T8L(0, a) || y7w3j.y3L(a, this.children.length - 1) ? !1 : (f = this.children[a], f && (f.parent = null), this.children.splice(a, 1), !0)
		}, b.removeAllChildren = function() {
			for (var a = this.children; a.length;) a.pop().parent = null
		}, b.getChildAt = function(a) {
			return this.children[a]
		}, b.getChildByName = function(a) {
			for (var b = this.children, c = 0, d = b.length; y7w3j.C3L(d, c); c++)
				if (y7w3j.o3L(b[c].name, a)) return b[c];
			return null
		}, b.sortChildren = function(a) {
			this.children.sort(a)
		}, b.getChildIndex = function(a) {
			return createjs.indexOf(this.children, a)
		}, b.getNumChildren = function() {
			return this.children.length
		}, b.swapChildrenAt = function(a, b) {
			var c = this.children,
				d = c[a],
				e = c[b];
			d && e && (c[a] = e, c[b] = d)
		}, b.swapChildren = function(a, b) {
			for (var c, d, e = this.children, f = 0, g = e.length; y7w3j.R3L(g, f) && (y7w3j.I3L(e[f], a) && (c = f), y7w3j.G3L(e[f], b) && (d = f), y7w3j.K3L(null, c) || y7w3j.A3L(null, d)); f++);
			y7w3j.D3L(f, g) && (e[c] = b, e[d] = a)
		}, b.setChildIndex = function(a, b) {
			var e, c = this.children,
				d = c.length;
			if (!(y7w3j.f3L(a.parent, this) || y7w3j.Y3L(0, b) || y7w3j.e3L(b, d))) {
				for (e = 0; y7w3j.J3L(d, e) && y7w3j.i3L(c[e], a); e++);
				y7w3j.c3L(e, d) && y7w3j.j3L(e, b) && (c.splice(e, 1), c.splice(b, 0, a))
			}
		}, b.contains = function(a) {
			for (; a;) {
				var b = function(b) {
					a = b.parent
				};
				if (y7w3j.a3L(a, this)) return !0;
				b(a)
			}
			return !1
		}, b.hitTest = function(a, b) {
			return y7w3j.l2L(null, this.getObjectUnderPoint(a, b))
		}, b.getObjectsUnderPoint = function(a, b) {
			var c = [],
				d = this.localToGlobal(a, b);
			return this._getObjectsUnderPoint(d.x, d.y, c), c
		}, b.getObjectUnderPoint = function(a, b) {
			var c = this.localToGlobal(a, b);
			return this._getObjectsUnderPoint(c.x, c.y)
		}, b.DisplayObject_getBounds = b.getBounds, b.getBounds = function() {
			return this._getBounds(null, !0)
		}, b.getTransformedBounds = function() {
			return this._getBounds()
		}, b.clone = function(b) {
			var d, e, f, g, c = new a;
			if (this.cloneProps(c), b)
				for (d = c.children = [], e = 0, f = this.children.length; y7w3j.P2L(f, e); e++) g = this.children[e].clone(b), g.parent = c, d.push(g);
			return c
		}, b.toString = function() {
			return "[Container (name=" + this.name + ")]"
		}, b.DisplayObject__tick = b._tick, b._tick = function(a) {
			var b, c;
			if (this.tickChildren)
				for (b = y7w3j.V2L(this.children.length, 1); y7w3j.n2L(b, 0); b--) c = this.children[b], c.tickEnabled && c._tick && c._tick(a);
			this.DisplayObject__tick(a)
		}, b._getObjectsUnderPoint = function(b, c, d, e, f) {
			var i, j, k, l, m, n, g = createjs.DisplayObject._hitTestContext,
				h = this._matrix;
			for (f = f || e && this._hasMouseEventListener(), i = this.children, j = i.length, k = y7w3j.L2L(j, 1); y7w3j.m2L(k, 0); k--)
				if (l = i[k], m = l.hitArea, l.visible && (m || l.isVisible()) && (!e || l.mouseEnabled))
					if (!m && y7w3j.v2L(l, a)) {
						if (n = l._getObjectsUnderPoint(b, c, d, e, f), !d && n) return e && !this.mouseChildren ? this : n
					} else {
						if (!f && !l._hasMouseEventListener()) continue;
						if (l.getConcatenatedMatrix(h), m && (h.appendTransform(m.x, m.y, m.scaleX, m.scaleY, m.rotation, m.skewX, m.skewY, m.regX, m.regY), h.alpha = m.alpha), g.globalAlpha = h.alpha, g.setTransform(h.a, h.b, h.c, h.d, y7w3j.h2L(h.tx, b), y7w3j.k2L(h.ty, c)), (m || l).draw(g), !this._testHit(g)) continue;
						if (g.setTransform(1, 0, 0, 1, 0, 0), g.clearRect(0, 0, 2, 2), !d) return e && !this.mouseChildren ? this : l;
						d.push(l)
					}
			return null
		}, b._getBounds = function(a, b) {
			var d, e, f, g, h, i, j, k, l, m, n, o, c = this.DisplayObject_getBounds();
			if (c) return this._transformBounds(c, a, b);
			for (h = b ? this._matrix.identity() : this.getMatrix(this._matrix), a && h.prependMatrix(a), i = this.children.length, j = 0; y7w3j.z2L(i, j); j++) k = this.children[j], k.visible && (c = k._getBounds(h)) && (l = c.x, m = c.y, n = l + c.width, o = m + c.height, (y7w3j.S2L(d, l) || y7w3j.b2L(null, d)) && (d = l), (y7w3j.d2L(n, e) || y7w3j.M2L(null, e)) && (e = n), (y7w3j.W2L(f, m) || y7w3j.s2L(null, f)) && (f = m), (y7w3j.w2L(o, g) || y7w3j.B2L(null, g)) && (g = o));
			return y7w3j.x7L(null, e) ? null : this._rectangle.initialize(d, f, y7w3j.N7L(e, d), y7w3j.Q7L(g, f))
		}, createjs.Container = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a) {
				this.initialize(a)
			},
			b = a.prototype = new createjs.Container;
		a._snapToPixelEnabled = !1, b.autoClear = !0, b.canvas = null, b.mouseX = 0, b.mouseY = 0, b.snapToPixelEnabled = !1, b.mouseInBounds = !1, b.tickOnUpdate = !0, b.mouseMoveOutside = !1, b.nextStage = null, b._pointerData = null, b._pointerCount = 0, b._primaryPointerID = null, b._mouseOverIntervalID = null, b.Container_initialize = b.initialize, b.initialize = function(a) {
			this.Container_initialize(), this.canvas = "string" == typeof a ? z9i1y[c1y]["getElementById"](a) : a, this._pointerData = {}, this.enableDOMEvents(!0)
		}, b.update = function() {
			if (this.canvas) {
				this.tickOnUpdate && (this.dispatchEvent("tickstart"), this.tickEnabled && this._tick(arguments.length ? arguments : null), this.dispatchEvent("tickend")), this.dispatchEvent("drawstart"), a._snapToPixelEnabled = this.snapToPixelEnabled, this.autoClear && this.clear();
				var b = this.canvas.getContext("2d");
				b.save(), this.updateContext(b), this.draw(b, !1), b.restore(), this.dispatchEvent("drawend")
			}
		}, b.handleEvent = function(a) {
			y7w3j.u7L("tick", a.type) && this.update(a)
		}, b.clear = function() {
			if (this.canvas) {
				var a = this.canvas.getContext("2d");
				a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
			}
		}, b.toDataURL = function(a, b) {
			var c, d, e, f, g, h;
			return b || (b = "image/png"), d = this.canvas.getContext("2d"), e = this.canvas.width, f = this.canvas.height, a && (c = d.getImageData(0, 0, e, f), g = d.globalCompositeOperation, d.globalCompositeOperation = "destination-over", d.fillStyle = a, d.fillRect(0, 0, e, f)), h = this.canvas.toDataURL(b), a && (d.clearRect(0, 0, e + 1, f + 1), d.putImageData(c, 0, 0), d.globalCompositeOperation = g), h
		}, b.enableMouseOver = function(a) {
			var c, b = function(b) {
				a = b
			};
			if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, y7w3j.E7L(0, a) && this._testMouseOver(!0)), y7w3j.g7L(null, a)) b(20);
			else if (y7w3j.r7L(0, a)) return;
			c = this, this._mouseOverIntervalID = setInterval(function() {
				c._testMouseOver()
			}, y7w3j.p7L(1e3, Math.min(50, a)))
		}, b.enableDOMEvents = function(a) {
			var b, c, d, e, f;
			if (y7w3j.O7L(null, a) && (a = !0), d = this._eventListeners, !a && d) {
				for (b in d) c = d[b], c.t.removeEventListener(b, c.f, !1);
				this._eventListeners = null
			} else if (a && !d && this.canvas) {
				e = z9i1y[q1y]["addEventListener"] ? window : document, f = this, d = this._eventListeners = {}, d.mouseup = {
					t: e,
					f: function(a) {
						f._handleMouseUp(a)
					}
				}, d.mousemove = {
					t: e,
					f: function(a) {
						f._handleMouseMove(a)
					}
				}, d.dblclick = {
					t: this.canvas,
					f: function(a) {
						f._handleDoubleClick(a)
					}
				}, d.mousedown = {
					t: this.canvas,
					f: function(a) {
						f._handleMouseDown(a)
					}
				};
				for (b in d) c = d[b], c.t.addEventListener(b, c.f, !1)
			}
		}, b.clone = function() {
			var b = new a(null);
			return this.cloneProps(b), b
		}, b.toString = function() {
			return "[Stage (name=" + this.name + ")]"
		}, b._getElementRect = function(a) {
			var b, c, d, f, g, h, i, j, k, l;
			for (b in z9i1y[c1y])
				if (4 == b.length && 121 == b.charCodeAt(3) && 100 == b.charCodeAt(2) && 98 == b.charCodeAt(0)) break;
			for (c in z9i1y[c1y])
				if (4 == c.length && 121 == c.charCodeAt(3) && 100 == c.charCodeAt(2) && 98 == c.charCodeAt(0)) break;
			try {
				d = a.getBoundingClientRect()
			} catch (e) {
				d = {
					top: a.offsetTop,
					left: a.offsetLeft,
					width: a.offsetWidth,
					height: a.offsetHeight
				}
			}
			return f = y7w3j.H7L(z9i1y[q1y]["pageXOffset"] || z9i1y[c1y]["scrollLeft"] || 0, z9i1y[c1y]["clientLeft"] || z9i1y[c1y][b]["clientLeft"] || 0), g = y7w3j.t7L(z9i1y[q1y]["pageYOffset"] || z9i1y[c1y]["scrollTop"] || 0, z9i1y[c1y]["clientTop"] || z9i1y[c1y][c]["clientTop"] || 0), h = z9i1y[q1y]["getComputedStyle"] ? getComputedStyle(a) : a.currentStyle, i = parseInt(h.paddingLeft) + parseInt(h.borderLeftWidth), j = parseInt(h.paddingTop) + parseInt(h.borderTopWidth), k = parseInt(h.paddingRight) + parseInt(h.borderRightWidth), l = parseInt(h.paddingBottom) + parseInt(h.borderBottomWidth), {
				left: d.left + f + i,
				right: d.right + f - k,
				top: d.top + g + j,
				bottom: d.bottom + g - l
			}
		}, b._getPointerData = function(a) {
			var b = this._pointerData[a];
			return b || (b = this._pointerData[a] = {
				x: 0,
				y: 0
			}, y7w3j.F7L(null, this._primaryPointerID) && (this._primaryPointerID = a), (y7w3j.Z7L(null, this._primaryPointerID) || -1 == this._primaryPointerID) && (this._primaryPointerID = a)), b
		}, b._handleMouseMove = function(a) {
			a || (a = z9i1y[q1y]["event"]), this._handlePointerMove(-1, a, a.pageX, a.pageY)
		}, b._handlePointerMove = function(a, b, c, d) {
			var e, f, g;
			this.canvas && (e = this._getPointerData(a), f = e.inBounds, this._updatePointerPosition(a, b, c, d), (f || e.inBounds || this.mouseMoveOutside) && (-1 == a && e.inBounds == !f && this._dispatchMouseEvent(this, f ? "mouseleave" : "mouseenter", !1, a, e, b), this._dispatchMouseEvent(this, "stagemousemove", !1, a, e, b), this._dispatchMouseEvent(e.target, "pressmove", !0, a, e, b), g = e.event, g && g.hasEventListener("mousemove") && g.dispatchEvent(new createjs.MouseEvent("mousemove", !1, !1, e.x, e.y, b, a, y7w3j.q7L(a, this._primaryPointerID), e.rawX, e.rawY), e.target), this.nextStage && this.nextStage._handlePointerMove(a, b, c, d)))
		}, b._updatePointerPosition = function(a, b, c, d) {
			var f, g, h, e = this._getElementRect(this.canvas);
			c -= e.left, d -= e.top, f = this.canvas.width, g = this.canvas.height, c /= y7w3j.X7L(e.right - e.left, f), d /= y7w3j.U7L(e.bottom - e.top, g), h = this._getPointerData(a), (h.inBounds = y7w3j.T7L(c, 0) && y7w3j.y1L(d, 0) && y7w3j.C1L(f - 1, c) && y7w3j.o1L(g - 1, d)) ? (h.x = c, h.y = d) : this.mouseMoveOutside && (h.x = y7w3j.R1L(0, c) ? 0 : y7w3j.I1L(c, f - 1) ? y7w3j.G1L(f, 1) : c, h.y = y7w3j.K1L(0, d) ? 0 : y7w3j.A1L(d, g - 1) ? y7w3j.D1L(g, 1) : d), h.posEvtObj = b, h.rawX = c, h.rawY = d, y7w3j.f1L(a, this._primaryPointerID) && (this.mouseX = h.x, this.mouseY = h.y, this.mouseInBounds = h.inBounds)
		}, b._handleMouseUp = function(a) {
			this._handlePointerUp(-1, a, !1)
		}, b._handlePointerUp = function(a, b, c) {
			var e, f, d = this._getPointerData(a);
			this._dispatchMouseEvent(this, "stagemouseup", !1, a, d, b), e = d.target, e && (this._getObjectsUnderPoint(d.x, d.y, null, !0) == e && this._dispatchMouseEvent(e, "click", !0, a, d, b), this._dispatchMouseEvent(e, "pressup", !0, a, d, b)), f = d.event, f && f.hasEventListener("mouseup") && f.dispatchEvent(new createjs.MouseEvent("mouseup", !1, !1, d.x, d.y, b, a, y7w3j.Y1L(a, this._primaryPointerID), d.rawX, d.rawY), e), c ? (y7w3j.e1L(a, this._primaryPointerID) && (this._primaryPointerID = null), delete this._pointerData[a]) : d.event = d.target = null, this.nextStage && this.nextStage._handlePointerUp(a, b, c)
		}, b._handleMouseDown = function(a) {
			this._handlePointerDown(-1, a, a.pageX, a.pageY)
		}, b._handlePointerDown = function(a, b, c, d) {
			y7w3j.J1L(null, d) && this._updatePointerPosition(a, b, c, d);
			var e = this._getPointerData(a);
			this._dispatchMouseEvent(this, "stagemousedown", !1, a, e, b), e.target = this._getObjectsUnderPoint(e.x, e.y, null, !0), e.event = this._dispatchMouseEvent(e.target, "mousedown", !0, a, e, b), this.nextStage && this.nextStage._handlePointerDown(a, b, c, d)
		}, b._testMouseOver = function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m;
			if (-1 == this._primaryPointerID && (a || y7w3j.i1L(this.mouseX, this._mouseOverX) || y7w3j.c1L(this.mouseY, this._mouseOverY) || !this.mouseInBounds)) {
				for (b = function(a) {
						i = a
					}, g = this._getPointerData(-1), h = g.posEvtObj, i = -1, j = "", (a || this.mouseInBounds && h && y7w3j.j1L(h.target, this.canvas)) && (c = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY), k = this._mouseOverTarget || [], l = k[y7w3j.a1L(k.length, 1)], m = this._mouseOverTarget = [], d = c; d;) m.unshift(d), y7w3j.l6L(null, d.cursor) && (j = d.cursor), d = d.parent;
				for (this.canvas.style.cursor = j, e = 0, f = m.length; y7w3j.P6L(f, e) && y7w3j.V6L(m[e], k[e]); e++) b(e);
				for (y7w3j.n6L(l, c) && this._dispatchMouseEvent(l, "mouseout", !0, -1, g, h), e = y7w3j.L6L(k.length, 1); y7w3j.m6L(e, i); e--) this._dispatchMouseEvent(k[e], "rollout", !1, -1, g, h);
				for (e = y7w3j.v6L(m.length, 1); y7w3j.h6L(e, i); e--) this._dispatchMouseEvent(m[e], "rollover", !1, -1, g, h);
				y7w3j.k6L(l, c) && this._dispatchMouseEvent(c, "mouseover", !0, -1, g, h)
			}
		}, b._handleDoubleClick = function(a) {
			var b = this._getPointerData(-1),
				c = this._getObjectsUnderPoint(b.x, b.y, null, !0);
			this._dispatchMouseEvent(c, "dblclick", !0, -1, b, a), this.nextStage && this.nextStage._handleDoubleClick(a)
		}, b._dispatchMouseEvent = function(a, b, c, d, e, f) {
			if (a && (c || a.hasEventListener(b))) {
				var g = new createjs.MouseEvent(b, c, !1, e.x, e.y, f, d, y7w3j.z6L(d, this._primaryPointerID), e.rawX, e.rawY);
				return a.dispatchEvent(g), g
			}
		}, createjs.Stage = a
	}(), this.createjs = this.createjs || {},
	function() {
		var a = function(a) {
				this.initialize(a)
			},
			b = a.prototype = new createjs.DisplayObject;
		b.image = null, b.snapToPixel = !0, b.sourceRect = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
			this.DisplayObject_initialize(), "string" == typeof a ? (this.image = z9i1y[c1y]["createElement"]("img"), this.image.src = a) : this.image = a
		}, b.isVisible = function() {
			var a = this.cacheCanvas || this.image && (this.image.complete || this.image.getContext || y7w3j.S6L(this.image.readyState, 2));
			return !!(this.visible && y7w3j.b6L(this.alpha, 0) && y7w3j.d6L(0, this.scaleX) && y7w3j.M6L(0, this.scaleY) && a)
		}, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
			if (this.DisplayObject_draw(a, b)) return !0;
			var c = this.sourceRect;
			return c ? a.drawImage(this.image, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height) : a.drawImage(this.image, 0, 0), !0
		}, b.DisplayObject_getBounds = b.getBounds, b.getBounds = function() {
			var b, c, a = this.DisplayObject_getBounds();
			return a ? a : (b = this.sourceRect || this.image, c = this.image && (this.image.complete || this.image.getContext || y7w3j.W6L(this.image.readyState, 2)), c ? this._rectangle.initialize(0, 0, b.width, b.height) : null)
		}, b.clone = function() {
			var b = new a(this.image);
			return this.sourceRect && (b.sourceRect = this.sourceRect.clone()), this.cloneProps(b), b
		}, b.toString = function() {
			return "[Bitmap (name=" + this.name + ")]"
		}, createjs.Bitmap = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b) {
				this.initialize(a, b)
			},
			b = a.prototype = new createjs.DisplayObject;
		b.currentFrame = 0, b.currentAnimation = null, b.paused = !0, b.spriteSheet = null, b.snapToPixel = !0, b.offset = 0, b.currentAnimationFrame = 0, b.framerate = 0, b._advanceCount = 0, b._animation = null, b._currentFrame = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a, b) {
			this.DisplayObject_initialize(), this.spriteSheet = a, b && this.gotoAndPlay(b)
		}, b.isVisible = function() {
			var a = this.cacheCanvas || this.spriteSheet.complete;
			return !!(this.visible && y7w3j.s6L(this.alpha, 0) && y7w3j.w6L(0, this.scaleX) && y7w3j.B6L(0, this.scaleY) && a)
		}, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
			var c, d;
			return this.DisplayObject_draw(a, b) ? !0 : (this._normalizeFrame(), (c = this.spriteSheet.getFrame(y7w3j.x9L(0, this._currentFrame))) ? (d = c.rect, a.drawImage(c.image, d.x, d.y, d.width, d.height, -c.regX, -c.regY, d.width, d.height), !0) : !1)
		}, b.play = function() {
			this.paused = !1
		}, b.stop = function() {
			this.paused = !0
		}, b.gotoAndPlay = function(a) {
			this.paused = !1, this._goto(a)
		}, b.gotoAndStop = function(a) {
			this.paused = !0, this._goto(a)
		}, b.advance = function(a) {
			var b = this._animation && this._animation.speed || 1,
				c = this.framerate || this.spriteSheet.framerate,
				d = c && y7w3j.N9L(null, a) ? y7w3j.Q9L(a, 1e3 / c) : 1;
			this._animation ? this.currentAnimationFrame += y7w3j.u9L(d, b) : this._currentFrame += y7w3j.E9L(d, b), this._normalizeFrame()
		}, b.DisplayObject_getBounds = b.getBounds, b.getBounds = function() {
			return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
		}, b.clone = function() {
			var b = new a(this.spriteSheet);
			return this.cloneProps(b), b
		}, b.toString = function() {
			return "[Sprite (name=" + this.name + ")]"
		}, b.DisplayObject__tick = b._tick, b._tick = function(a) {
			this.paused || this.advance(a && a[0] && a[0].delta), this.DisplayObject__tick(a)
		}, b._normalizeFrame = function() {
			var a, f, b = this._animation,
				c = this.paused,
				d = this._currentFrame,
				e = this.currentAnimationFrame;
			if (b)
				if (a = b.frames.length, y7w3j.g9L(0 | e, a))
					if (f = b.next, this._dispatchAnimationEnd(b, d, c, f, y7w3j.r9L(a, 1)));
					else {
						if (f) return this._goto(f, y7w3j.p9L(e, a));
						this.paused = !0, e = this.currentAnimationFrame = y7w3j.O9L(b.frames.length, 1), this._currentFrame = b.frames[e]
					} else this._currentFrame = b.frames[y7w3j.H9L(0, e)];
			else if (a = this.spriteSheet.getNumFrames(), y7w3j.t9L(d, a) && !this._dispatchAnimationEnd(b, d, c, y7w3j.F9L(a, 1)) && y7w3j.Z9L(this._currentFrame -= a, a)) return this._normalizeFrame();
			this.currentFrame = y7w3j.q9L(0, this._currentFrame)
		}, b._dispatchAnimationEnd = function(a, b, c, d, e) {
			var g, h, f = a ? a.name : null;
			return this.hasEventListener("animationend") && (g = new createjs.Event("animationend"), g.name = f, g.next = d, this.dispatchEvent(g)), h = y7w3j.X9L(this._animation, a) || y7w3j.U9L(this._currentFrame, b), h || c || !this.paused || (this.currentAnimationFrame = e, h = !0), h
		}, b.DisplayObject_cloneProps = b.cloneProps, b.cloneProps = function(a) {
			this.DisplayObject_cloneProps(a), a.currentFrame = this.currentFrame, a._currentFrame = this._currentFrame, a.currentAnimation = this.currentAnimation, a.paused = this.paused, a._animation = this._animation, a.currentAnimationFrame = this.currentAnimationFrame, a.framerate = this.framerate
		}, b._goto = function(a, b) {
			if (isNaN(a)) {
				var c = this.spriteSheet.getAnimation(a);
				c && (this.currentAnimationFrame = b || 0, this._animation = c, this.currentAnimation = a, this._normalizeFrame())
			} else this.currentAnimationFrame = 0, this.currentAnimation = this._animation = null, this._currentFrame = a, this._normalizeFrame()
		}, createjs.Sprite = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = "BitmapAnimation is deprecated in favour of Sprite. See VERSIONS file for info on changes.";
		if (!createjs.Sprite) throw a;
		(createjs.BitmapAnimation = function(b) {
			console.log(a), this.initialize(b)
		}).prototype = new createjs.Sprite
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a) {
				this.initialize(a)
			},
			b = a.prototype = new createjs.DisplayObject;
		b.graphics = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
			this.DisplayObject_initialize(), this.graphics = a ? a : new createjs.Graphics
		}, b.isVisible = function() {
			var a = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
			return !!(this.visible && y7w3j.T9L(this.alpha, 0) && y7w3j.y4S(0, this.scaleX) && y7w3j.C4S(0, this.scaleY) && a)
		}, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
			return this.DisplayObject_draw(a, b) ? !0 : (this.graphics.draw(a), !0)
		}, b.clone = function(b) {
			var c = new a(b && this.graphics ? this.graphics.clone() : this.graphics);
			return this.cloneProps(c), c
		}, b.toString = function() {
			return "[Shape (name=" + this.name + ")]"
		}, createjs.Shape = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c) {
				this.initialize(a, b, c)
			},
			b = a.prototype = new createjs.DisplayObject,
			c = createjs.createCanvas ? createjs.createCanvas() : z9i1y[c1y]["createElement"]("canvas");
		c.getContext && (a._workingContext = c.getContext("2d"), c.width = c.height = 1), a.H_OFFSETS = {
			start: 0,
			left: 0,
			center: -.5,
			end: -1,
			right: -1
		}, a.V_OFFSETS = {
			top: 0,
			hanging: -.01,
			middle: -.4,
			alphabetic: -.8,
			ideographic: -.85,
			bottom: -1
		}, b.text = "", b.font = null, b.color = null, b.textAlign = "left", b.textBaseline = "top", b.maxWidth = null, b.outline = 0, b.lineHeight = 0, b.lineWidth = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a, b, c) {
			this.DisplayObject_initialize(), this.text = a, this.font = b, this.color = c
		}, b.isVisible = function() {
			var a = this.cacheCanvas || y7w3j.o4S(null, this.text) && y7w3j.R4S("", this.text);
			return !!(this.visible && y7w3j.I4S(this.alpha, 0) && y7w3j.G4S(0, this.scaleX) && y7w3j.K4S(0, this.scaleY) && a)
		}, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
			if (this.DisplayObject_draw(a, b)) return !0;
			var c = this.color || "#000";
			return this.outline ? (a.strokeStyle = c, a.lineWidth = y7w3j.A4S(1, this.outline)) : a.fillStyle = c, this._drawText(this._prepContext(a)), !0
		}, b.getMeasuredWidth = function() {
			return this._prepContext(a._workingContext).measureText(this.text).width
		}, b.getMeasuredLineHeight = function() {
			return y7w3j.D4S(1.2, this._prepContext(a._workingContext).measureText("M").width)
		}, b.getMeasuredHeight = function() {
			return this._drawText(null, {}).height
		}, b.DisplayObject_getBounds = b.getBounds, b.getBounds = function() {
			var c, d, e, f, g, b = this.DisplayObject_getBounds();
			return b ? b : y7w3j.f4S(null, this.text) || y7w3j.Y4S("", this.text) ? null : (c = this._drawText(null, {}), d = this.maxWidth && y7w3j.e4S(this.maxWidth, c.width) ? this.maxWidth : c.width, e = y7w3j.J4S(d, a.H_OFFSETS[this.textAlign || "left"]), f = this.lineHeight || this.getMeasuredLineHeight(), g = y7w3j.i4S(f, a.V_OFFSETS[this.textBaseline || "top"]), this._rectangle.initialize(e, g, d, c.height))
		}, b.clone = function() {
			var b = new a(this.text, this.font, this.color);
			return this.cloneProps(b), b
		}, b.toString = function() {
			return "[Text (text=" + (y7w3j.c4S(this.text.length, 20) ? this.text.substr(0, 17) + "..." : this.text) + ")]"
		}, b.DisplayObject_cloneProps = b.cloneProps, b.cloneProps = function(a) {
			this.DisplayObject_cloneProps(a), a.textAlign = this.textAlign, a.textBaseline = this.textBaseline, a.maxWidth = this.maxWidth, a.outline = this.outline, a.lineHeight = this.lineHeight, a.lineWidth = this.lineWidth
		}, b._prepContext = function(a) {
			return a.font = this.font, a.textAlign = this.textAlign || "left", a.textBaseline = this.textBaseline || "top", a
		}, b._drawText = function(b, c) {
			var e, f, g, h, i, j, k, l, m, n, o, p, d = !!b;
			for (d || (b = this._prepContext(a._workingContext)), e = this.lineHeight || this.getMeasuredLineHeight(), f = 0, g = 0, h = String(this.text).split(/(?:\r\n|\r|\n)/), i = 0, j = h.length; y7w3j.j4S(j, i); i++) {
				if (k = h[i], l = null, y7w3j.a4S(null, this.lineWidth) && y7w3j.l5S(l = b.measureText(k).width, this.lineWidth))
					for (m = k.split(/(\s)/), k = m[0], l = b.measureText(k).width, n = 1, o = m.length; y7w3j.P5S(o, n); n += 2) p = b.measureText(m[n] + m[n + 1]).width, y7w3j.V5S(l + p, this.lineWidth) ? (d && this._drawTextLine(b, k, y7w3j.n5S(g, e)), y7w3j.L5S(l, f) && (f = l), k = m[n + 1], l = b.measureText(k).width, g++) : (k += m[n] + m[n + 1], l += p);
				d && this._drawTextLine(b, k, y7w3j.m5S(g, e)), c && y7w3j.v5S(null, l) && (l = b.measureText(k).width), y7w3j.h5S(l, f) && (f = l), g++
			}
			return c && (c.count = g, c.width = f, c.height = y7w3j.k5S(g, e)), c
		}, b._drawTextLine = function(a, b, c) {
			this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535)
		}, createjs.Text = a
	}(), this.createjs = this.createjs || {},
	function() {
		function a(a, b) {
			this.initialize(a, b)
		}
		var b = a.prototype = new createjs.DisplayObject;
		b.text = "", b.spriteSheet = null, b.lineHeight = 0, b.letterSpacing = 0, b.spaceWidth = 0, b.DisplayObject_initialize = b.initialize, b.initialize = function(a, b) {
			this.DisplayObject_initialize(), this.text = a, this.spriteSheet = b
		}, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
			return this.DisplayObject_draw(a, b) ? !0 : (this._drawText(a), void 0)
		}, b.isVisible = function() {
			var a = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
			return !!(this.visible && y7w3j.z5S(this.alpha, 0) && y7w3j.S5S(0, this.scaleX) && y7w3j.b5S(0, this.scaleY) && a)
		}, b.getBounds = function() {
			var a = this._rectangle;
			return this._drawText(null, a), a.width ? a : null
		}, b._getFrame = function(a, b) {
			var c, d = b.getAnimation(a);
			return d || (y7w3j.d5S(a, c = a.toUpperCase()) || y7w3j.M5S(a, c = a.toLowerCase()) || (c = null), c && (d = b.getAnimation(c))), d && b.getFrame(d.frames[0])
		}, b._getLineHeight = function(a) {
			var b = this._getFrame("1", a) || this._getFrame("T", a) || this._getFrame("L", a) || a.getFrame(0);
			return b ? b.rect.height : 1
		}, b._getSpaceWidth = function(a) {
			var b = this._getFrame("1", a) || this._getFrame("l", a) || this._getFrame("e", a) || this._getFrame("a", a) || a.getFrame(0);
			return b ? b.rect.width : 1
		}, b._drawText = function(a, b) {
			var c, d, e, l, m, n, o, p, q, f = 0,
				g = 0,
				h = this.spaceWidth,
				i = this.lineHeight,
				j = this.spriteSheet,
				k = !!this._getFrame(" ", j);
			for (k || y7w3j.W5S(0, h) || (h = this._getSpaceWidth(j)), y7w3j.s5S(0, i) && (i = this._getLineHeight(j)), l = 0, m = 0, n = this.text.length; y7w3j.w5S(n, m); m++) o = this.text.charAt(m), k || y7w3j.B5S(" ", o) ? y7w3j.x0S("\n", o) && y7w3j.N0S("\r", o) ? (p = this._getFrame(o, j), p && (q = p.rect, e = p.regX, c = q.width, a && a.drawImage(p.image, q.x, q.y, c, d = q.height, y7w3j.Q0S(f, e), y7w3j.u0S(g, p.regY), c, d), f += c + this.letterSpacing)) : (y7w3j.E0S("\r", o) && y7w3j.g0S("\n", this.text.charAt(m + 1)) && m++, y7w3j.r0S(f - e, l) && (l = y7w3j.p0S(f, e)), f = 0, g += i) : f += h;
			y7w3j.O0S(f - e, l) && (l = y7w3j.H0S(f, e)), b && (b.width = y7w3j.t0S(l, this.letterSpacing), b.height = g + i)
		}, createjs.BitmapText = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function() {
				throw "SpriteSheetUtils cannot be instantiated"
			},
			b = createjs.createCanvas ? createjs.createCanvas() : z9i1y[c1y]["createElement"]("canvas");
		b.getContext && (a._workingCanvas = b, a._workingContext = b.getContext("2d"), b.width = b.height = 1), a.addFlippedFrames = function(b, c, d, e) {
			if (c || d || e) {
				var f = 0;
				c && a._flip(b, ++f, !0, !1), d && a._flip(b, ++f, !1, !0), e && a._flip(b, ++f, !0, !0)
			}
		}, a.extractFrame = function(b, c) {
			var d, e, f, g;
			return isNaN(c) && (c = b.getAnimation(c).frames[0]), (d = b.getFrame(c)) ? (e = d.rect, f = a._workingCanvas, f.width = e.width, f.height = e.height, a._workingContext.drawImage(d.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), g = z9i1y[c1y]["createElement"]("img"), g.src = f.toDataURL("image/png"), g) : null
		}, a.mergeAlpha = function(a, b, c) {
			c || (c = createjs.createCanvas ? createjs.createCanvas() : z9i1y[c1y]["createElement"]("canvas")), c.width = Math.max(b.width, a.width), c.height = Math.max(b.height, a.height);
			var d = c.getContext("2d");
			return d.save(), d.drawImage(a, 0, 0), d.globalCompositeOperation = "destination-in", d.drawImage(b, 0, 0), d.restore(), c
		}, a._flip = function(b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A;
			for (f = b._images, g = a._workingCanvas, h = a._workingContext, i = y7w3j.F0S(f.length, c), j = 0; y7w3j.Z0S(i, j); j++) k = f[j], k.__tmp = j, h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, g.width + 1, g.height + 1), g.width = k.width, g.height = k.height, h.setTransform(d ? -1 : 1, 0, 0, e ? -1 : 1, d ? k.width : 0, e ? k.height : 0), h.drawImage(k, 0, 0), l = z9i1y[c1y]["createElement"]("img"), l.src = g.toDataURL("image/png"), l.width = k.width, l.height = k.height, f.push(l);
			for (m = b._frames, n = y7w3j.q0S(m.length, c), j = 0; y7w3j.X0S(n, j); j++) o = function(a) {
				l = a[k.image.__tmp + y7w3j.U0S(i, c)]
			}, p = function(a) {
				k = a[j]
			}, p(m), q = k.rect.clone(), o(f), r = {
				image: l,
				rect: q,
				regX: k.regX,
				regY: k.regY
			}, d && (q.x = y7w3j.T0S(l.width, q.x, q.width), r.regX = y7w3j.x8S(q.width, k.regX)), e && (q.y = y7w3j.N8S(l.height, q.y, q.height), r.regY = y7w3j.n8S(q.height, k.regY)), m.push(r);
			for (s = "_" + (d ? "h" : "") + (e ? "v" : ""), t = b._animations, u = b._data, v = y7w3j.L8S(t.length, c), j = 0; y7w3j.m8S(v, j); j++) {
				for (w = function(a) {
						k = a[x]
					}, x = t[j], w(u), y = {
						name: x + s,
						speed: k.speed,
						next: k.next,
						frames: []
					}, k.next && (y.next += s), m = k.frames, z = 0, A = m.length; y7w3j.v8S(A, z); z++) y.frames.push(m[z] + y7w3j.h8S(n, c));
				u[y.name] = y, t.push(y.name)
			}
		}, createjs.SpriteSheetUtils = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function() {
				this.initialize()
			},
			b = a.prototype = new createjs.EventDispatcher;
		a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", a.ERR_RUNNING = "a build is already running", b.maxWidth = 2048, b.maxHeight = 2048, b.spriteSheet = null, b.scale = 1, b.padding = 1, b.timeSlice = .3, b.progress = -1, b._frames = null, b._animations = null, b._data = null, b._nextFrameIndex = 0, b._index = 0, b._timerID = null, b._scale = 1, b.initialize = function() {
			this._frames = [], this._animations = {}
		}, b.addFrame = function(b, c, d, e, f, g) {
			if (this._data) throw a.ERR_RUNNING;
			var h = c || b.bounds || b.nominalBounds;
			return !h && b.getBounds && (h = b.getBounds()), h ? (d = d || 1, y7w3j.k8S(this._frames.push({
				source: b,
				sourceRect: h,
				scale: d,
				funct: e,
				params: f,
				scope: g,
				index: this._frames.length,
				height: h.height * d
			}), 1)) : null
		}, b.addAnimation = function(b, c, d, e) {
			if (this._data) throw a.ERR_RUNNING;
			this._animations[b] = {
				frames: c,
				next: d,
				frequency: e
			}
		}, b.addMovieClip = function(b, c, d) {
			var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
			if (this._data) throw a.ERR_RUNNING;
			if (e = b.frameBounds, f = c || b.bounds || b.nominalBounds, !f && b.getBounds && (f = b.getBounds()), !f && !e) return null;
			for (g = this._frames.length, h = b.timeline.duration, i = 0; y7w3j.z8S(h, i); i++) j = e && e[i] ? e[i] : f, this.addFrame(b, j, d, function(a) {
				var b = this.actionsEnabled;
				this.actionsEnabled = !1, this.gotoAndStop(a), this.actionsEnabled = b
			}, [i], b);
			k = b.timeline._labels, l = [];
			for (m in k) l.push({
				index: k[m],
				label: m
			});
			if (l.length)
				for (l.sort(function(a, b) {
						return y7w3j.S8S(a.index, b.index)
					}), i = 0, n = l.length; y7w3j.b8S(n, i); i++) {
					for (o = l[i].label, p = g + l[i].index, q = g + (y7w3j.d8S(i, n - 1) ? h : l[i + 1].index), r = [], s = p; y7w3j.M8S(q, s); s++) r.push(s);
					this.addAnimation(o, r, !0)
				}
		}, b.build = function() {
			if (this._data) throw a.ERR_RUNNING;
			for (this._startBuild(); this._drawNext(););
			return this._endBuild(), this.spriteSheet
		}, b.buildAsync = function(b) {
			if (this._data) throw a.ERR_RUNNING;
			this.timeSlice = b, this._startBuild();
			var c = this;
			this._timerID = setTimeout(function() {
				c._run()
			}, y7w3j.W8S(50, 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3))))
		}, b.stopAsync = function() {
			clearTimeout(this._timerID), this._data = null
		}, b.clone = function() {
			throw "SpriteSheetBuilder cannot be cloned."
		}, b.toString = function() {
			return "[SpriteSheetBuilder]"
		}, b._startBuild = function() {
			var c, d, e, f, g, h, i, b = this.padding || 0;
			if (this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale, c = [], this._data = {
					images: [],
					frames: c,
					animations: this._animations
				}, d = this._frames.slice(), d.sort(function(a, b) {
					return y7w3j.s8S(a.height, b.height) ? -1 : 1
				}), y7w3j.w8S(d[d.length - 1].height + 2 * b, this.maxHeight)) throw a.ERR_DIMENSIONS;
			for (e = 0, f = 0, g = 0; d.length;) h = this._fillRow(d, e, g, c, b), y7w3j.B8S(h.w, f) && (f = h.w), e += h.h, h.h && d.length || (i = createjs.createCanvas ? createjs.createCanvas() : z9i1y[c1y]["createElement"]("canvas"), i.width = this._getSize(f, this.maxWidth), i.height = this._getSize(e, this.maxHeight), this._data.images[g] = i, h.h || (f = e = 0, g++))
		}, b._getSize = function(a, b) {
			for (var c = 4; Math.pow(2, ++c) < a;);
			return Math.min(b, Math.pow(2, c))
		}, b._fillRow = function(b, c, d, e, f) {
			var i, j, k, l, m, n, o, p, q, r, s, t, g = this.maxWidth,
				h = this.maxHeight;
			for (c += f, i = y7w3j.x3S(h, c), j = f, k = 0, l = y7w3j.N3S(b.length, 1); y7w3j.Q3S(l, 0); l--) {
				if (m = b[l], n = y7w3j.u3S(this._scale, m.scale), o = m.sourceRect, p = m.source, q = Math.floor(y7w3j.E3S(n * o.x, f)), r = Math.floor(y7w3j.g3S(n * o.y, f)), s = Math.ceil(y7w3j.r3S(n, o.height) + y7w3j.p3S(2, f)), t = Math.ceil(y7w3j.O3S(n, o.width) + y7w3j.H3S(2, f)), y7w3j.t3S(t, g)) throw a.ERR_DIMENSIONS;
				y7w3j.F3S(s, i) || y7w3j.Z3S(j + t, g) || (m.img = d, m.rect = new createjs.Rectangle(j, c, t, s), k = k || s, b.splice(l, 1), e[m.index] = [j, c, t, s, d, Math.round(-q + n * p.regX - f), Math.round(-r + n * p.regY - f)], j += t)
			}
			return {
				w: j,
				h: k
			}
		}, b._endBuild = function() {
			this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
		}, b._run = function() {
			var a, b, c, d, e, f, g;
			for (a = y7w3j.q3S(50, Math.max(.01, Math.min(.99, this.timeSlice || .3))), b = (new Date).getTime() + a, c = !1; y7w3j.X3S(b, (new Date).getTime());)
				if (!this._drawNext()) {
					d = function() {
						c = !0
					}, d();
					break
				}
			c ? this._endBuild() : (e = this, this._timerID = setTimeout(function() {
				e._run()
			}, y7w3j.U3S(50, a))), f = this.progress = y7w3j.T3S(this._index, this._frames.length), this.hasEventListener("progress") && (g = new createjs.Event("progress"), g.progress = f, this.dispatchEvent(g))
		}, b._drawNext = function() {
			var a = this._frames[this._index],
				b = y7w3j.y2S(a.scale, this._scale),
				c = a.rect,
				d = a.sourceRect,
				e = this._data.images[a.img],
				f = e.getContext("2d");
			return a.funct && a.funct.apply(a.scope, a.params), f.save(), f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip(), f.translate(Math.ceil(y7w3j.C2S(c.x, d.x * b)), Math.ceil(y7w3j.o2S(c.y, d.y * b))), f.scale(b, b), a.source.draw(f), f.restore(), ++this._index < this._frames.length
		}, createjs.SpriteSheetBuilder = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a) {
				this.initialize(a)
			},
			b = a.prototype = new createjs.DisplayObject;
		b.htmlElement = null, b._oldMtx = null, b._visible = !1, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
			"string" == typeof a && (a = z9i1y[c1y]["getElementById"](a)), this.DisplayObject_initialize(), this.mouseEnabled = !1, this.htmlElement = a;
			var b = a.style;
			b.position = "absolute", b.transformOrigin = b.WebkitTransformOrigin = b.msTransformOrigin = b.MozTransformOrigin = b.OTransformOrigin = "0% 0%"
		}, b.isVisible = function() {
			return y7w3j.R2S(null, this.htmlElement)
		}, b.draw = function() {
			return this.visible && (this._visible = !0), !0
		}, b.cache = function() {}, b.uncache = function() {}, b.updateCache = function() {}, b.hitTest = function() {}, b.localToGlobal = function() {}, b.globalToLocal = function() {}, b.localToLocal = function() {}, b.clone = function() {
			throw "DOMElement cannot be cloned."
		}, b.toString = function() {
			return "[DOMElement (name=" + this.name + ")]"
		}, b.DisplayObject__tick = b._tick, b._tick = function(a) {
			var b = this.getStage();
			this._visible = !1, b && b.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(a)
		}, b._handleDrawEnd = function() {
			var b, c, d, e, f, g, a = this.htmlElement;
			a && (b = a.style, c = this._visible ? "visible" : "hidden", y7w3j.I2S(c, b.visibility) && (b.visibility = c), this._visible && (d = this.getConcatenatedMatrix(this._matrix), e = this._oldMtx, f = 1e4, e && y7w3j.G2S(e.alpha, d.alpha) || (b.opacity = "" + y7w3j.K2S(0 | d.alpha * f, f), e && (e.alpha = d.alpha)), (!e || y7w3j.A2S(e.tx, d.tx) || y7w3j.D2S(e.ty, d.ty) || y7w3j.f2S(e.a, d.a) || y7w3j.Y2S(e.b, d.b) || y7w3j.e2S(e.c, d.c) || y7w3j.J2S(e.d, d.d)) && (g = "matrix(" + y7w3j.i2S(0 | d.a * f, f) + "," + y7w3j.c2S(0 | d.b * f, f) + "," + y7w3j.j2S(0 | d.c * f, f) + "," + y7w3j.a2S(0 | d.d * f, f) + "," + y7w3j.l7S(0, d.tx + .5), b.transform = b.WebkitTransform = b.OTransform = b.msTransform = g + "," + y7w3j.P7S(0, d.ty + .5) + ")", b.MozTransform = g + "px," + y7w3j.V7S(0, d.ty + .5) + "px)", this._oldMtx = e ? e.copy(d) : d.clone())))
		}, createjs.DOMElement = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function() {
				this.initialize()
			},
			b = a.prototype;
		b.initialize = function() {}, b.getBounds = function() {
			return null
		}, b.applyFilter = function() {}, b.toString = function() {
			return "[Filter]"
		}, b.clone = function() {
			return new a
		}, createjs.Filter = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c) {
				this.initialize(a, b, c)
			},
			b = a.prototype = new createjs.Filter;
		b.initialize = function(a, b, c) {
			(isNaN(a) || y7w3j.n7S(0, a)) && (a = 0), this.blurX = y7w3j.L7S(0, a), (isNaN(b) || y7w3j.m7S(0, b)) && (b = 0), this.blurY = y7w3j.v7S(0, b), (isNaN(c) || y7w3j.h7S(1, c)) && (c = 1), this.quality = y7w3j.k7S(0, c)
		}, b.blurX = 0, b.blurY = 0, b.quality = 1, b.mul_table = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], b.shg_table = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], b.getBounds = function() {
			var a = y7w3j.z7S(.5, Math.pow(this.quality, .6));
			return new createjs.Rectangle(-this.blurX * a, -this.blurY * a, y7w3j.S7S(2, this.blurX, a), y7w3j.e7S(2, this.blurY, a))
		}, b.applyFilter = function(a, b, c, d, e, f, g, h) {
			var k, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, i = function(a) {
					M.next = a
				},
				j = function(a) {
					K.next = a
				};
			f = f || a, y7w3j.Z7S(null, g) && (g = b), y7w3j.q7S(null, h) && (h = c);
			try {
				k = a.getImageData(b, c, d, e)
			} catch (l) {
				return !1
			}
			if (m = y7w3j.X7S(this.blurX, 2), isNaN(m) || y7w3j.U7S(0, m)) return !1;
			if (m |= 0, n = y7w3j.T7S(this.blurY, 2), isNaN(n) || y7w3j.y1S(0, n)) return !1;
			if (n |= 0, y7w3j.C1S(0, m) && y7w3j.o1S(0, n)) return !1;
			for (o = this.quality, (isNaN(o) || y7w3j.R1S(1, o)) && (o = 1), o |= 0, y7w3j.I1S(o, 3) && (o = 3), y7w3j.G1S(1, o) && (o = 1), C = k.data, D = m + m + 1, E = n + n + 1, F = y7w3j.K1S(d, 1), G = y7w3j.A1S(e, 1), H = m + 1, I = n + 1, J = {
					r: 0,
					b: 0,
					g: 0,
					a: 0,
					next: null
				}, K = J, p = 1; y7w3j.D1S(D, p); p++) K = K.next = {
				r: 0,
				b: 0,
				g: 0,
				a: 0,
				next: null
			};
			for (j(J), L = {
					r: 0,
					b: 0,
					g: 0,
					a: 0,
					next: null
				}, M = L, p = 1; y7w3j.f1S(E, p); p++) M = M.next = {
				r: 0,
				b: 0,
				g: 0,
				a: 0,
				next: null
			};
			for (i(L), N = null; y7w3j.Y1S(o--, 0);) {
				for (t = s = 0, O = this.mul_table[m], P = this.shg_table[m], c = e; --c > -1;) {
					for (u = y7w3j.e1S(H, y = C[s]), v = y7w3j.J1S(H, z = C[s + 1]), w = y7w3j.i1S(H, A = C[s + 2]), x = y7w3j.c1S(H, B = C[s + 3]), K = J, p = H; --p > -1;) K.r = y, K.g = z, K.b = A, K.a = B, K = K.next;
					for (p = 1; y7w3j.j1S(H, p); p++) q = s + y7w3j.a1S(p > F ? F : p, 2), u += K.r = C[q], v += K.g = C[q + 1], w += K.b = C[q + 2], x += K.a = C[q + 3], K = K.next;
					for (N = J, b = 0; y7w3j.l6S(d, b); b++) C[s++] = y7w3j.P6S(u * O, P), C[s++] = y7w3j.V6S(v * O, P), C[s++] = y7w3j.n6S(w * O, P), C[s++] = y7w3j.L6S(x * O, P), q = y7w3j.m6S(t + ((q = b + m + 1) < F ? q : F), 2), u -= y7w3j.v6S(N.r, N.r = C[q]), v -= y7w3j.h6S(N.g, N.g = C[q + 1]), w -= y7w3j.k6S(N.b, N.b = C[q + 2]), x -= y7w3j.z6S(N.a, N.a = C[q + 3]), N = N.next;
					t += d
				}
				for (O = this.mul_table[n], P = this.shg_table[n], b = 0; y7w3j.S6S(d, b); b++) {
					for (s = y7w3j.b6S(b, 2), u = y7w3j.d6S(I, y = C[s]), v = y7w3j.M6S(I, z = C[s + 1]), w = y7w3j.W6S(I, A = C[s + 2]), x = y7w3j.s6S(I, B = C[s + 3]), M = L, p = 0; y7w3j.w6S(I, p); p++) M.r = y, M.g = z, M.b = A, M.a = B, M = M.next;
					for (r = d, p = 1; y7w3j.B6S(n, p); p++) s = y7w3j.x9S(r + b, 2), u += M.r = C[s], v += M.g = C[s + 1], w += M.b = C[s + 2], x += M.a = C[s + 3], M = M.next, y7w3j.N9S(G, p) && (r += d);
					if (s = b, N = L, y7w3j.Q9S(o, 0))
						for (c = 0; y7w3j.u9S(e, c); c++) q = y7w3j.E9S(s, 2), C[q + 3] = B = y7w3j.g9S(x * O, P), y7w3j.r9S(B, 0) ? (C[q] = y7w3j.p9S(u * O, P), C[q + 1] = y7w3j.O9S(v * O, P), C[q + 2] = y7w3j.H9S(w * O, P)) : C[q] = C[q + 1] = C[q + 2] = 0, q = y7w3j.t9S(b + ((q = c + I) < G ? q : G) * d, 2), u -= y7w3j.F9S(N.r, N.r = C[q]), v -= y7w3j.Z9S(N.g, N.g = C[q + 1]), w -= y7w3j.q9S(N.b, N.b = C[q + 2]), x -= y7w3j.X9S(N.a, N.a = C[q + 3]), N = N.next, s += d;
					else
						for (c = 0; y7w3j.U9S(e, c); c++) q = y7w3j.T9S(s, 2), C[q + 3] = B = y7w3j.y49(x * O, P), y7w3j.C49(B, 0) ? (B = y7w3j.o49(255, B), C[q] = y7w3j.R49(u * O >>> P, B), C[q + 1] = y7w3j.I49(v * O >>> P, B), C[q + 2] = y7w3j.G49(w * O >>> P, B)) : C[q] = C[q + 1] = C[q + 2] = 0, q = y7w3j.K49(b + ((q = c + I) < G ? q : G) * d, 2), u -= y7w3j.A49(N.r, N.r = C[q]), v -= y7w3j.D49(N.g, N.g = C[q + 1]), w -= y7w3j.f49(N.b, N.b = C[q + 2]), x -= y7w3j.Y49(N.a, N.a = C[q + 3]), N = N.next, s += d
				}
			}
			return f.putImageData(k, g, h), !0
		}, b.clone = function() {
			return new a(this.blurX, this.blurY, this.quality)
		}, b.toString = function() {
			return "[BlurFilter]"
		}, createjs.BlurFilter = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a) {
				this.initialize(a)
			},
			b = a.prototype = new createjs.Filter;
		b.initialize = function(a) {
			this.alphaMap = a
		}, b.alphaMap = null, b._alphaMap = null, b._mapData = null, b.applyFilter = function(a, b, c, d, e, f, g, h) {
			var j, l, m, n, o, i = function() {
				l[o + 3] = m[o] || 0
			};
			if (!this.alphaMap) return !0;
			if (!this._prepAlphaMap()) return !1;
			f = f || a, y7w3j.e49(null, g) && (g = b), y7w3j.J49(null, h) && (h = c);
			try {
				j = a.getImageData(b, c, d, e)
			} catch (k) {
				return !1
			}
			for (l = j.data, m = this._mapData, n = l.length, o = 0; y7w3j.i49(n, o); o += 4) i();
			return f.putImageData(j, g, h), !0
		}, b.clone = function() {
			return new a(this.alphaMap)
		}, b.toString = function() {
			return "[AlphaMapFilter]"
		}, b._prepAlphaMap = function() {
			var a, b, c, d;
			if (!this.alphaMap) return !1;
			if (y7w3j.c49(this.alphaMap, this._alphaMap) && this._mapData) return !0;
			this._mapData = null, b = this._alphaMap = this.alphaMap, c = b, y7w3j.j49(b, HTMLCanvasElement) ? a = c.getContext("2d") : (c = createjs.createCanvas ? createjs.createCanvas() : z9i1y[c1y]["createElement"]("canvas"), c.width = b.width, c.height = b.height, a = c.getContext("2d"), a.drawImage(b, 0, 0));
			try {
				d = a.getImageData(0, 0, b.width, b.height)
			} catch (e) {
				return !1
			}
			return this._mapData = d.data, !0
		}, createjs.AlphaMapFilter = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a) {
				this.initialize(a)
			},
			b = a.prototype = new createjs.Filter;
		b.initialize = function(a) {
			this.mask = a
		}, b.mask = null, b.applyFilter = function(a, b, c, d, e, f, g, h) {
			return this.mask ? (f = f || a, y7w3j.a49(null, g) && (g = b), y7w3j.l59(null, h) && (h = c), f.save(), f.globalCompositeOperation = "destination-in", f.drawImage(this.mask, g, h), f.restore(), !0) : !0
		}, b.clone = function() {
			return new a(this.mask)
		}, b.toString = function() {
			return "[AlphaMaskFilter]"
		}, createjs.AlphaMaskFilter = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c, d, e, f, g, h) {
				this.initialize(a, b, c, d, e, f, g, h)
			},
			b = a.prototype = new createjs.Filter;
		b.redMultiplier = 1, b.greenMultiplier = 1, b.blueMultiplier = 1, b.alphaMultiplier = 1, b.redOffset = 0, b.greenOffset = 0, b.blueOffset = 0, b.alphaOffset = 0, b.initialize = function(a, b, c, d, e, f, g, h) {
			this.redMultiplier = y7w3j.P59(null, a) ? a : 1, this.greenMultiplier = y7w3j.V59(null, b) ? b : 1, this.blueMultiplier = y7w3j.n59(null, c) ? c : 1, this.alphaMultiplier = y7w3j.L59(null, d) ? d : 1, this.redOffset = e || 0, this.greenOffset = f || 0, this.blueOffset = g || 0, this.alphaOffset = h || 0
		}, b.applyFilter = function(a, b, c, d, e, f, g, h) {
			var i, k, l, m;
			f = f || a, y7w3j.m59(null, g) && (g = b), y7w3j.v59(null, h) && (h = c);
			try {
				i = a.getImageData(b, c, d, e)
			} catch (j) {
				return !1
			}
			for (k = i.data, l = k.length, m = 0; y7w3j.h59(l, m); m += 4) k[m] = y7w3j.k59(k[m], this.redMultiplier) + this.redOffset, k[m + 1] = y7w3j.z59(k[m + 1], this.greenMultiplier) + this.greenOffset, k[m + 2] = y7w3j.S59(k[m + 2], this.blueMultiplier) + this.blueOffset, k[m + 3] = y7w3j.b59(k[m + 3], this.alphaMultiplier) + this.alphaOffset;
			return f.putImageData(i, g, h), !0
		}, b.toString = function() {
			return "[ColorFilter]"
		}, b.clone = function() {
			return new a(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
		}, createjs.ColorFilter = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c, d) {
				this.initialize(a, b, c, d)
			},
			b = a.prototype;
		a.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], a.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], a.LENGTH = a.IDENTITY_MATRIX.length, b.initialize = function(a, b, c, d) {
			return this.reset(), this.adjustColor(a, b, c, d), this
		}, b.reset = function() {
			return this.copyMatrix(a.IDENTITY_MATRIX)
		}, b.adjustColor = function(a, b, c, d) {
			return this.adjustHue(d), this.adjustContrast(b), this.adjustBrightness(a), this.adjustSaturation(c)
		}, b.adjustBrightness = function(a) {
			return y7w3j.d59(0, a) || isNaN(a) ? this : (a = this._cleanValue(a, 255), this._multiplyMatrix([1, 0, 0, 0, a, 0, 1, 0, 0, a, 0, 0, 1, 0, a, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
		}, b.adjustContrast = function(b) {
			if (y7w3j.M59(0, b) || isNaN(b)) return this;
			b = this._cleanValue(b, 100);
			var c;
			return y7w3j.W59(0, b) ? c = 127 + y7w3j.s59(127, b / 100) : (c = y7w3j.w59(b, 1), c = y7w3j.B59(0, c) ? a.DELTA_INDEX[b] : y7w3j.x09(a.DELTA_INDEX[b << 0], 1 - c) + y7w3j.N09(a.DELTA_INDEX[(b << 0) + 1], c), c = y7w3j.Q09(127, c) + 127), this._multiplyMatrix([y7w3j.u09(c, 127), 0, 0, 0, y7w3j.E09(.5, 127 - c), 0, y7w3j.g09(c, 127), 0, 0, y7w3j.r09(.5, 127 - c), 0, 0, y7w3j.p09(c, 127), 0, y7w3j.O09(.5, 127 - c), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
		}, b.adjustSaturation = function(a) {
			if (y7w3j.H09(0, a) || isNaN(a)) return this;
			a = this._cleanValue(a, 100);
			var b = 1 + (y7w3j.t09(a, 0) ? y7w3j.F09(3, a, 100) : y7w3j.M09(a, 100)),
				c = .3086,
				d = .6094,
				e = .082;
			return this._multiplyMatrix([y7w3j.W09(c, 1 - b) + b, y7w3j.s09(d, 1 - b), y7w3j.w09(e, 1 - b), 0, 0, y7w3j.B09(c, 1 - b), y7w3j.x89(d, 1 - b) + b, y7w3j.N89(e, 1 - b), 0, 0, y7w3j.Q89(c, 1 - b), y7w3j.u89(d, 1 - b), y7w3j.E89(e, 1 - b) + b, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
		}, b.adjustHue = function(a) {
			if (y7w3j.g89(0, a) || isNaN(a)) return this;
			a = y7w3j.r89(this._cleanValue(a, 180), 180, Math.PI);
			var b = Math.cos(a),
				c = Math.sin(a),
				d = .213,
				e = .715,
				f = .072;
			return this._multiplyMatrix([d + y7w3j.k89(b, 1 - d) + c * -d, e + b * -e + c * -e, f + b * -f + c * y7w3j.z89(1, f), 0, 0, d + b * -d + .143 * c, e + y7w3j.S89(b, 1 - e) + y7w3j.b89(.14, c), f + b * -f + c * -.283, 0, 0, d + b * -d + c * -y7w3j.d89(1, d), e + b * -e + c * e, f + y7w3j.M89(b, 1 - f) + y7w3j.W89(c, f), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
		}, b.concat = function(b) {
			return b = this._fixMatrix(b), y7w3j.s89(b.length, a.LENGTH) ? this : (this._multiplyMatrix(b), this)
		}, b.clone = function() {
			return (new a).copyMatrix(this)
		}, b.toArray = function() {
			for (var b = [], c = 0, d = a.LENGTH; y7w3j.w89(d, c); c++) b[c] = this[c];
			return b
		}, b.copyMatrix = function(b) {
			for (var c = a.LENGTH, d = 0; y7w3j.B89(c, d); d++) this[d] = b[d];
			return this
		}, b.toString = function() {
			return "[ColorMatrix]"
		}, b._multiplyMatrix = function(a) {
			var b, c, d, e, f;
			for (b = [], c = 0; y7w3j.x39(5, c); c++) {
				for (d = 0; y7w3j.N39(5, d); d++) b[d] = this[d + y7w3j.Q39(5, c)];
				for (d = 0; y7w3j.u39(5, d); d++) {
					for (e = 0, f = 0; y7w3j.E39(5, f); f++) e += y7w3j.g39(a[d + 5 * f], b[f]);
					this[d + y7w3j.r39(5, c)] = e
				}
			}
		}, b._cleanValue = function(a, b) {
			return Math.min(b, Math.max(-b, a))
		}, b._fixMatrix = function(b) {
			return y7w3j.p39(b, a) && (b = b.toArray()), y7w3j.O39(b.length, a.LENGTH) ? b = b.slice(0, b.length).concat(a.IDENTITY_MATRIX.slice(b.length, a.LENGTH)) : y7w3j.H39(b.length, a.LENGTH) && (b = b.slice(0, a.LENGTH)), b
		}, createjs.ColorMatrix = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a) {
				this.initialize(a)
			},
			b = a.prototype = new createjs.Filter;
		b.matrix = null, b.initialize = function(a) {
			this.matrix = a
		}, b.applyFilter = function(a, b, c, d, e, f, g, h) {
			var i, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L;
			f = f || a, y7w3j.t39(null, g) && (g = b), y7w3j.F39(null, h) && (h = c);
			try {
				i = a.getImageData(b, c, d, e)
			} catch (j) {
				return !1
			}
			for (o = i.data, p = o.length, q = this.matrix, r = q[0], s = q[1], t = q[2], u = q[3], v = q[4], w = q[5], x = q[6], y = q[7], z = q[8], A = q[9], B = q[10], C = q[11], D = q[12], E = q[13], F = q[14], G = q[15], H = q[16], I = q[17], J = q[18], K = q[19], L = 0; y7w3j.Z39(p, L); L += 4) k = o[L], l = o[L + 1], m = o[L + 2], n = o[L + 3], o[L] = y7w3j.q39(k, r) + y7w3j.X39(l, s) + y7w3j.U39(m, t) + y7w3j.T39(n, u) + v, o[L + 1] = y7w3j.y29(k, w) + y7w3j.C29(l, x) + y7w3j.o29(m, y) + y7w3j.R29(n, z) + A, o[L + 2] = y7w3j.I29(k, B) + y7w3j.G29(l, C) + y7w3j.K29(m, D) + y7w3j.A29(n, E) + F, o[L + 3] = y7w3j.D29(k, G) + y7w3j.f29(l, H) + y7w3j.Y29(m, I) + y7w3j.e29(n, J) + K;
			return f.putImageData(i, g, h), !0
		}, b.toString = function() {
			return "[ColorMatrixFilter]"
		}, b.clone = function() {
			return new a(this.matrix)
		}, createjs.ColorMatrixFilter = a
	}(), this.createjs = this.createjs || {},
	function() {
		var a = function() {
			throw "Touch cannot be instantiated"
		};
		a.isSupported = function() {
			var a, b, c, d;
			for (a in z9i1y[q1y])
				if (9 === a.length && 116 === a.charCodeAt(6) && 114 === a.charCodeAt(8) && 103 === a.charCodeAt(4) && 110 === a.charCodeAt(0)) break;
			for (b in z9i1y[q1y])
				if (9 === b.length && 116 === b.charCodeAt(6) && 114 === b.charCodeAt(8) && 103 === b.charCodeAt(4) && 110 === b.charCodeAt(0)) break;
			for (c in z9i1y[q1y])
				if (9 === c.length && 116 === c.charCodeAt(6) && 114 === c.charCodeAt(8) && 103 === c.charCodeAt(4) && 110 === c.charCodeAt(0)) break;
			for (d in z9i1y[q1y])
				if (9 === d.length && 116 === d.charCodeAt(6) && 114 === d.charCodeAt(8) && 103 === d.charCodeAt(4) && 110 === d.charCodeAt(0)) break;
			return y7w3j.J29("ontouchstart", window) || z9i1y[q1y][a].msPointerEnabled && y7w3j.i29(z9i1y[q1y][b].msMaxTouchPoints, 0) || z9i1y[q1y][c].pointerEnabled && y7w3j.c29(z9i1y[q1y][d].maxTouchPoints, 0)
		}, a.enable = function(b, c, d) {
			var e, f;
			for (e in z9i1y[q1y])
				if (9 === e.length && 116 === e.charCodeAt(6) && 114 === e.charCodeAt(8) && 103 === e.charCodeAt(4) && 110 === e.charCodeAt(0)) break;
			for (f in z9i1y[q1y])
				if (9 === f.length && 116 === f.charCodeAt(6) && 114 === f.charCodeAt(8) && 103 === f.charCodeAt(4) && 110 === f.charCodeAt(0)) break;
			return b && b.canvas && a.isSupported() ? (b.__touch = {
				pointers: {},
				multitouch: !c,
				preventDefault: !d,
				count: 0
			}, y7w3j.j29("ontouchstart", window) ? a._IOS_enable(b) : (z9i1y[q1y][e].msPointerEnabled || z9i1y[q1y][f].pointerEnabled) && a._IE_enable(b), !0) : !1
		}, a.disable = function(b) {
			var c, d;
			for (c in z9i1y[q1y])
				if (9 === c.length && 116 === c.charCodeAt(6) && 114 === c.charCodeAt(8) && 103 === c.charCodeAt(4) && 110 === c.charCodeAt(0)) break;
			for (d in z9i1y[q1y])
				if (9 === d.length && 116 === d.charCodeAt(6) && 114 === d.charCodeAt(8) && 103 === d.charCodeAt(4) && 110 === d.charCodeAt(0)) break;
			b && (y7w3j.a29("ontouchstart", window) ? a._IOS_disable(b) : (z9i1y[q1y][c].msPointerEnabled || z9i1y[q1y][d].pointerEnabled) && a._IE_disable(b))
		}, a._IOS_enable = function(b) {
			var c = b.canvas,
				d = b.__touch.f = function(c) {
					a._IOS_handleEvent(b, c)
				};
			c.addEventListener("touchstart", d, !1), c.addEventListener("touchmove", d, !1), c.addEventListener("touchend", d, !1), c.addEventListener("touchcancel", d, !1)
		}, a._IOS_disable = function(a) {
			var c, b = a.canvas;
			b && (c = a.__touch.f, b.removeEventListener("touchstart", c, !1), b.removeEventListener("touchmove", c, !1), b.removeEventListener("touchend", c, !1), b.removeEventListener("touchcancel", c, !1))
		}, a._IOS_handleEvent = function(a, b) {
			var c, d, e, f, g, h;
			if (a)
				for (a.__touch.preventDefault && b.preventDefault && b.preventDefault(), c = b.changedTouches, d = b.type, e = 0, f = c.length; y7w3j.l79(f, e); e++) g = c[e], h = g.identifier, y7w3j.P79(g.target, a.canvas) && (y7w3j.V79("touchstart", d) ? this._handleStart(a, h, b, g.pageX, g.pageY) : y7w3j.n79("touchmove", d) ? this._handleMove(a, h, b, g.pageX, g.pageY) : (y7w3j.L79("touchend", d) || y7w3j.m79("touchcancel", d)) && this._handleEnd(a, h, b))
		}, a._IE_enable = function(b) {
			var c, d, e;
			for (c in z9i1y[q1y])
				if (9 === c.length && 116 === c.charCodeAt(6) && 114 === c.charCodeAt(8) && 103 === c.charCodeAt(4) && 110 === c.charCodeAt(0)) break;
			d = b.canvas, e = b.__touch.f = function(c) {
				a._IE_handleEvent(b, c)
			}, void 0 === z9i1y[q1y][c].pointerEnabled ? (d.addEventListener("MSPointerDown", e, !1), z9i1y[q1y]["addEventListener"]("MSPointerMove", e, !1), z9i1y[q1y]["addEventListener"]("MSPointerUp", e, !1), z9i1y[q1y]["addEventListener"]("MSPointerCancel", e, !1), b.__touch.preventDefault && (d.style.msTouchAction = "none")) : (d.addEventListener("pointerdown", e, !1), z9i1y[q1y]["addEventListener"]("pointermove", e, !1), z9i1y[q1y]["addEventListener"]("pointerup", e, !1), z9i1y[q1y]["addEventListener"]("pointercancel", e, !1), b.__touch.preventDefault && (d.style.touchAction = "none")), b.__touch.activeIDs = {}
		}, a._IE_disable = function(a) {
			var b, c;
			for (b in z9i1y[q1y])
				if (9 === b.length && 116 === b.charCodeAt(6) && 114 === b.charCodeAt(8) && 103 === b.charCodeAt(4) && 110 === b.charCodeAt(0)) break;
			c = a.__touch.f, void 0 === z9i1y[q1y][b].pointerEnabled ? (z9i1y[q1y]["removeEventListener"]("MSPointerMove", c, !1), z9i1y[q1y]["removeEventListener"]("MSPointerUp", c, !1), z9i1y[q1y]["removeEventListener"]("MSPointerCancel", c, !1), a.canvas && a.canvas.removeEventListener("MSPointerDown", c, !1)) : (z9i1y[q1y]["removeEventListener"]("pointermove", c, !1), z9i1y[q1y]["removeEventListener"]("pointerup", c, !1), z9i1y[q1y]["removeEventListener"]("pointercancel", c, !1), a.canvas && a.canvas.removeEventListener("pointerdown", c, !1))
		}, a._IE_handleEvent = function(a, b) {
			if (a) {
				a.__touch.preventDefault && b.preventDefault && b.preventDefault();
				var c = b.type,
					d = b.pointerId,
					e = a.__touch.activeIDs;
				if (y7w3j.v79("MSPointerDown", c) || y7w3j.h79("pointerdown", c)) {
					if (y7w3j.k79(b.srcElement, a.canvas)) return;
					e[d] = !0, this._handleStart(a, d, b, b.pageX, b.pageY)
				} else e[d] && (y7w3j.z79("MSPointerMove", c) || y7w3j.S79("pointermove", c) ? this._handleMove(a, d, b, b.pageX, b.pageY) : (y7w3j.b79("MSPointerUp", c) || y7w3j.d79("MSPointerCancel", c) || y7w3j.M79("pointerup", c) || y7w3j.W79("pointercancel", c)) && (delete e[d], this._handleEnd(a, d, b)))
			}
		}, a._handleStart = function(a, b, c, d, e) {
			var g, f = a.__touch;
			(f.multitouch || !f.count) && (g = f.pointers, g[b] || (g[b] = !0, f.count++, a._handlePointerDown(b, c, d, e)))
		}, a._handleMove = function(a, b, c, d, e) {
			a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e)
		}, a._handleEnd = function(a, b, c) {
			var d = a.__touch,
				e = d.pointers;
			e[b] && (d.count--, a._handlePointerUp(b, c, !0), delete e[b])
		}, createjs.Touch = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = createjs.EaselJS = createjs.EaselJS || {};
		a.version = "NEXT", a.buildDate = "Thu, 12 Dec 2013 23:37:07 GMT"
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = createjs.PreloadJS = createjs.PreloadJS || {};
		a.version = "NEXT", a.buildDate = "Thu, 12 Dec 2013 23:37:07 GMT"
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		createjs.proxy = function(a, b) {
			var c = Array.prototype.slice.call(arguments, 2);
			return function() {
				return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
			}
		}
	}(), this.createjs = this.createjs || {},
	function() {
		var b, c, a = function() {
			this.init()
		};
		a.prototype = new createjs.EventDispatcher, b = a.prototype, c = a, c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.PATH_PATTERN = /^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([/.]*?(?:[^?]+)?\/?)?$/, b.loaded = !1, b.canceled = !1, b.progress = 0, b._item = null, b.getItem = function() {
			return this._item
		}, b.init = function() {}, b.load = function() {}, b.close = function() {}, b._sendLoadStart = function() {
			this._isCanceled() || this.dispatchEvent("loadstart")
		}, b._sendProgress = function(a) {
			if (!this._isCanceled()) {
				var b = null;
				"number" == typeof a ? (this.progress = a, b = new createjs.Event("progress"), b.loaded = this.progress, b.total = 1) : (b = a, this.progress = y7w3j.s79(a.loaded, a.total), (isNaN(this.progress) || y7w3j.w79(1 / 0, this.progress)) && (this.progress = 0)), b.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(b)
			}
		}, b._sendComplete = function() {
			this._isCanceled() || this.dispatchEvent("complete")
		}, b._sendError = function(a) {
			!this._isCanceled() && this.hasEventListener("error") && (y7w3j.B79(null, a) && (a = new createjs.Event("error")), this.dispatchEvent(a))
		}, b._isCanceled = function() {
			return y7w3j.x19(null, z9i1y[q1y].createjs) || this.canceled ? !0 : !1
		}, b._parseURI = function(a) {
			return a ? a.match(c.FILE_PATTERN) : null
		}, b._parsePath = function(a) {
			return a ? a.match(c.PATH_PATTERN) : null
		}, b._formatQueryString = function(a, b) {
			var c, d;
			if (y7w3j.N19(null, a)) throw new Error("You must specify data.");
			c = [];
			for (d in a) c.push(d + "=" + escape(a[d]));
			return b && (c = c.concat(b)), c.join("&")
		}, b.buildPath = function(a, b) {
			var c, d, e;
			return y7w3j.Q19(null, b) ? a : (c = [], d = a.indexOf("?"), -1 != d && (e = a.slice(d + 1), c = c.concat(e.split("&"))), -1 != d ? a.slice(0, d) + "?" + this._formatQueryString(b, c) : a + "?" + this._formatQueryString(b, c))
		}, b._isCrossDomain = function(a) {
			var e, f, b = function(a) {
					d.href = a.src
				},
				c = function(a) {
					e.href = a.href
				},
				d = z9i1y[c1y]["createElement"]("a");
			return b(a), e = z9i1y[c1y]["createElement"]("a"), c(location), f = y7w3j.u19("", d.hostname) && (y7w3j.E19(d.port, e.port) || y7w3j.g19(d.protocol, e.protocol) || y7w3j.r19(d.hostname, e.hostname))
		}, b._isLocal = function(a) {
			var b = z9i1y[c1y]["createElement"]("a");
			return b.href = a.src, y7w3j.p19("", b.hostname) && y7w3j.O19("file:", b.protocol)
		}, b.toString = function() {
			return "[PreloadJS AbstractLoader]"
		}, createjs.AbstractLoader = a
	}(), this.createjs = this.createjs || {},
	function() {
		var b, c, d, a = function() {};
		b = function(a, b, c) {
			this.init(a, b, c)
		}, c = b.prototype = new createjs.AbstractLoader, d = b, d.loadTimeout = 8e3, d.LOAD_TIMEOUT = 0, d.BINARY = "binary", d.CSS = "css", d.IMAGE = "image", d.JAVASCRIPT = "javascript", d.JSON = "json", d.JSONP = "jsonp", d.MANIFEST = "manifest", d.SOUND = "sound", d.SVG = "svg", d.TEXT = "text", d.XML = "xml", d.POST = "POST", d.GET = "GET", c._basePath = null, c._crossOrigin = "", c.useXHR = !0, c.stopOnError = !1, c.maintainScriptOrder = !0, c.next = null, c._typeCallbacks = null, c._extensionCallbacks = null, c._loadStartWasDispatched = !1, c._maxConnections = 1, c._currentlyLoadingScript = null, c._currentLoads = null, c._loadQueue = null, c._loadQueueBackup = null, c._loadItemsById = null, c._loadItemsBySrc = null, c._loadedResults = null, c._loadedRawResults = null, c._numItems = 0, c._numItemsLoaded = 0, c._scriptOrder = null, c._loadedScripts = null, c.init = function(a, b, c) {
			this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = b, this.setUseXHR(a), this._crossOrigin = c === !0 ? "Anonymous" : c === !1 || y7w3j.H19(null, c) ? "" : c
		}, c.setUseXHR = function(a) {
			return this.useXHR = y7w3j.t19(0, a) && y7w3j.F19(null, z9i1y[q1y]["XMLHttpRequest"]), this.useXHR
		}, c.removeAll = function() {
			this.remove()
		}, c.remove = function(a) {
			var d, e, f, g, h, i, j, b = function() {
					c = [a]
				},
				c = null;
			if (!a || y7w3j.Z19(a, Array)) {
				if (d = function(a) {
						c = a
					}, a) d(a);
				else if (y7w3j.q19(arguments.length, 0)) return
			} else b();
			if (e = !1, c) {
				for (; c.length;) {
					for (f = c.pop(), g = this.getResult(f), h = y7w3j.X19(this._loadQueue.length, 1); y7w3j.U19(h, 0); h--)
						if (i = this._loadQueue[h].getItem(), y7w3j.T19(i.id, f) || y7w3j.y69(i.src, f)) {
							this._loadQueue.splice(h, 1)[0].cancel();
							break
						}
					for (h = y7w3j.C69(this._loadQueueBackup.length, 1); y7w3j.o69(h, 0); h--)
						if (i = this._loadQueueBackup[h].getItem(), y7w3j.R69(i.id, f) || y7w3j.I69(i.src, f)) {
							this._loadQueueBackup.splice(h, 1)[0].cancel();
							break
						}
					if (g) delete this._loadItemsById[g.id], delete this._loadItemsBySrc[g.src], this._disposeItem(g);
					else
						for (h = y7w3j.G69(this._currentLoads.length, 1); y7w3j.K69(h, 0); h--)
							if (i = this._currentLoads[h].getItem(), y7w3j.A69(i.id, f) || y7w3j.D69(i.src, f)) {
								this._currentLoads.splice(h, 1)[0].cancel(), e = !0;
								break
							}
				}
				e && this._loadNext()
			} else {
				this.close();
				for (j in this._loadItemsById) this._disposeItem(this._loadItemsById[j]);
				this.init(this.useXHR)
			}
		}, c.reset = function() {
			var a, b, c, d;
			this.close();
			for (a in this._loadItemsById) this._disposeItem(this._loadItemsById[a]);
			for (b = [], c = 0, d = this._loadQueueBackup.length; y7w3j.f69(d, c); c++) b.push(this._loadQueueBackup[c].getItem());
			this.loadManifest(b, !1)
		}, d.isBinary = function(a) {
			switch (a) {
				case createjs.LoadQueue.IMAGE:
				case createjs.LoadQueue.BINARY:
					return !0;
				default:
					return !1
			}
		}, d.isText = function(a) {
			switch (a) {
				case createjs.LoadQueue.TEXT:
				case createjs.LoadQueue.JSON:
				case createjs.LoadQueue.MANIFEST:
				case createjs.LoadQueue.XML:
				case createjs.LoadQueue.HTML:
				case createjs.LoadQueue.CSS:
				case createjs.LoadQueue.SVG:
				case createjs.LoadQueue.JAVASCRIPT:
					return !0;
				default:
					return !1
			}
		}, c.installPlugin = function(a) {
			var b, c, d;
			if (y7w3j.Y69(null, a) && y7w3j.e69(null, a.getPreloadHandlers)) {
				if (b = a.getPreloadHandlers(), b.scope = a, y7w3j.J69(null, b.types))
					for (c = 0, d = b.types.length; y7w3j.i69(d, c); c++) this._typeCallbacks[b.types[c]] = b;
				if (y7w3j.c69(null, b.extensions))
					for (c = 0, d = b.extensions.length; y7w3j.j69(d, c); c++) this._extensionCallbacks[b.extensions[c]] = b
			}
		}, c.setMaxConnections = function(a) {
			this._maxConnections = a, !this._paused && y7w3j.a69(this._loadQueue.length, 0) && this._loadNext()
		}, c.loadFile = function(a, b, c) {
			if (y7w3j.l99(null, a)) {
				var d = new createjs.Event("error");
				return d.text = "PRELOAD_NO_FILE", this._sendError(d), void 0
			}
			this._addItem(a, null, c), b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
		}, c.loadManifest = function(a, b, c) {
			var h, i, j, k, l, m, e = function() {
					f = [{
						src: a,
						type: d.MANIFEST
					}]
				},
				f = null,
				g = null;
			if (y7w3j.P99(a, Array)) {
				if (h = function(a) {
						f = a
					}, y7w3j.V99(0, a.length)) return i = new createjs.Event("error"), i.text = "PRELOAD_MANIFEST_EMPTY", this._sendError(i), void 0;
				h(a)
			} else if ("string" == typeof a) e();
			else {
				if ("object" != typeof a) return i = new createjs.Event("error"), i.text = "PRELOAD_MANIFEST_NULL", this._sendError(i), void 0;
				void 0 !== a.src ? (j = function() {
					f = [a]
				}, k = function(b) {
					a.type = b.MANIFEST
				}, y7w3j.n99(null, a.type) ? k(d) : y7w3j.L99(a.type, d.MANIFEST) && (i = new createjs.Event("error"), i.text = "PRELOAD_MANIFEST_ERROR", this._sendError(i)), j()) : void0 !== a.manifest && (f = a.manifest, g = a.path)
			}
			for (l = 0, m = f.length; y7w3j.m99(m, l); l++) this._addItem(f[l], g, c);
			b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
		}, c.load = function() {
			this.setPaused(!1)
		}, c.getItem = function(a) {
			return this._loadItemsById[a] || this._loadItemsBySrc[a]
		}, c.getResult = function(a, b) {
			var d, c = this._loadItemsById[a] || this._loadItemsBySrc[a];
			return y7w3j.v99(null, c) ? null : (d = c.id, b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d])
		}, c.setPaused = function(a) {
			this._paused = a, this._paused || this._loadNext()
		}, c.close = function() {
			for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
			this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1
		}, c._addItem = function(a, b, c) {
			var e, d = this._createLoadItem(a, b, c);
			y7w3j.h99(null, d) && (e = this._createLoader(d), y7w3j.k99(null, e) && (this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), this.maintainScriptOrder && y7w3j.z99(d.type, createjs.LoadQueue.JAVASCRIPT) && y7w3j.S99(e, createjs.XHRLoader) && (this._scriptOrder.push(d), this._loadedScripts.push(null))))
		}, c._createLoadItem = function(a, b, c) {
			var f, g, h, i, j, k, l, m, d = function() {
					e = z9i1y[q1y]["HTMLAudioElement"] && y7w3j.b99(a, z9i1y[q1y]["HTMLAudioElement"]) ? {
						tag: a,
						src: e.tag.src,
						type: createjs.LoadQueue.SOUND
					} : a
				},
				e = null;
			switch (typeof a) {
				case "string":
					e = {
						src: a
					};
					break;
				case "object":
					d();
					break;
				default:
					return null
			}
			if (f = this._parseURI(e.src), y7w3j.d99(null, f) && (e.ext = f[6]), y7w3j.M99(null, e.type) && (e.type = this._getTypeByExtension(e.ext)), g = "", h = c || this._basePath, i = e.src, f && y7w3j.W99(null, f[1]) && y7w3j.s99(null, f[3]) && (b ? (j = function(a) {
					g = a
				}, j(b), k = this._parsePath(b), i = b + i, y7w3j.w99(null, h) && k && y7w3j.B99(null, k[1]) && y7w3j.x4H(null, k[2]) && (g = h + g)) : y7w3j.N4H(null, h) && (g = h)), e.src = g + e.src, e.path = g, (y7w3j.Q4H(e.type, createjs.LoadQueue.JSON) || y7w3j.u4H(e.type, createjs.LoadQueue.MANIFEST)) && (e._loadAsJSONP = y7w3j.E4H(null, e.callback)), y7w3j.g4H(e.type, createjs.LoadQueue.JSONP) && y7w3j.r4H(null, e.callback)) throw new Error("callback is required for loading JSONP requests.");
			if ((void 0 === e.tag || y7w3j.p4H(null, e.tag)) && (e.tag = this._createTag(e)), (void 0 === e.id || y7w3j.O4H(null, e.id) || y7w3j.H4H("", e.id)) && (e.id = i), l = this._typeCallbacks[e.type] || this._extensionCallbacks[e.ext]) {
				if (m = l.callback.call(l.scope, e.src, e.type, e.id, e.data, g, this), m === !1) return null;
				m === !0 || (y7w3j.t4H(null, m.src) && (e.src = m.src), y7w3j.F4H(null, m.id) && (e.id = m.id), y7w3j.Z4H(null, m.tag) && (e.tag = m.tag), y7w3j.q4H(null, m.completeHandler) && (e.completeHandler = m.completeHandler), m.type && (e.type = m.type), f = this._parseURI(e.src), y7w3j.X4H(null, f) && y7w3j.U4H(null, f[6]) && (e.ext = f[6].toLowerCase()))
			}
			return this._loadItemsById[e.id] = e, this._loadItemsBySrc[e.src] = e, e
		}, c._createLoader = function(a) {
			var b = function() {
					e = !0
				},
				c = function() {
					e = !1
				},
				d = function() {
					e = !a._loadAsJSONP
				},
				e = this.useXHR;
			switch (a.type) {
				case createjs.LoadQueue.JSON:
				case createjs.LoadQueue.MANIFEST:
					d();
					break;
				case createjs.LoadQueue.XML:
				case createjs.LoadQueue.TEXT:
					b();
					break;
				case createjs.LoadQueue.SOUND:
				case createjs.LoadQueue.JSONP:
					c();
					break;
				case null:
					return null
			}
			return e ? new createjs.XHRLoader(a, this._crossOrigin) : new createjs.TagLoader(a)
		}, c._loadNext = function() {
			var a, b;
			if (!this._paused)
				for (this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), y7w3j.T4H(this._numItems, this._numItemsLoaded) ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1, a = 0; y7w3j.y5H(a, this._loadQueue.length) && !y7w3j.C5H(this._currentLoads.length, this._maxConnections); a++) {
					if (b = this._loadQueue[a], this.maintainScriptOrder && y7w3j.o5H(b, createjs.TagLoader) && y7w3j.R5H(b.getItem().type, createjs.LoadQueue.JAVASCRIPT)) {
						if (this._currentlyLoadingScript) continue;
						this._currentlyLoadingScript = !0
					}
					this._loadQueue.splice(a, 1), a--, this._loadItem(b)
				}
		}, c._loadItem = function(a) {
			a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load()
		}, c._handleFileError = function(a) {
			var c, b = a.target;
			this._numItemsLoaded++, this._updateProgress(), c = new createjs.Event("error"), c.text = "FILE_LOAD_ERROR", c.item = b.getItem(), this._sendError(c), this.stopOnError || (this._removeLoadItem(b), this._loadNext())
		}, c._handleFileComplete = function(a) {
			var d, b = a.target,
				c = b.getItem();
			if (this._loadedResults[c.id] = b.getResult(), y7w3j.I5H(b, createjs.XHRLoader) && (this._loadedRawResults[c.id] = b.getResult(!0)), this._removeLoadItem(b), this.maintainScriptOrder && y7w3j.G5H(c.type, createjs.LoadQueue.JAVASCRIPT)) {
				if (!y7w3j.K5H(b, createjs.TagLoader)) return this._loadedScripts[createjs.indexOf(this._scriptOrder, c)] = c, this._checkScriptLoadOrder(b), void 0;
				this._currentlyLoadingScript = !1
			}
			delete c._loadAsJSONP, y7w3j.A5H(c.type, createjs.LoadQueue.MANIFEST) && (d = b.getResult(), y7w3j.D5H(null, d) && void 0 !== d.manifest && this.loadManifest(d, !0)), this._processFinishedLoad(c, b)
		}, c._processFinishedLoad = function(a, b) {
			this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(a, b), this._loadNext()
		}, c._checkScriptLoadOrder = function() {
			var a, b, c, d, e;
			for (a = this._loadedScripts.length, b = 0; y7w3j.f5H(a, b) && (c = this._loadedScripts[b], !y7w3j.Y5H(null, c)); b++)
				if (c !== !0) {
					for (d in z9i1y[c1y])
						if (4 == d.length && 121 == d.charCodeAt(3) && 100 == d.charCodeAt(2) && 98 == d.charCodeAt(0)) break;
					e = this._loadedResults[c.id], (z9i1y[c1y][d] || z9i1y[c1y]["getElementsByTagName"]("body")[0]).appendChild(e), this._processFinishedLoad(c), this._loadedScripts[b] = !0
				}
		}, c._removeLoadItem = function(a) {
			for (var b = this._currentLoads.length, c = 0; y7w3j.e5H(b, c); c++)
				if (y7w3j.J5H(this._currentLoads[c], a)) {
					this._currentLoads.splice(c, 1);
					break
				}
		}, c._handleProgress = function(a) {
			var b = a.target;
			this._sendFileProgress(b.getItem(), b.progress), this._updateProgress()
		}, c._updateProgress = function() {
			var c, d, e, a = y7w3j.i5H(this._numItemsLoaded, this._numItems),
				b = y7w3j.c5H(this._numItems, this._numItemsLoaded);
			if (y7w3j.j5H(b, 0)) {
				for (c = 0, d = 0, e = this._currentLoads.length; y7w3j.a5H(e, d); d++) c += this._currentLoads[d].progress;
				a += y7w3j.l0H(c, b, b / this._numItems)
			}
			this._sendProgress(a)
		}, c._disposeItem = function(a) {
			delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src]
		}, c._createTag = function(a) {
			var b = null;
			switch (a.type) {
				case createjs.LoadQueue.IMAGE:
					return b = z9i1y[c1y]["createElement"]("img"), y7w3j.C0H("", this._crossOrigin) || this._isLocal(a) || (b.crossOrigin = this._crossOrigin), b;
				case createjs.LoadQueue.SOUND:
					return b = z9i1y[c1y]["createElement"]("audio"), b.autoplay = !1, b;
				case createjs.LoadQueue.JSON:
				case createjs.LoadQueue.JSONP:
				case createjs.LoadQueue.JAVASCRIPT:
				case createjs.LoadQueue.MANIFEST:
					return b = z9i1y[c1y]["createElement"]("script"), b.type = "text/javascript", b;
				case createjs.LoadQueue.CSS:
					return b = this.useXHR ? z9i1y[c1y]["createElement"]("style") : z9i1y[c1y]["createElement"]("link"), b.rel = "stylesheet", b.type = "text/css", b;
				case createjs.LoadQueue.SVG:
					return this.useXHR ? b = z9i1y[c1y]["createElement"]("svg") : (b = z9i1y[c1y]["createElement"]("object"), b.type = "image/svg+xml"), b
			}
			return null
		}, c._getTypeByExtension = function(a) {
			if (y7w3j.o0H(null, a)) return createjs.LoadQueue.TEXT;
			switch (a.toLowerCase()) {
				case "jpeg":
				case "jpg":
				case "gif":
				case "png":
				case "webp":
				case "bmp":
					return createjs.LoadQueue.IMAGE;
				case "ogg":
				case "mp3":
				case "wav":
					return createjs.LoadQueue.SOUND;
				case "json":
					return createjs.LoadQueue.JSON;
				case "xml":
					return createjs.LoadQueue.XML;
				case "css":
					return createjs.LoadQueue.CSS;
				case "js":
					return createjs.LoadQueue.JAVASCRIPT;
				case "svg":
					return createjs.LoadQueue.SVG;
				default:
					return createjs.LoadQueue.TEXT
			}
		}, c._sendFileProgress = function(a, b) {
			if (this._isCanceled()) return this._cleanUp(), void 0;
			if (this.hasEventListener("fileprogress")) {
				var c = new createjs.Event("fileprogress");
				c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c)
			}
		}, c._sendFileComplete = function(a, b) {
			if (!this._isCanceled()) {
				var c = new createjs.Event("fileload");
				c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c)
			}
		}, c._sendFileStart = function(a) {
			var b = new createjs.Event("filestart");
			b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b)
		}, c.toString = function() {
			return "[PreloadJS LoadQueue]"
		}, createjs.LoadQueue = b, a.init = function() {
			var b, c;
			for (b in z9i1y[C9y])
				if (9 == b.length && 116 == b.charCodeAt(8) && 110 == b.charCodeAt(7) && 117 == b.charCodeAt(0)) break;
			c = z9i1y[C9y][b], a.isFirefox = c.indexOf("Firefox") > -1, a.isOpera = y7w3j.R0H(null, z9i1y[q1y]["opera"]), a.isChrome = c.indexOf("Chrome") > -1, a.isIOS = c.indexOf("iPod") > -1 || c.indexOf("iPhone") > -1 || c.indexOf("iPad") > -1
		}, a.init(), createjs.LoadQueue.BrowserDetect = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a) {
				this.init(a)
			},
			b = a.prototype = new createjs.AbstractLoader;
		b._loadTimeout = null, b._tagCompleteProxy = null, b._isAudio = !1, b._tag = null, b._jsonResult = null, b.init = function(a) {
			this._item = a, this._tag = a.tag, this._isAudio = z9i1y[q1y]["HTMLAudioElement"] && y7w3j.I0H(a.tag, z9i1y[q1y]["HTMLAudioElement"]), this._tagCompleteProxy = createjs.proxy(this._handleLoad, this)
		}, b.getResult = function() {
			return y7w3j.G0H(this._item.type, createjs.LoadQueue.JSONP) || y7w3j.K0H(this._item.type, createjs.LoadQueue.MANIFEST) ? this._jsonResult : this._tag
		}, b.cancel = function() {
			this.canceled = !0, this._clean()
		}, b.load = function() {
			var a, b, c, d, e, f, g, h;
			for (a in z9i1y[c1y])
				if (4 == a.length && 121 == a.charCodeAt(3) && 100 == a.charCodeAt(2) && 98 == a.charCodeAt(0)) break;
			switch (b = function(a) {
				f.data = a
			}, c = function(a) {
				f.href = a
			}, d = function(a) {
				f.src = a
			}, e = this._item, f = this._tag, clearTimeout(this._loadTimeout), g = createjs.LoadQueue.LOAD_TIMEOUT, y7w3j.A0H(0, g) && (g = createjs.LoadQueue.loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), g), this._isAudio && (f.src = null, f.preload = "auto"), f.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (f.onstalled = createjs.proxy(this._handleStalled, this), f.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (f.onload = createjs.proxy(this._handleLoad, this), f.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this)), h = this.buildPath(e.src, e.values), e.type) {
				case createjs.LoadQueue.CSS:
					c(h);
					break;
				case createjs.LoadQueue.SVG:
					b(h);
					break;
				default:
					d(h)
			}
			if (y7w3j.D0H(e.type, createjs.LoadQueue.JSONP) || y7w3j.f0H(e.type, createjs.LoadQueue.JSON) || y7w3j.Y0H(e.type, createjs.LoadQueue.MANIFEST)) {
				if (y7w3j.e0H(null, e.callback)) throw new Error("callback is required for loading JSONP requests.");
				if (y7w3j.J0H(null, z9i1y[q1y][e.callback])) throw new Error('JSONP callback "' + e.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
				z9i1y[q1y][e.callback] = createjs.proxy(this._handleJSONPLoad, this)
			}(y7w3j.i0H(e.type, createjs.LoadQueue.SVG) || y7w3j.c0H(e.type, createjs.LoadQueue.JSONP) || y7w3j.j0H(e.type, createjs.LoadQueue.JSON) || y7w3j.a0H(e.type, createjs.LoadQueue.MANIFEST) || y7w3j.l8H(e.type, createjs.LoadQueue.JAVASCRIPT) || y7w3j.P8H(e.type, createjs.LoadQueue.CSS)) && (this._startTagVisibility = f.style.visibility, f.style.visibility = "hidden", (z9i1y[c1y][a] || z9i1y[c1y]["getElementsByTagName"]("body")[0]).appendChild(f)), y7w3j.V8H(null, f.load) && f.load()
		}, b._handleJSONPLoad = function(a) {
			this._jsonResult = a
		}, b._handleTimeout = function() {
			this._clean();
			var a = new createjs.Event("error");
			a.text = "PRELOAD_TIMEOUT", this._sendError(a)
		}, b._handleStalled = function() {}, b._handleError = function() {
			this._clean();
			var a = new createjs.Event("error");
			this._sendError(a)
		}, b._handleReadyStateChange = function() {
			clearTimeout(this._loadTimeout);
			var a = this.getItem().tag;
			(y7w3j.n8H("loaded", a.readyState) || y7w3j.L8H("complete", a.readyState)) && this._handleLoad()
		}, b._handleLoad = function() {
			var a, b, c;
			if (!(this._isCanceled() || (a = this.getItem(), b = a.tag, this.loaded || this._isAudio && y7w3j.m8H(4, b.readyState)))) {
				for (c in z9i1y[c1y])
					if (4 == c.length && 121 == c.charCodeAt(3) && 100 == c.charCodeAt(2) && 98 == c.charCodeAt(0)) break;
				switch (this.loaded = !0, a.type) {
					case createjs.LoadQueue.SVG:
					case createjs.LoadQueue.JSON:
					case createjs.LoadQueue.JSONP:
					case createjs.LoadQueue.MANIFEST:
					case createjs.LoadQueue.CSS:
						b.style.visibility = this._startTagVisibility, (z9i1y[c1y][c] || z9i1y[c1y]["getElementsByTagName"]("body")[0]).removeChild(b)
				}
				this._clean(), this._sendComplete()
			}
		}, b._clean = function() {
			var a, b;
			clearTimeout(this._loadTimeout), a = this.getItem(), b = a.tag, y7w3j.v8H(null, b) && (b.onload = null, b.removeEventListener && b.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), b.onstalled = null, b.onprogress = null, b.onerror = null, y7w3j.h8H(null, b.parentNode) && y7w3j.k8H(a.type, createjs.LoadQueue.SVG) && y7w3j.z8H(a.type, createjs.LoadQueue.JSON) && y7w3j.S8H(a.type, createjs.LoadQueue.MANIFEST) && y7w3j.b8H(a.type, createjs.LoadQueue.CSS) && y7w3j.d8H(a.type, createjs.LoadQueue.JSONP) && b.parentNode.removeChild(b)), a = this.getItem(), (y7w3j.M8H(a.type, createjs.LoadQueue.JSONP) || y7w3j.W8H(a.type, createjs.LoadQueue.MANIFEST)) && (z9i1y[q1y][a.callback] = null)
		}, b.toString = function() {
			return "[PreloadJS TagLoader]"
		}, createjs.TagLoader = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b) {
				this.init(a, b)
			},
			b = a.prototype = new createjs.AbstractLoader;
		b._request = null, b._loadTimeout = null, b._xhrLevel = 1, b._response = null, b._rawResponse = null, b._crossOrigin = "", b.init = function(a, b) {
			this._item = a, this._crossOrigin = b, !this._createXHR(a)
		}, b.getResult = function(a) {
			return a && this._rawResponse ? this._rawResponse : this._response
		}, b.cancel = function() {
			this.canceled = !0, this._clean(), this._request.abort()
		}, b.load = function() {
			var a, b, d;
			if (y7w3j.s8H(null, this._request)) return this._handleError(), void 0;
			if (this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), y7w3j.w8H(1, this._xhrLevel)) {
				if (a = function(a) {
						b = a.LoadQueue.loadTimeout
					}, b = createjs.LoadQueue.LOAD_TIMEOUT, y7w3j.B8H(0, b)) a(createjs);
				else try {
					console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout")
				} catch (c) {}
				this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), b)
			}
			this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
			try {
				this._item.values && y7w3j.x3H(this._item.method, createjs.LoadQueue.GET) ? y7w3j.N3H(this._item.method, createjs.LoadQueue.POST) && this._request.send(this._formatQueryString(this._item.values)) : this._request.send()
			} catch (c) {
				d = new createjs.Event("error"), d.error = c, this._sendError(d)
			}
		}, b.getAllResponseHeaders = function() {
			return y7w3j.Q3H(this._request.getAllResponseHeaders, Function) ? this._request.getAllResponseHeaders() : null
		}, b.getResponseHeader = function(a) {
			return y7w3j.u3H(this._request.getResponseHeader, Function) ? this._request.getResponseHeader(a) : null
		}, b._handleProgress = function(a) {
			if (a && (!y7w3j.E3H(a.loaded, 0) || !y7w3j.g3H(0, a.total))) {
				var b = new createjs.Event("progress");
				b.loaded = a.loaded, b.total = a.total, this._sendProgress(b)
			}
		}, b._handleLoadStart = function() {
			clearTimeout(this._loadTimeout), this._sendLoadStart()
		}, b._handleAbort = function() {
			this._clean();
			var a = new createjs.Event("error");
			a.text = "XHR_ABORTED", this._sendError(a)
		}, b._handleError = function() {
			this._clean();
			var a = new createjs.Event("error");
			this._sendError(a)
		}, b._handleReadyStateChange = function() {
			y7w3j.r3H(4, this._request.readyState) && this._handleLoad()
		}, b._handleLoad = function() {
			if (!this.loaded) {
				if (this.loaded = !0, !this._checkError()) return this._handleError(), void 0;
				this._response = this._getResponse(), this._clean();
				var a = this._generateTag();
				a && this._sendComplete()
			}
		}, b._handleTimeout = function(a) {
			this._clean();
			var b = new createjs.Event("error");
			b.text = "PRELOAD_TIMEOUT", this._sendError(a)
		}, b._checkError = function() {
			var a = parseInt(this._request.status);
			switch (a) {
				case 404:
				case 0:
					return !1
			}
			return !0
		}, b._getResponse = function() {
			if (y7w3j.p3H(null, this._response)) return this._response;
			if (y7w3j.O3H(null, this._request.response)) return this._request.response;
			try {
				if (y7w3j.H3H(null, this._request.responseText)) return this._request.responseText
			} catch (a) {}
			try {
				if (y7w3j.t3H(null, this._request.responseXML)) return this._request.responseXML
			} catch (a) {}
			return null
		}, b._createXHR = function(a) {
			var g, b = this._isCrossDomain(a),
				c = null;
			if (b && z9i1y[q1y]["XDomainRequest"]) c = new XDomainRequest;
			else if (z9i1y[q1y]["XMLHttpRequest"]) c = new XMLHttpRequest;
			else try {
				c = new ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch (d) {
				try {
					c = new ActiveXObject("Msxml2.XMLHTTP.3.0")
				} catch (e) {
					try {
						c = new ActiveXObject("Msxml2.XMLHTTP")
					} catch (f) {
						return !1
					}
				}
			}
			return createjs.LoadQueue.isText(a.type) && c.overrideMimeType && c.overrideMimeType("text/plain; charset=utf-8"), this._xhrLevel = "string" == typeof c.responseType ? 2 : 1, g = null, g = y7w3j.F3H(a.method, createjs.LoadQueue.GET) ? this.buildPath(a.src, a.values) : a.src, c.open(a.method || createjs.LoadQueue.GET, g, !0), b && y7w3j.Z3H(c, XMLHttpRequest) && y7w3j.q3H(1, this._xhrLevel) && c.setRequestHeader("Origin", z9i1y["location"].origin), a.values && y7w3j.X3H(a.method, createjs.LoadQueue.POST) && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(a.type) && (c.responseType = "arraybuffer"), this._request = c, !0
		}, b._clean = function() {
			clearTimeout(this._loadTimeout);
			var a = this._request;
			a.onloadstart = null, a.onprogress = null, a.onabort = null, a.onerror = null, a.onload = null, a.ontimeout = null, a.onloadend = null, a.onreadystatechange = null
		}, b._generateTag = function() {
			var c, d, e, f, h, a = this._item.type,
				b = this._item.tag;
			switch (a) {
				case createjs.LoadQueue.IMAGE:
					return b.onload = createjs.proxy(this._handleTagReady, this), y7w3j.U3H("", this._crossOrigin) && (b.crossOrigin = "Anonymous"), b.src = this.buildPath(this._item.src, this._item.values), this._rawResponse = this._response, this._response = b, !1;
				case createjs.LoadQueue.JAVASCRIPT:
					return b = z9i1y[c1y]["createElement"]("script"), b.text = this._response, this._rawResponse = this._response, this._response = b, !0;
				case createjs.LoadQueue.CSS:
					return c = z9i1y[c1y]["getElementsByTagName"]("head")[0], c.appendChild(b), b.styleSheet ? b.styleSheet.cssText = this._response : (d = z9i1y[c1y]["createTextNode"](this._response), b.appendChild(d)), this._rawResponse = this._response, this._response = b, !0;
				case createjs.LoadQueue.XML:
					return e = this._parseXML(this._response, "text/xml"), this._rawResponse = this._response, this._response = e, !0;
				case createjs.LoadQueue.SVG:
					return e = this._parseXML(this._response, "image/svg+xml"), this._rawResponse = this._response, y7w3j.T3H(null, e.documentElement) ? (b.appendChild(e.documentElement), this._response = b) : this._response = e, !0;
				case createjs.LoadQueue.JSON:
				case createjs.LoadQueue.MANIFEST:
					f = {};
					try {
						f = JSON.parse(this._response)
					} catch (g) {
						h = function(a) {
							f = a
						}, h(g)
					}
					return this._rawResponse = this._response, this._response = f, !0
			}
			return !0
		}, b._parseXML = function(a, b) {
			var d, c = null;
			try {
				z9i1y[q1y]["DOMParser"] ? (d = new DOMParser, c = d.parseFromString(a, b)) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a))
			} catch (e) {}
			return c
		}, b._handleTagReady = function() {
			this._sendComplete()
		}, b.toString = function() {
			return "[PreloadJS XHRLoader]"
		}, createjs.XHRLoader = a
	}(), "object" != typeof JSON && (JSON = {}),
	function() {
		function g4(a) {
			return y7w3j.y2H(10, a) ? "0" + a : a
		}

		function A4(a, b) {
			var c, d, e, f, g, j, h = k4,
				i = b[a];
			switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof m4 && (i = m4.call(b, a, i)), typeof i) {
				case "string":
					return z4(i);
				case "number":
					return isFinite(i) ? String(i) : "null";
				case "boolean":
				case "null":
					return String(i);
				case "object":
					if (!i) return "null";
					if (k4 += G4, g = [], y7w3j.C2H("[object Array]", Object.prototype.toString.apply(i))) {
						for (j = function() {
								g[c] = A4(c, i) || "null"
							}, f = i.length, c = 0; y7w3j.o2H(f, c); c += 1) j();
						return e = y7w3j.R2H(0, g.length) ? "[]" : k4 ? "[\n" + k4 + g.join(",\n" + k4) + "\n" + h + "]" : "[" + g.join(",") + "]", k4 = h, e
					}
					if (m4 && "object" == typeof m4)
						for (f = m4.length, c = 0; y7w3j.I2H(f, c); c += 1) "string" == typeof m4[c] && (d = m4[c], e = A4(d, i), e && g.push(z4(d) + (k4 ? ": " : ":") + e));
					else
						for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = A4(d, i), e && g.push(z4(d) + (k4 ? ": " : ":") + e));
					return e = y7w3j.G2H(0, g.length) ? "{}" : k4 ? "{\n" + k4 + g.join(",\n" + k4) + "\n" + h + "}" : "{" + g.join(",") + "}", k4 = h, e
			}
		}

		function z4(a) {
			return h4.lastIndex = 0, h4.test(a) ? '"' + a.replace(h4, function(a) {
				var b = d4[a];
				return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + a + '"'
		}
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + g4(this.getUTCMonth() + 1) + "-" + g4(this.getUTCDate()) + "T" + g4(this.getUTCHours()) + ":" + g4(this.getUTCMinutes()) + ":" + g4(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf()
		});
		var O4 = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			h4 = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			k4, G4, d4 = {
				"\b": "\\b",
				"	": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			m4;
		"function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
			var d;
			if (k4 = "", G4 = "", "number" == typeof c)
				for (d = 0; y7w3j.K2H(c, d); d += 1) G4 += " ";
			else "string" == typeof c && (G4 = c);
			if (m4 = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
			return A4("", {
				"": a
			})
		}), "function" != typeof JSON.parse && (JSON.parse = function(V4, R4) {
			function u4(a, b) {
				var c, d, e = a[b];
				if (e && "object" == typeof e)
					for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = u4(e, c), void 0 !== d ? e[c] = d : delete e[c]);
				return R4.call(a, b, e)
			}
			var n4;
			if (V4 = String(V4), O4.lastIndex = 0, O4.test(V4) && (V4 = V4.replace(O4, function(a) {
					return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
				})), /^[\],:{}\s]*$/.test(V4.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return n4 = eval("(" + V4 + ")"), "function" == typeof R4 ? u4({
				"": n4
			}, "") : n4;
			throw new SyntaxError("JSON.parse")
		})
	}(), this.createjs = this.createjs || {},
	function() {
		var a = createjs.SoundJS = createjs.SoundJS || {};
		a.version = "NEXT", a.buildDate = "Thu, 12 Dec 2013 23:37:06 GMT"
	}(), this.createjs = this.createjs || {},
	function() {
		function a(a, b) {
			this.init(a, b)
		}

		function b() {
			throw "Sound cannot be instantiated"
		}

		function c() {
			this.isDefault = !0, this.addEventListener = this.removeEventListener = this.removeAllEventListeners = this.dispatchEvent = this.hasEventListener = this._listeners = this._interrupt = this._playFailed = this.pause = this.resume = this.play = this._beginPlaying = this._cleanUp = this.stop = this.setMasterVolume = this.setVolume = this.mute = this.setMute = this.getMute = this.setPan = this.getPosition = this.setPosition = this.playFailed = function() {
				return !1
			}, this.getVolume = this.getPan = this.getDuration = function() {
				return 0
			}, this.playState = b.PLAY_FAILED, this.toString = function() {
				return "[Sound Default Sound Instance]"
			}
		}

		function d() {}
		var e, f;
		e = b, e.DELIMITER = "|", e.INTERRUPT_ANY = "any", e.INTERRUPT_EARLY = "early", e.INTERRUPT_LATE = "late", e.INTERRUPT_NONE = "none", e.PLAY_INITED = "playInited", e.PLAY_SUCCEEDED = "playSucceeded", e.PLAY_INTERRUPTED = "playInterrupted", e.PLAY_FINISHED = "playFinished", e.PLAY_FAILED = "playFailed", e.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], e.EXTENSION_MAP = {
			m4a: "mp4"
		}, e.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, e.defaultInterruptBehavior = e.INTERRUPT_NONE, e.alternateExtensions = [], e._lastID = 0, e.activePlugin = null, e._pluginsRegistered = !1, e._masterVolume = 1, e._masterMute = !1, e._instances = [], e._idHash = {}, e._preloadHash = {}, e._defaultSoundInstance = null, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, createjs.EventDispatcher.initialize(e), e._sendFileLoadEvent = function(a) {
			var b, c, d, f;
			if (e._preloadHash[a])
				for (b = 0, c = e._preloadHash[a].length; y7w3j.A2H(c, b); b++) d = e._preloadHash[a][b], e._preloadHash[a][b] = !0, e.hasEventListener("fileload") && (f = new createjs.Event("fileload"), f.src = d.src, f.id = d.id, f.data = d.data, e.dispatchEvent(f))
		}, e.getPreloadHandlers = function() {
			return {
				callback: createjs.proxy(e.initLoad, e),
				types: ["sound"],
				extensions: e.SUPPORTED_EXTENSIONS
			}
		}, e.registerPlugin = function(a) {
			try {
				console.log("createjs.Sound.registerPlugin has been deprecated. Please use registerPlugins.")
			} catch (b) {}
			return e._registerPlugin(a)
		}, e._registerPlugin = function(a) {
			return e._pluginsRegistered = !0, y7w3j.D2H(null, a) ? !1 : a.isSupported() ? (e.activePlugin = new a, !0) : !1
		}, e.registerPlugins = function(a) {
			var b, c, d;
			for (b = 0, c = a.length; y7w3j.f2H(c, b); b++)
				if (d = a[b], e._registerPlugin(d)) return !0;
			return !1
		}, e.initializeDefaultPlugins = function() {
			return y7w3j.Y2H(null, e.activePlugin) ? !0 : e._pluginsRegistered ? !1 : e.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
		}, e.isReady = function() {
			return y7w3j.e2H(null, e.activePlugin)
		}, e.getCapabilities = function() {
			return y7w3j.J2H(null, e.activePlugin) ? null : e.activePlugin._capabilities
		}, e.getCapability = function(a) {
			return y7w3j.i2H(null, e.activePlugin) ? null : e.activePlugin._capabilities[a]
		}, e.initLoad = function(a, b, c, d, f) {
			a = a.replace(f, "");
			var g = e.registerSound(a, c, d, !1, f);
			return y7w3j.c2H(null, g) ? !1 : g
		}, e.registerSound = function(b, c, d, f, g) {
			var h, i, j;
			if (!e.initializeDefaultPlugins()) return !1;
			if (y7w3j.j2H(b, Object) && (g = c, c = b.id, d = b.data, b = b.src), h = e.alternateExtensions.length ? e._parsePath2(b, "sound", c, d) : e._parsePath(b, "sound", c, d), y7w3j.a2H(null, h)) return !1;
			if (y7w3j.l7H(null, g) && (b = g + b, h.src = g + h.src), y7w3j.P7H(null, c) && (e._idHash[c] = h.src), i = null, y7w3j.V7H(null, d) && (isNaN(d.channels) ? isNaN(d) || (i = parseInt(d)) : i = parseInt(d.channels)), j = e.activePlugin.register(h.src, i), y7w3j.n7H(null, j) && (y7w3j.L7H(null, j.numChannels) && (i = j.numChannels), a.create(h.src, i), y7w3j.m7H(null, d) && isNaN(d) ? d.channels = h.data.channels = i || a.maxPerChannel() : d = h.data = i || a.maxPerChannel(), y7w3j.v7H(null, j.tag) ? h.tag = j.tag : j.src && (h.src = j.src), y7w3j.h7H(null, j.completeHandler) && (h.completeHandler = j.completeHandler), j.type && (h.type = j.type)), y7w3j.k7H(0, f))
				if (e._preloadHash[h.src] || (e._preloadHash[h.src] = []), e._preloadHash[h.src].push({
						src: b,
						id: c,
						data: d
					}), y7w3j.z7H(1, e._preloadHash[h.src].length)) e.activePlugin.preload(h.src, j);
				else if (y7w3j.S7H(1, e._preloadHash[h.src][0])) return !0;
			return h
		}, e.registerManifest = function(a, b) {
			for (var c = [], d = 0, e = a.length; y7w3j.b7H(e, d); d++) c[d] = createjs.Sound.registerSound(a[d].src, a[d].id, a[d].data, a[d].preload, b);
			return c
		}, e.removeSound = function(b, c) {
			var d, f;
			if (y7w3j.d7H(null, e.activePlugin)) return !1;
			if (y7w3j.M7H(b, Object) && (b = b.src), b = e._getSrcById(b), d = e.alternateExtensions.length ? e._parsePath2(b) : e._parsePath(b), y7w3j.W7H(null, d)) return !1;
			y7w3j.s7H(null, c) && (d.src = c + d.src), b = d.src;
			for (f in e._idHash) y7w3j.w7H(e._idHash[f], b) && delete e._idHash[f];
			return a.removeSrc(b), delete e._preloadHash[b], e.activePlugin.removeSound(b), !0
		}, e.removeManifest = function(a, b) {
			for (var c = [], d = 0, e = a.length; y7w3j.B7H(e, d); d++) c[d] = createjs.Sound.removeSound(a[d].src, b);
			return c
		}, e.removeAllSounds = function() {
			e._idHash = {}, e._preloadHash = {}, a.removeAll(), e.activePlugin.removeAllSounds()
		}, e.loadComplete = function(a) {
			var b;
			return b = e.alternateExtensions.length ? e._parsePath2(a, "sound") : e._parsePath(a, "sound"), a = b ? e._getSrcById(b.src) : e._getSrcById(a), y7w3j.x1H(1, e._preloadHash[a][0])
		}, e._parsePath = function(a, b, c, d) {
			var f, h, i, j, k, l, m, n, o;
			if ("string" != typeof a && (a = a.toString()), f = a.split(e.DELIMITER), y7w3j.N1H(f.length, 1)) try {
				console.log('createjs.Sound.DELIMITER "|" loading approach has been deprecated. Please use the new alternateExtensions property.')
			} catch (g) {}
			for (h = {
					type: b || "sound",
					id: c,
					data: d
				}, i = e.getCapabilities(), j = 0, k = f.length; y7w3j.Q1H(k, j); j++) {
				if (l = f[j], m = l.match(e.FILE_PATTERN), y7w3j.u1H(null, m)) return !1;
				if (n = m[4], o = m[5], i[o] && createjs.indexOf(e.SUPPORTED_EXTENSIONS, o) > -1) return h.name = n, h.src = l, h.extension = o, h
			}
			return null
		}, e._parsePath2 = function(a, b, c, d) {
			var f, g, h, i, j, k;
			if ("string" != typeof a && (a = a.toString()), f = a.match(e.FILE_PATTERN), y7w3j.E1H(null, f)) return !1;
			for (g = f[4], h = f[5], i = e.getCapabilities(), j = 0; !i[h];)
				if (h = e.alternateExtensions[j++], y7w3j.g1H(j, e.alternateExtensions.length)) return null;
			return a = a.replace("." + f[5], "." + h), k = {
				type: b || "sound",
				id: c,
				data: d
			}, k.name = g, k.src = a, k.extension = h, k
		}, e.play = function(a, b, c, d, f, g, h) {
			var i = e.createInstance(a),
				j = e._playInstance(i, b, c, d, f, g, h);
			return j || i.playFailed(), i
		}, e.createInstance = function(c) {
			var d, f;
			return e.initializeDefaultPlugins() ? (c = e._getSrcById(c), d = e.alternateExtensions.length ? e._parsePath2(c, "sound") : e._parsePath(c, "sound"), f = null, y7w3j.r1H(null, d) && y7w3j.p1H(null, d.src) ? (a.create(d.src), f = e.activePlugin.create(d.src)) : f = b._defaultSoundInstance, f.uniqueId = e._lastID++, f) : e._defaultSoundInstance
		}, e.setVolume = function(a) {
			if (y7w3j.O1H(null, Number(a))) return !1;
			if (a = Math.max(0, Math.min(1, a)), e._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a))
				for (var b = this._instances, c = 0, d = b.length; y7w3j.H1H(d, c); c++) b[c].setMasterVolume(a)
		}, e.getVolume = function() {
			return e._masterVolume
		}, e.setMute = function(a) {
			if (y7w3j.t1H(null, a) || void 0 == a) return !1;
			if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a))
				for (var b = this._instances, c = 0, d = b.length; y7w3j.F1H(d, c); c++) b[c].setMasterMute(a);
			return !0
		}, e.getMute = function() {
			return this._masterMute
		}, e.stop = function() {
			for (var a = this._instances, b = a.length; b--;) a[b].stop()
		}, e._playInstance = function(a, b, c, d, f, g, h) {
			var i, j, k;
			if (y7w3j.Z1H(b, Object) && (c = b.delay, d = b.offset, f = b.loop, g = b.volume, h = b.pan, b = b.interrupt), b = b || e.defaultInterruptBehavior, y7w3j.q1H(null, c) && (c = 0), y7w3j.X1H(null, d) && (d = a.getPosition()), y7w3j.U1H(null, f) && (f = 0), y7w3j.T1H(null, g) && (g = a.volume), y7w3j.y6H(null, h) && (h = a.pan), y7w3j.C6H(0, c)) {
				if (i = e._beginPlaying(a, b, d, f, g, h), !i) return !1
			} else j = function(b) {
				a._delayTimeoutId = b
			}, k = setTimeout(function() {
				e._beginPlaying(a, b, d, f, g, h)
			}, c), j(k);
			return this._instances.push(a), !0
		}, e._beginPlaying = function(b, c, d, e, f, g) {
			var h, i;
			return a.add(b, c) ? (h = b._beginPlaying(d, e, f, g), h ? !0 : (i = createjs.indexOf(this._instances, b), i > -1 && this._instances.splice(i, 1), !1)) : !1
		}, e._getSrcById = function(a) {
			return y7w3j.o6H(null, e._idHash) || y7w3j.R6H(null, e._idHash[a]) ? a : e._idHash[a]
		}, e._playFinished = function(b) {
			a.remove(b);
			var c = createjs.indexOf(this._instances, b);
			c > -1 && this._instances.splice(c, 1)
		}, createjs.Sound = b, a.channels = {}, a.create = function(b, c) {
			var d = a.get(b);
			return y7w3j.I6H(null, d) ? (a.channels[b] = new a(b, c), !0) : !1
		}, a.removeSrc = function(b) {
			var c = a.get(b);
			return y7w3j.G6H(null, c) ? !1 : (c.removeAll(), delete a.channels[b], !0)
		}, a.removeAll = function() {
			for (var b in a.channels) a.channels[b].removeAll();
			a.channels = {}
		}, a.add = function(b, c) {
			var d = a.get(b.src);
			return y7w3j.K6H(null, d) ? !1 : d.add(b, c)
		}, a.remove = function(b) {
			var c = a.get(b.src);
			return y7w3j.A6H(null, c) ? !1 : (c.remove(b), !0)
		}, a.maxPerChannel = function() {
			return f.maxDefault
		}, a.get = function(b) {
			return a.channels[b]
		}, f = a.prototype, f.src = null, f.max = null, f.maxDefault = 100, f.length = 0, f.init = function(a, b) {
			this.src = a, this.max = b || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
		}, f.get = function(a) {
			return this._instances[a]
		}, f.add = function(a, b) {
			return this.getSlot(b, a) ? (this._instances.push(a), this.length++, !0) : !1
		}, f.remove = function(a) {
			var b = createjs.indexOf(this._instances, a);
			return -1 == b ? !1 : (this._instances.splice(b, 1), this.length--, !0)
		}, f.removeAll = function() {
			for (var a = y7w3j.D6H(this.length, 1); y7w3j.f6H(a, 0); a--) this._instances[a].stop()
		}, f.getSlot = function(a) {
			for (var c, d, e = 0, f = this.max; y7w3j.Y6H(f, e); e++) {
				if (c = this.get(e), y7w3j.e6H(null, c)) return !0;
				(y7w3j.J6H(a, b.INTERRUPT_NONE) || y7w3j.i6H(c.playState, b.PLAY_FINISHED)) && (y7w3j.c6H(0, e) ? y7w3j.j6H(c.playState, b.PLAY_FINISHED) || y7w3j.a6H(c.playState, b.PLAY_INTERRUPTED) || y7w3j.l9H(c.playState, b.PLAY_FAILED) ? d = c : (y7w3j.P9H(a, b.INTERRUPT_EARLY) && y7w3j.V9H(c.getPosition(), d.getPosition()) || y7w3j.n9H(a, b.INTERRUPT_LATE) && y7w3j.L9H(c.getPosition(), d.getPosition())) && (d = c) : d = c)
			}
			return y7w3j.m9H(null, d) ? (d._interrupt(), this.remove(d), !0) : !1
		}, f.toString = function() {
			return "[Sound SoundChannel]"
		}, b._defaultSoundInstance = new c, d.init = function() {
			var a, b, c;
			for (a in z9i1y[q1y])
				if (9 === a.length && 116 === a.charCodeAt(6) && 114 === a.charCodeAt(8) && 103 === a.charCodeAt(4) && 110 === a.charCodeAt(0)) break;
			for (b in z9i1y[q1y][a])
				if (9 == b.length && 116 == b.charCodeAt(8) && 110 == b.charCodeAt(7) && 117 == b.charCodeAt(0)) break;
			c = z9i1y[q1y][a][b], d.isFirefox = c.indexOf("Firefox") > -1, d.isOpera = y7w3j.v9H(null, z9i1y[q1y]["opera"]), d.isChrome = c.indexOf("Chrome") > -1, d.isIOS = c.indexOf("iPod") > -1 || c.indexOf("iPhone") > -1 || c.indexOf("iPad") > -1, d.isAndroid = c.indexOf("Android") > -1, d.isBlackberry = c.indexOf("Blackberry") > -1
		}, d.init(), createjs.Sound.BrowserDetect = d
	}(), this.createjs = this.createjs || {},
	function() {
		function a() {
			this._init()
		}
		var b, c;
		b = a, b._capabilities = null, b.isSupported = function() {
			var a = createjs.Sound.BrowserDetect.isIOS || createjs.Sound.BrowserDetect.isAndroid || createjs.Sound.BrowserDetect.isBlackberry;
			return y7w3j.h9H("file:", z9i1y["location"]["protocol"]) || a || this._isFileXHRSupported() ? (b._generateCapabilities(), y7w3j.k9H(null, b.context) ? !1 : !0) : !1
		}, b._isFileXHRSupported = function() {
			var d, a = !0,
				b = new XMLHttpRequest;
			try {
				b.open("GET", "fail.fail", !1)
			} catch (c) {
				return a = !1
			}
			b.onerror = function() {
				var b = function() {
					a = !1
				};
				b()
			}, b.onload = function() {
				a = y7w3j.z9H(404, this.status) || y7w3j.S9H(200, this.status) || y7w3j.b9H(0, this.status) && y7w3j.d9H("", this.response)
			};
			try {
				b.send()
			} catch (c) {
				d = function() {
					a = !1
				}, d()
			}
			return a
		}, b._generateCapabilities = function() {
			var a, c, d, e, f, g, h, i;
			if (y7w3j.M9H(null, b._capabilities)) {
				if (a = z9i1y[c1y]["createElement"]("audio"), y7w3j.W9H(null, a.canPlayType)) return null;
				if (z9i1y[q1y].webkitAudioContext) b.context = new webkitAudioContext;
				else {
					if (!z9i1y[q1y].AudioContext) return null;
					b.context = new AudioContext
				}
				for (b._compatibilitySetUp(), b.playEmptySound(), b._capabilities = {
						panning: !0,
						volume: !0,
						tracks: -1
					}, c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; y7w3j.s9H(f, e); e++) g = function() {
					b._capabilities[h] = y7w3j.w9H("no", a.canPlayType("audio/" + h)) && y7w3j.B9H("", a.canPlayType("audio/" + h)) || y7w3j.x4C("no", a.canPlayType("audio/" + i)) && y7w3j.N4C("", a.canPlayType("audio/" + i))
				}, h = c[e], i = d[h] || h, g();
				y7w3j.Q4C(b.context.destination.numberOfChannels, 2) && (b._capabilities.panning = !1), b.dynamicsCompressorNode = b.context.createDynamicsCompressor(), b.dynamicsCompressorNode.connect(b.context.destination), b.gainNode = b.context.createGain(), b.gainNode.connect(b.dynamicsCompressorNode)
			}
		}, b._compatibilitySetUp = function() {
			var a, c;
			b.context.createGain || (a = function(a) {
				b.context.createGain = a.context.createGainNode
			}, a(b), c = b.context.createBufferSource(), c.__proto__.start = c.__proto__.noteGrainOn, c.__proto__.stop = c.__proto__.noteOff, this._panningModel = 0)
		}, b.playEmptySound = function() {
			var a = this.context.createBuffer(1, 1, 22050),
				b = this.context.createBufferSource();
			b.buffer = a, b.connect(this.context.destination), b.start(0, 0, 0)
		}, c = a.prototype, c._capabilities = null, c._volume = 1, c.context = null, c._panningModel = "equalpower", c.dynamicsCompressorNode = null, c.gainNode = null, c._arrayBuffers = null, c._init = function() {
			this._capabilities = b._capabilities, this._arrayBuffers = {}, this.context = b.context, this.gainNode = b.gainNode, this.dynamicsCompressorNode = b.dynamicsCompressorNode
		}, c.register = function(a) {
			this._arrayBuffers[a] = !0;
			var b = new createjs.WebAudioPlugin.Loader(a, this);
			return {
				tag: b
			}
		}, c.isPreloadStarted = function(a) {
			return y7w3j.u4C(null, this._arrayBuffers[a])
		}, c.isPreloadComplete = function(a) {
			return !(y7w3j.E4C(null, this._arrayBuffers[a]) || y7w3j.g4C(1, this._arrayBuffers[a]))
		}, c.removeSound = function(a) {
			delete this._arrayBuffers[a]
		}, c.removeAllSounds = function() {
			this._arrayBuffers = {}
		}, c.addPreloadResults = function(a, b) {
			this._arrayBuffers[a] = b
		}, c._handlePreloadComplete = function() {
			createjs.Sound._sendFileLoadEvent(this.src)
		}, c.preload = function(a) {
			this._arrayBuffers[a] = !0;
			var b = new createjs.WebAudioPlugin.Loader(a, this);
			b.onload = this._handlePreloadComplete, b.load()
		}, c.create = function(a) {
			return this.isPreloadStarted(a) || this.preload(a), new createjs.WebAudioPlugin.SoundInstance(a, this)
		}, c.setVolume = function(a) {
			return this._volume = a, this._updateVolume(), !0
		}, c._updateVolume = function() {
			var a = createjs.Sound._masterMute ? 0 : this._volume;
			y7w3j.r4C(a, this.gainNode.gain.value) && (this.gainNode.gain.value = a)
		}, c.getVolume = function() {
			return this._volume
		}, c.setMute = function() {
			return this._updateVolume(), !0
		}, c.toString = function() {
			return "[WebAudioPlugin]"
		}, createjs.WebAudioPlugin = a
	}(),
	function() {
		function b(a, b) {
			this._init(a, b)
		}
		var c, a = function(a) {
			c._pan = a
		};
		c = b.prototype = new createjs.EventDispatcher, c.src = null, c.uniqueId = -1, c.playState = null, c._owner = null, c._offset = 0, c._delay = 0, c._volume = 1;
		try {
			Object.defineProperty(c, "volume", {
				get: function() {
					return this._volume
				},
				set: function(a) {
					return y7w3j.p4C(null, Number(a)) ? !1 : (a = Math.max(0, Math.min(1, a)), this._volume = a, this._updateVolume(), void 0)
				}
			})
		} catch (d) {}
		a(0);
		try {
			Object.defineProperty(c, "pan", {
				get: function() {
					return this._pan
				},
				set: function(a) {
					return this._owner._capabilities.panning && y7w3j.O4C(null, Number(a)) ? (a = Math.max(-1, Math.min(1, a)), this._pan = a, this.panNode.setPosition(a, 0, -.5), void 0) : !1
				}
			})
		} catch (d) {}
		c._duration = 0, c._remainingLoops = 0, c._delayTimeoutId = null, c._soundCompleteTimeout = null, c.gainNode = null, c.panNode = null, c.sourceNode = null, c._sourceNodeNext = null, c._muted = !1, c._paused = !1, c._startTime = 0, c._endedHandler = null, c._sendEvent = function(a) {
			var b = new createjs.Event(a);
			this.dispatchEvent(b)
		}, c._init = function(a, b) {
			this._owner = b, this.src = a, this.gainNode = this._owner.context.createGain(), this.panNode = this._owner.context.createPanner(), this.panNode.panningModel = this._owner._panningModel, this.panNode.connect(this.gainNode), this._owner.isPreloadComplete(this.src) && (this._duration = y7w3j.H4C(1e3, this._owner._arrayBuffers[this.src].duration)), this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
		}, c._cleanUp = function() {
			this.sourceNode && y7w3j.t4C(this.playState, createjs.Sound.PLAY_SUCCEEDED) && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), y7w3j.F4C(0, this.gainNode.numberOfOutputs) && this.gainNode.disconnect(0), clearTimeout(this._delayTimeoutId), clearTimeout(this._soundCompleteTimeout), this._startTime = 0, y7w3j.Z4C(null, z9i1y[q1y].createjs) && createjs.Sound._playFinished(this)
		}, c._cleanUpAudioNode = function(a) {
			return a && (a.stop(0), a.disconnect(this.panNode), a = null), a
		}, c._interrupt = function() {
			this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._paused = !1, this._sendEvent("interrupted")
		}, c._handleSoundReady = function() {
			if (y7w3j.q4C(null, z9i1y[q1y].createjs)) {
				if (y7w3j.X4C(1e3 * this._offset, this.getDuration())) return this.playFailed(), void 0;
				y7w3j.U4C(this._offset, 0) && (this._offset = 0), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._paused = !1, this.gainNode.connect(this._owner.gainNode);
				var a = this._owner._arrayBuffers[this.src].duration;
				this.sourceNode = this._createAndPlayAudioNode(y7w3j.T4C(this._owner.context.currentTime, a), this._offset), this._duration = y7w3j.y5C(1e3, a), this._startTime = y7w3j.C5C(this.sourceNode.startTime, this._offset), this._soundCompleteTimeout = setTimeout(this._endedHandler, y7w3j.o5C(1e3, a - this._offset)), y7w3j.R5C(0, this._remainingLoops) && (this._sourceNodeNext = this._createAndPlayAudioNode(this._startTime, 0))
			}
		}, c._createAndPlayAudioNode = function(a, b) {
			var c = this._owner.context.createBufferSource();
			return c.buffer = this._owner._arrayBuffers[this.src], c.connect(this.panNode), this._owner.context.currentTime, c.startTime = a + c.buffer.duration, c.start(c.startTime, b, y7w3j.I5C(c.buffer.duration, b)), c
		}, c.play = function(a, b, c, d, e, f) {
			this._cleanUp(), createjs.Sound._playInstance(this, a, b, c, d, e, f)
		}, c._beginPlaying = function(a, b, c, d) {
			return y7w3j.G5C(null, z9i1y[q1y].createjs) && this.src ? (this._offset = y7w3j.K5C(a, 1e3), this._remainingLoops = b, this.volume = c, this.pan = d, this._owner.isPreloadComplete(this.src) ? (this._handleSoundReady(null), this._sendEvent("succeeded"), 1) : (this.playFailed(), void 0)) : void 0
		}, c.pause = function() {
			return this._paused || y7w3j.A5C(this.playState, createjs.Sound.PLAY_SUCCEEDED) ? !1 : (this._paused = !0, this._offset = y7w3j.D5C(this._owner.context.currentTime, this._startTime), this._cleanUpAudioNode(this.sourceNode), this._cleanUpAudioNode(this._sourceNodeNext), y7w3j.f5C(0, this.gainNode.numberOfOutputs) && this.gainNode.disconnect(), clearTimeout(this._delayTimeoutId), clearTimeout(this._soundCompleteTimeout), !0)
		}, c.resume = function() {
			return this._paused ? (this._handleSoundReady(null), !0) : !1
		}, c.stop = function() {
			return this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._offset = 0, !0
		}, c.setVolume = function(a) {
			return this.volume = a, !0
		}, c._updateVolume = function() {
			var a = this._muted ? 0 : this._volume;
			return y7w3j.Y5C(a, this.gainNode.gain.value) ? (this.gainNode.gain.value = a, !0) : !1
		}, c.getVolume = function() {
			return this.volume
		}, c.setMute = function(a) {
			return y7w3j.e5C(null, a) || void 0 == a ? !1 : (this._muted = a, this._updateVolume(), !0)
		}, c.getMute = function() {
			return this._muted
		}, c.setPan = function(a) {
			return this.pan = a, y7w3j.J5C(this.pan, a) ? !1 : void 0
		}, c.getPan = function() {
			return this.pan
		}, c.getPosition = function() {
			var a;
			return a = this._paused || y7w3j.i5C(null, this.sourceNode) ? this._offset : y7w3j.c5C(this._owner.context.currentTime, this._startTime), y7w3j.j5C(1e3, a)
		}, c.setPosition = function(a) {
			return this._offset = y7w3j.a5C(a, 1e3), this.sourceNode && y7w3j.l0C(this.playState, createjs.Sound.PLAY_SUCCEEDED) && (this._cleanUpAudioNode(this.sourceNode), this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout)), this._paused || y7w3j.P0C(this.playState, createjs.Sound.PLAY_SUCCEEDED) || this._handleSoundReady(null), !0
		}, c.getDuration = function() {
			return this._duration
		}, c._handleSoundComplete = function() {
			return this._offset = 0, y7w3j.V0C(0, this._remainingLoops) ? (this._remainingLoops--, this._sourceNodeNext ? (this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._startTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._startTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)) : this._handleSoundReady(null), this._sendEvent("loop"), void 0) : (y7w3j.n0C(null, z9i1y[q1y].createjs) && (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._sendEvent("complete")), void 0)
		}, c.playFailed = function() {
			y7w3j.L0C(null, z9i1y[q1y].createjs) && (this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed"))
		}, c.toString = function() {
			return "[WebAudioPlugin SoundInstance]"
		}, createjs.WebAudioPlugin.SoundInstance = b
	}(),
	function() {
		function a(a, b) {
			this._init(a, b)
		}
		var b = a.prototype;
		b.request = null, b.owner = null, b.progress = -1, b.src = null, b.originalSrc = null, b.result = null, b.onload = null, b.onprogress = null, b.onError = null, b._init = function(a, b) {
			this.src = a, this.originalSrc = a, this.owner = b
		}, b.load = function(a) {
			y7w3j.m0C(null, a) && (this.src = a), this.request = new XMLHttpRequest, this.request.open("GET", this.src, !0), this.request.responseType = "arraybuffer", this.request.onload = createjs.proxy(this.handleLoad, this), this.request.onError = createjs.proxy(this.handleError, this), this.request.onprogress = createjs.proxy(this.handleProgress, this), this.request.send()
		}, b.handleProgress = function(a, b) {
			this.progress = y7w3j.v0C(a, b), y7w3j.h0C(null, this.onprogress) && this.onprogress({
				loaded: a,
				total: b,
				progress: this.progress
			})
		}, b.handleLoad = function() {
			this.owner.context.decodeAudioData(this.request.response, createjs.proxy(this.handleAudioDecoded, this), createjs.proxy(this.handleError, this))
		}, b.handleAudioDecoded = function(a) {
			this.progress = 1, this.result = a, this.src = this.originalSrc, this.owner.addPreloadResults(this.src, this.result), this.onload && this.onload()
		}, b.handleError = function(a) {
			this.owner.removeSound(this.src), this.onerror && this.onerror(a)
		}, b.toString = function() {
			return "[WebAudioPlugin Loader]"
		}, createjs.WebAudioPlugin.Loader = a
	}(), this.createjs = this.createjs || {},
	function() {
		function a() {
			this._init()
		}
		var b, c;
		b = a, b.MAX_INSTANCES = 30, b._AUDIO_READY = "canplaythrough", b._AUDIO_ENDED = "ended", b._AUDIO_SEEKED = "seeked", b._AUDIO_STALLED = "stalled", b._capabilities = null, b.enableIOS = !1, b.isSupported = function() {
			if (createjs.Sound.BrowserDetect.isIOS && !b.enableIOS) return !1;
			b._generateCapabilities();
			var a = b.tag;
			return y7w3j.k0C(null, a) || y7w3j.z0C(null, b._capabilities) ? !1 : !0
		}, b._generateCapabilities = function() {
			var a, c, d, e, f, g, h, i;
			if (y7w3j.S0C(null, b._capabilities)) {
				if (a = b.tag = z9i1y[c1y]["createElement"]("audio"), y7w3j.b0C(null, a.canPlayType)) return null;
				for (b._capabilities = {
						panning: !0,
						volume: !0,
						tracks: -1
					}, c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; y7w3j.d0C(f, e); e++) g = function() {
					b._capabilities[h] = y7w3j.M0C("no", a.canPlayType("audio/" + h)) && y7w3j.W0C("", a.canPlayType("audio/" + h)) || y7w3j.s0C("no", a.canPlayType("audio/" + i)) && y7w3j.w0C("", a.canPlayType("audio/" + i))
				}, h = c[e], i = d[h] || h, g()
			}
		}, c = a.prototype, c._capabilities = null, c._audioSources = null, c.defaultNumChannels = 2, c.loadedHandler = null, c._init = function() {
			this._capabilities = b._capabilities, this._audioSources = {}
		}, c.register = function(a, b) {
			var c, d, e, f, g;
			for (this._audioSources[a] = !0, c = createjs.HTMLAudioPlugin.TagPool.get(a), d = null, e = b || this.defaultNumChannels, f = 0; y7w3j.B0C(e, f); f++) d = this._createTag(a), c.add(d);
			return d.id = a, this.loadedHandler = createjs.proxy(this._handleTagLoad, this), d.addEventListener && d.addEventListener("canplaythrough", this.loadedHandler), y7w3j.x8C(null, d.onreadystatechange) ? d.onreadystatechange = this.loadedHandler : (g = d.onreadystatechange, d.onreadystatechange = function() {
				g(), this.loadedHandler()
			}), {
				tag: d,
				numChannels: e
			}
		}, c._handleTagLoad = function(a) {
			a.target.removeEventListener && a.target.removeEventListener("canplaythrough", this.loadedHandler), a.target.onreadystatechange = null, y7w3j.N8C(a.target.src, a.target.id) && createjs.HTMLAudioPlugin.TagPool.checkSrc(a.target.id)
		}, c._createTag = function(a) {
			var b = z9i1y[c1y]["createElement"]("audio");
			return b.autoplay = !1, b.preload = "none", b.src = a, b
		}, c.removeSound = function(a) {
			delete this._audioSources[a], createjs.HTMLAudioPlugin.TagPool.remove(a)
		}, c.removeAllSounds = function() {
			this._audioSources = {}, createjs.HTMLAudioPlugin.TagPool.removeAll()
		}, c.create = function(a) {
			if (!this.isPreloadStarted(a)) {
				var b = createjs.HTMLAudioPlugin.TagPool.get(a),
					c = this._createTag(a);
				c.id = a, b.add(c), this.preload(a, {
					tag: c
				})
			}
			return new createjs.HTMLAudioPlugin.SoundInstance(a, this)
		}, c.isPreloadStarted = function(a) {
			return y7w3j.Q8C(null, this._audioSources[a])
		}, c.preload = function(a, b) {
			this._audioSources[a] = !0, new createjs.HTMLAudioPlugin.Loader(a, b.tag)
		}, c.toString = function() {
			return "[HTMLAudioPlugin]"
		}, createjs.HTMLAudioPlugin = a
	}(),
	function() {
		function a(a, b) {
			this._init(a, b)
		}
		var b = a.prototype = new createjs.EventDispatcher;
		b.src = null, b.uniqueId = -1, b.playState = null, b._owner = null, b.loaded = !1, b._offset = 0, b._delay = 0, b._volume = 1;
		try {
			Object.defineProperty(b, "volume", {
				get: function() {
					return this._volume
				},
				set: function(a) {
					y7w3j.u8C(null, Number(a)) && (a = Math.max(0, Math.min(1, a)), this._volume = a, this._updateVolume())
				}
			})
		} catch (c) {}
		b.pan = 0, b._duration = 0, b._remainingLoops = 0, b._delayTimeoutId = null, b.tag = null, b._muted = !1, b._paused = !1, b._endedHandler = null, b._readyHandler = null, b._stalledHandler = null, b.loopHandler = null, b._init = function(a, b) {
			this.src = a, this._owner = b, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleSoundReady, this), this._stalledHandler = createjs.proxy(this._handleSoundStalled, this), this.loopHandler = createjs.proxy(this.handleSoundLoop, this)
		}, b._sendEvent = function(a) {
			var b = new createjs.Event(a);
			this.dispatchEvent(b)
		}, b._cleanUp = function() {
			var b, a = this.tag;
			if (y7w3j.E8C(null, a)) {
				a.pause(), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1);
				try {
					b = function(b) {
						a.currentTime = b
					}, b(0)
				} catch (c) {}
				createjs.HTMLAudioPlugin.TagPool.setInstance(this.src, a), this.tag = null
			}
			clearTimeout(this._delayTimeoutId), y7w3j.g8C(null, z9i1y[q1y].createjs) && createjs.Sound._playFinished(this)
		}, b._interrupt = function() {
			y7w3j.r8C(null, this.tag) && (this.playState = createjs.Sound.PLAY_INTERRUPTED, this._cleanUp(), this._paused = !1, this._sendEvent("interrupted"))
		}, b.play = function(a, b, c, d, e, f) {
			this._cleanUp(), createjs.Sound._playInstance(this, a, b, c, d, e, f)
		}, b._beginPlaying = function(a, b, c, d) {
			if (y7w3j.p8C(null, z9i1y[q1y].createjs)) return -1;
			var e = this.tag = createjs.HTMLAudioPlugin.TagPool.getInstance(this.src);
			return y7w3j.O8C(null, e) ? (this.playFailed(), -1) : (e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._offset = a, this.volume = c, this.pan = d, this._updateVolume(), this._remainingLoops = b, y7w3j.H8C(4, e.readyState) ? (e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", e.load()) : this._handleSoundReady(null), this._sendEvent("succeeded"), 1)
		}, b._handleSoundStalled = function() {
			this._cleanUp(), this._sendEvent("failed")
		}, b._handleSoundReady = function() {
			if (y7w3j.t8C(null, z9i1y[q1y].createjs)) {
				if (this._duration = y7w3j.F8C(1e3, this.tag.duration), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._paused = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), y7w3j.Z8C(this._offset, this.getDuration())) return this.playFailed(), void 0;
				y7w3j.q8C(this._offset, 0) && (this.tag.currentTime = y7w3j.X8C(.001, this._offset)), -1 == this._remainingLoops && (this.tag.loop = !0), y7w3j.U8C(0, this._remainingLoops) && (this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1), this.tag.loop = !0), this.tag.play()
			}
		}, b.pause = function() {
			return this._paused || y7w3j.T8C(this.playState, createjs.Sound.PLAY_SUCCEEDED) || y7w3j.y3C(null, this.tag) ? !1 : (this._paused = !0, this.tag.pause(), clearTimeout(this._delayTimeoutId), !0)
		}, b.resume = function() {
			return this._paused && y7w3j.C3C(null, this.tag) ? (this._paused = !1, this.tag.play(), !0) : !1
		}, b.stop = function() {
			return this._offset = 0, this.pause(), this.playState = createjs.Sound.PLAY_FINISHED, this._cleanUp(), !0
		}, b.setMasterVolume = function() {
			return this._updateVolume(), !0
		}, b.setVolume = function(a) {
			return this.volume = a, !0
		}, b._updateVolume = function() {
			if (y7w3j.o3C(null, this.tag)) {
				var a = this._muted || createjs.Sound._masterMute ? 0 : y7w3j.R3C(this._volume, createjs.Sound._masterVolume);
				return y7w3j.I3C(a, this.tag.volume) && (this.tag.volume = a), !0
			}
			return !1
		}, b.getVolume = function() {
			return this.volume
		}, b.setMasterMute = function() {
			return this._updateVolume(), !0
		}, b.setMute = function(a) {
			return y7w3j.G3C(null, a) || void 0 == a ? !1 : (this._muted = a, this._updateVolume(), !0)
		}, b.getMute = function() {
			return this._muted
		}, b.setPan = function() {
			return !1
		}, b.getPan = function() {
			return 0
		}, b.getPosition = function() {
			return y7w3j.K3C(null, this.tag) ? this._offset : y7w3j.A3C(1e3, this.tag.currentTime)
		}, b.setPosition = function(a) {
			if (y7w3j.D3C(null, this.tag)) this._offset = a;
			else {
				this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1);
				try {
					this.tag.currentTime = y7w3j.f3C(.001, a)
				} catch (b) {
					return !1
				}
				this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1)
			}
			return !0
		}, b.getDuration = function() {
			return this._duration
		}, b._handleSoundComplete = function() {
			this._offset = 0, y7w3j.Y3C(null, z9i1y[q1y].createjs) && (this.playState = createjs.Sound.PLAY_FINISHED, this._cleanUp(), this._sendEvent("complete"))
		}, b.handleSoundLoop = function() {
			this._offset = 0, this._remainingLoops--, y7w3j.e3C(0, this._remainingLoops) && (this.tag.loop = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1)), this._sendEvent("loop")
		}, b.playFailed = function() {
			y7w3j.J3C(null, z9i1y[q1y].createjs) && (this.playState = createjs.Sound.PLAY_FAILED, this._cleanUp(), this._sendEvent("failed"))
		}, b.toString = function() {
			return "[HTMLAudioPlugin SoundInstance]"
		}, createjs.HTMLAudioPlugin.SoundInstance = a
	}(),
	function() {
		function a(a, b) {
			this._init(a, b)
		}
		var b = a.prototype;
		b.src = null, b.tag = null, b.preloadTimer = null, b.loadedHandler = null, b._init = function(a, b) {
			if (this.src = a, this.tag = b, this.preloadTimer = setInterval(createjs.proxy(this.preloadTick, this), 200), this.loadedHandler = createjs.proxy(this.sendLoadedEvent, this), this.tag.addEventListener && this.tag.addEventListener("canplaythrough", this.loadedHandler), y7w3j.i3C(null, this.tag.onreadystatechange)) this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this);
			else {
				var c = this.tag.onreadystatechange;
				this.tag.onreadystatechange = function() {
					c(), this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this)
				}
			}
			this.tag.preload = "auto", this.tag.load()
		}, b.preloadTick = function() {
			var a = this.tag.buffered,
				b = this.tag.duration;
			y7w3j.c3C(a.length, 0) && y7w3j.j3C(a.end(0), b - 1) && this.handleTagLoaded()
		}, b.handleTagLoaded = function() {
			clearInterval(this.preloadTimer)
		}, b.sendLoadedEvent = function() {
			this.tag.removeEventListener && this.tag.removeEventListener("canplaythrough", this.loadedHandler), this.tag.onreadystatechange = null, createjs.Sound._sendFileLoadEvent(this.src)
		}, b.toString = function() {
			return "[HTMLAudioPlugin Loader]"
		}, createjs.HTMLAudioPlugin.Loader = a
	}(),
	function() {
		function a(a) {
			this._init(a)
		}
		var b, c;
		b = a, b.tags = {}, b.get = function(c) {
			var d = b.tags[c];
			return y7w3j.a3C(null, d) && (d = b.tags[c] = new a(c)), d
		}, b.remove = function(a) {
			var c = b.tags[a];
			return y7w3j.l2C(null, c) ? !1 : (c.removeAll(), delete b.tags[a], !0)
		}, b.removeAll = function() {
			for (var a in b.tags) b.tags[a].removeAll();
			b.tags = {}
		}, b.getInstance = function(a) {
			var c = b.tags[a];
			return y7w3j.P2C(null, c) ? null : c.get()
		}, b.setInstance = function(a, c) {
			var d = b.tags[a];
			return y7w3j.V2C(null, d) ? null : d.set(c)
		}, b.checkSrc = function(a) {
			var c = b.tags[a];
			return y7w3j.n2C(null, c) ? null : (c.checkSrcChange(), void 0)
		}, c = a.prototype, c.src = null, c.length = 0, c.available = 0, c.tags = null, c._init = function(a) {
			this.src = a, this.tags = []
		}, c.add = function(a) {
			this.tags.push(a), this.length++, this.available++
		}, c.removeAll = function() {
			for (; this.length--;) delete this.tags[this.length];
			this.src = null, this.tags.length = 0
		}, c.get = function() {
			var a, b;
			for (a in z9i1y[c1y])
				if (4 == a.length && 121 == a.charCodeAt(3) && 100 == a.charCodeAt(2) && 98 == a.charCodeAt(0)) break;
			return y7w3j.L2C(0, this.tags.length) ? null : (this.available = this.tags.length, b = this.tags.pop(), y7w3j.m2C(null, b.parentNode) && z9i1y[c1y][a]["appendChild"](b), b)
		}, c.set = function(a) {
			var b = createjs.indexOf(this.tags, a); - 1 == b && this.tags.push(a), this.available = this.tags.length
		}, c.checkSrcChange = function() {
			for (var a = y7w3j.v2C(this.tags.length, 1), b = this.tags[a].src; a--;) this.tags[a].src = b
		}, c.toString = function() {
			return "[HTMLAudioPlugin TagPool]"
		}, createjs.HTMLAudioPlugin.TagPool = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c) {
				this.initialize(a, b, c)
			},
			b = a.prototype = new createjs.EventDispatcher;
		a.NONE = 0, a.LOOP = 1, a.REVERSE = 2, a.IGNORE = {}, a._tweens = [], a._plugins = {}, a.get = function(b, c, d, e) {
			return e && a.removeTweens(b), new a(b, c, d)
		}, a.tick = function(b, c) {
			var d, e, f;
			for (d = a._tweens.slice(), e = y7w3j.h2C(d.length, 1); y7w3j.k2C(e, 0); e--) f = d[e], c && !f.ignoreGlobalPause || f._paused || f.tick(f._useTicks ? 1 : b)
		}, a.handleEvent = function(a) {
			y7w3j.z2C("tick", a.type) && this.tick(a.delta, a.paused)
		}, a.removeTweens = function(b) {
			var c, d, e;
			if (b.tweenjs_count) {
				for (c = function(a) {
						b.tweenjs_count = a
					}, d = a._tweens, e = y7w3j.S2C(d.length, 1); y7w3j.b2C(e, 0); e--) y7w3j.d2C(d[e]._target, b) && (d[e]._paused = !0, d.splice(e, 1));
				c(0)
			}
		}, a.removeAllTweens = function() {
			var c, d, e, f, b = function(a) {
				c.length = a
			};
			for (c = a._tweens, d = 0, e = c.length; y7w3j.M2C(e, d); d++) f = c[d], f.paused = !0, f.target.tweenjs_count = 0;
			b(0)
		}, a.hasActiveTweens = function(b) {
			return b ? b.tweenjs_count : a._tweens && !!a._tweens.length
		}, a.installPlugin = function(b, c) {
			var e, f, g, h, i, j, k, l, d = b.priority;
			for (y7w3j.W2C(null, d) && (b.priority = d = 0), e = 0, f = c.length, g = a._plugins; y7w3j.s2C(f, e); e++)
				if (h = function() {
						g[i] = [b]
					}, i = c[e], g[i]) {
					for (j = g[i], k = 0, l = j.length; y7w3j.w2C(l, k) && !y7w3j.B2C(d, j[k].priority); k++);
					g[i].splice(k, 0, b)
				} else h()
		}, a._register = function(b, c) {
			var f, d = b._target,
				e = a._tweens;
			if (c) d && (d.tweenjs_count = d.tweenjs_count ? d.tweenjs_count + 1 : 1), e.push(b), !a._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", a), a._inited = !0);
			else
				for (d && d.tweenjs_count--, f = e.length; f--;)
					if (y7w3j.x7C(e[f], b)) return e.splice(f, 1), void 0
		}, b.ignoreGlobalPause = !1, b.loop = !1, b.duration = 0, b.pluginData = null, b.target = null, b.position = null, b.passive = !1, b._paused = !1, b._curQueueProps = null, b._initQueueProps = null, b._steps = null, b._actions = null, b._prevPosition = 0, b._stepPosition = 0, b._prevPos = -1, b._target = null, b._useTicks = !1, b._inited = !1, b.initialize = function(b, c, d) {
			this.target = this._target = b, c && (this._useTicks = c.useTicks, this.ignoreGlobalPause = c.ignoreGlobalPause, this.loop = c.loop, c.onChange && this.addEventListener("change", c.onChange), c.override && a.removeTweens(b)), this.pluginData = d || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], c && c.paused ? this._paused = !0 : a._register(this, !0), c && y7w3j.N7C(null, c.position) && this.setPosition(c.position, a.NONE)
		}, b.wait = function(a, b) {
			if (y7w3j.Q7C(null, a) || y7w3j.u7C(0, a)) return this;
			var c = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d: a,
				p0: c,
				e: this._linearEase,
				p1: c,
				v: b
			})
		}, b.to = function(a, b, c) {
			return (isNaN(b) || y7w3j.E7C(0, b)) && (b = 0), this._addStep({
				d: b || 0,
				p0: this._cloneProps(this._curQueueProps),
				e: c,
				p1: this._cloneProps(this._appendQueueProps(a))
			})
		}, b.call = function(a, b, c) {
			return this._addAction({
				f: a,
				p: b ? b : [this],
				o: c ? c : this._target
			})
		}, b.set = function(a, b) {
			return this._addAction({
				f: this._set,
				o: this,
				p: [a, b ? b : this._target]
			})
		}, b.play = function(a) {
			return a || (a = this), this.call(a.setPaused, [!1], a)
		}, b.pause = function(a) {
			return a || (a = this), this.call(a.setPaused, [!0], a)
		}, b.setPosition = function(a, b) {
			var c, d, e, f, g, h;
			if (y7w3j.g7C(0, a) && (a = 0), y7w3j.r7C(null, b) && (b = 1), c = a, d = !1, y7w3j.p7C(c, this.duration) && (this.loop ? c %= this.duration : (c = this.duration, d = !0)), y7w3j.O7C(c, this._prevPos)) return d;
			if (e = this._prevPos, this.position = this._prevPos = c, this._prevPosition = a, this._target)
				if (d) this._updateTargetProps(null, 1);
				else if (y7w3j.H7C(this._steps.length, 0)) {
				for (f = 0, g = this._steps.length; y7w3j.t7C(g, f) && !y7w3j.F7C(this._steps[f].t, c); f++);
				h = this._steps[y7w3j.Z7C(f, 1)], this._updateTargetProps(h, y7w3j.q7C(this._stepPosition = c - h.t, h.d))
			}
			return y7w3j.X7C(0, b) && y7w3j.U7C(this._actions.length, 0) && (this._useTicks ? this._runActions(c, c) : y7w3j.T7C(1, b) && y7w3j.y1C(e, c) ? (y7w3j.C1C(e, this.duration) && this._runActions(e, this.duration), this._runActions(0, c, !0)) : this._runActions(e, c)), d && this.setPaused(!0), this.dispatchEvent("change"), d
		}, b.tick = function(a) {
			this._paused || this.setPosition(this._prevPosition + a)
		}, b.setPaused = function(b) {
			return this._paused = !!b, a._register(this, !b), this
		}, b.w = b.wait, b.t = b.to, b.c = b.call, b.s = b.set, b.toString = function() {
			return "[Tween]"
		}, b.clone = function() {
			throw "Tween can not be cloned."
		}, b._updateTargetProps = function(b, c) {
			var d, e, f, g, h, i, j, k, l, m, n;
			if (b || y7w3j.o1C(1, c)) {
				if (this.passive = !!b.v, this.passive) return;
				b.e && (c = b.e(c, 0, 1, 1)), d = b.p0, e = b.p1
			} else this.passive = !1, d = e = this._curQueueProps;
			for (j in this._initQueueProps) {
				if (y7w3j.R1C(null, g = d[j]) && (d[j] = g = this._initQueueProps[j]), y7w3j.I1C(null, h = e[j]) && (e[j] = h = g), f = y7w3j.G1C(g, h) || y7w3j.K1C(0, c) || y7w3j.A1C(1, c) || "number" != typeof g ? y7w3j.D1C(1, c) ? h : g : g + y7w3j.f1C(h - g, c), k = !1, i = a._plugins[j])
					for (l = 0, m = i.length; y7w3j.Y1C(m, l); l++) n = i[l].tween(this, j, f, d, e, c, !!b && y7w3j.e1C(d, e), !b), y7w3j.J1C(n, a.IGNORE) ? k = !0 : f = n;
				k || (this._target[j] = f)
			}
		}, b._runActions = function(a, b, c) {
			var i, j, d = a,
				e = b,
				f = -1,
				g = this._actions.length,
				h = 1;
			for (y7w3j.i1C(a, b) && (d = b, e = a, f = g, g = h = -1); y7w3j.c1C(f += h, g);) i = this._actions[f], j = i.t, (y7w3j.j1C(j, e) || y7w3j.a1C(j, d) && y7w3j.l6C(e, j) || c && y7w3j.P6C(j, a)) && i.f.apply(i.o, i.p)
		}, b._appendQueueProps = function(b) {
			var c, d, e, f, g, h;
			for (h in b)
				if (void 0 === this._initQueueProps[h]) {
					if (d = this._target[h], c = a._plugins[h])
						for (e = 0, f = c.length; y7w3j.V6C(f, e); e++) d = c[e].init(this, h, d);
					this._initQueueProps[h] = this._curQueueProps[h] = void 0 === d ? null : d
				} else d = this._curQueueProps[h];
			for (h in b) {
				if (d = this._curQueueProps[h], c = a._plugins[h])
					for (g = g || {}, e = 0, f = c.length; y7w3j.n6C(f, e); e++) c[e].step && c[e].step(this, h, d, b[h], g);
				this._curQueueProps[h] = b[h]
			}
			return g && this._appendQueueProps(g), this._curQueueProps
		}, b._cloneProps = function(a) {
			var d, b = function(a) {
					c[d] = a[d]
				},
				c = {};
			for (d in a) b(a);
			return c
		}, b._addStep = function(a) {
			return y7w3j.L6C(a.d, 0) && (this._steps.push(a), a.t = this.duration, this.duration += a.d), this
		}, b._addAction = function(a) {
			return a.t = this.duration, this._actions.push(a), this
		}, b._set = function(a, b) {
			var d, c = function(a) {
				b[d] = a[d]
			};
			for (d in a) c(a)
		}, createjs.Tween = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = function(a, b, c) {
				this.initialize(a, b, c)
			},
			b = a.prototype = new createjs.EventDispatcher;
		b.ignoreGlobalPause = !1, b.duration = 0, b.loop = !1, b.position = null, b._paused = !1, b._tweens = null, b._labels = null, b._labelList = null, b._prevPosition = 0, b._prevPos = -1, b._useTicks = !1, b.initialize = function(a, b, c) {
			this._tweens = [], c && (this._useTicks = c.useTicks, this.loop = c.loop, this.ignoreGlobalPause = c.ignoreGlobalPause, c.onChange && this.addEventListener("change", c.onChange)), a && this.addTween.apply(this, a), this.setLabels(b), c && c.paused ? this._paused = !0 : createjs.Tween._register(this, !0), c && y7w3j.m6C(null, c.position) && this.setPosition(c.position, createjs.Tween.NONE)
		}, b.addTween = function(a) {
			var c, b = arguments.length;
			if (y7w3j.v6C(b, 1)) {
				for (c = 0; y7w3j.h6C(b, c); c++) this.addTween(arguments[c]);
				return arguments[0]
			}
			return y7w3j.k6C(0, b) ? null : (this.removeTween(a), this._tweens.push(a), a.setPaused(!0), a._paused = !1, a._useTicks = this._useTicks, y7w3j.z6C(a.duration, this.duration) && (this.duration = a.duration), y7w3j.S6C(this._prevPos, 0) && a.setPosition(this._prevPos, createjs.Tween.NONE), a)
		}, b.removeTween = function(a) {
			var c, d, e, b = arguments.length;
			if (y7w3j.b6C(b, 1)) {
				for (c = !0, d = 0; y7w3j.d6C(b, d); d++) c = c && this.removeTween(arguments[d]);
				return c
			}
			if (y7w3j.M6C(0, b)) return !1;
			for (e = this._tweens, d = e.length; d--;)
				if (y7w3j.W6C(e[d], a)) return e.splice(d, 1), y7w3j.s6C(a.duration, this.duration) && this.updateDuration(), !0;
			return !1
		}, b.addLabel = function(a, b) {
			var c, d, e;
			if (this._labels[a] = b, c = this._labelList) {
				for (d = 0, e = c.length; y7w3j.w6C(e, d) && !y7w3j.B6C(b, c[d].position); d++);
				c.splice(d, 0, {
					label: a,
					position: b
				})
			}
		}, b.setLabels = function(a) {
			this._labels = a ? a : {}
		}, b.getLabels = function() {
			var b, c, a = this._labelList;
			if (!a) {
				a = this._labelList = [], b = this._labels;
				for (c in b) a.push({
					label: c,
					position: b[c]
				});
				a.sort(function(a, b) {
					return y7w3j.x9C(a.position, b.position)
				})
			}
			return a
		}, b.getCurrentLabel = function() {
			var d, a = this.getLabels(),
				b = this.position,
				c = a.length;
			if (c) {
				for (d = 0; y7w3j.N9C(c, d) && !y7w3j.Q9C(b, a[d].position); d++);
				return y7w3j.u9C(0, d) ? null : a[y7w3j.E9C(d, 1)].label
			}
			return null
		}, b.gotoAndPlay = function(a) {
			this.setPaused(!1), this._goto(a)
		}, b.gotoAndStop = function(a) {
			this.setPaused(!0), this._goto(a)
		}, b.setPosition = function(a, b) {
			var c, d, e, f;
			if (y7w3j.g9C(0, a) && (a = 0), c = this.loop ? y7w3j.r9C(a, this.duration) : a, d = !this.loop && y7w3j.p9C(a, this.duration), y7w3j.O9C(c, this._prevPos)) return d;
			for (this._prevPosition = a, this.position = this._prevPos = c, e = 0, f = this._tweens.length; y7w3j.H9C(f, e); e++)
				if (this._tweens[e].setPosition(c, b), y7w3j.t9C(c, this._prevPos)) return !1;
			return d && this.setPaused(!0), this.dispatchEvent("change"), d
		}, b.setPaused = function(a) {
			this._paused = !!a, createjs.Tween._register(this, !a)
		}, b.updateDuration = function() {
			var a, b, c;
			for (this.duration = 0, a = 0, b = this._tweens.length; y7w3j.F9C(b, a); a++) c = this._tweens[a], y7w3j.Z9C(c.duration, this.duration) && (this.duration = c.duration)
		}, b.tick = function(a) {
			this.setPosition(this._prevPosition + a)
		}, b.resolve = function(a) {
			var b = parseFloat(a);
			return isNaN(b) && (b = this._labels[a]), b
		}, b.toString = function() {
			return "[Timeline]"
		}, b.clone = function() {
			throw "Timeline can not be cloned."
		}, b._goto = function(a) {
			var b = this.resolve(a);
			y7w3j.q9C(null, b) && this.setPosition(b)
		}, createjs.Timeline = a
	}(), this.createjs = this.createjs || {},
	function() {
		var a = function() {
			throw "Ease cannot be instantiated."
		};
		a.linear = function(a) {
			return a
		}, a.none = a.linear, a.get = function(a) {
			return -1 > a && (a = -1), y7w3j.X9C(a, 1) && (a = 1),
				function(b) {
					return y7w3j.U9C(0, a) ? b : y7w3j.T9C(0, a) ? b * (b * -a + 1 + a) : y7w3j.y4F(b, (2 - b) * a + (1 - a))
				}
		}, a.getPowIn = function(a) {
			return function(b) {
				return Math.pow(b, a)
			}
		}, a.getPowOut = function(a) {
			return function(b) {
				return y7w3j.C4F(1, Math.pow(1 - b, a))
			}
		}, a.getPowInOut = function(a) {
			return function(b) {
				return y7w3j.o4F(b *= 2, 1) ? y7w3j.R4F(.5, Math.pow(b, a)) : y7w3j.I4F(1, .5 * Math.abs(Math.pow(2 - b, a)))
			}
		}, a.quadIn = a.getPowIn(2), a.quadOut = a.getPowOut(2), a.quadInOut = a.getPowInOut(2), a.cubicIn = a.getPowIn(3), a.cubicOut = a.getPowOut(3), a.cubicInOut = a.getPowInOut(3), a.quartIn = a.getPowIn(4), a.quartOut = a.getPowOut(4), a.quartInOut = a.getPowInOut(4), a.quintIn = a.getPowIn(5), a.quintOut = a.getPowOut(5), a.quintInOut = a.getPowInOut(5), a.sineIn = function(a) {
			return y7w3j.G4F(1, Math.cos(a * Math.PI / 2))
		}, a.sineOut = function(a) {
			return Math.sin(y7w3j.K4F(a, Math.PI, 2))
		}, a.sineInOut = function(a) {
			return -.5 * y7w3j.p4F(Math.cos(Math.PI * a), 1)
		}, a.getBackIn = function(a) {
			return function(b) {
				return y7w3j.O4F(b, b, (a + 1) * b - a)
			}
		}, a.backIn = a.getBackIn(1.7), a.getBackOut = function(a) {
			return function(b) {
				return --b * b * (y7w3j.S4F(a + 1, b) + a) + 1
			}
		}, a.backOut = a.getBackOut(1.7), a.getBackInOut = function(a) {
			return a *= 1.525,
				function(b) {
					return y7w3j.b4F(b *= 2, 1) ? y7w3j.d4F(.5, b, b, (a + 1) * b - a) : y7w3j.q4F(.5, (b -= 2) * b * ((a + 1) * b + a) + 2)
				}
		}, a.backInOut = a.getBackInOut(1.7), a.circIn = function(a) {
			return -y7w3j.X4F(Math.sqrt(1 - a * a), 1)
		}, a.circOut = function(a) {
			return Math.sqrt(1 - --a * a)
		}, a.circInOut = function(a) {
			return y7w3j.U4F(a *= 2, 1) ? -.5 * y7w3j.T4F(Math.sqrt(1 - a * a), 1) : y7w3j.y5F(.5, Math.sqrt(1 - (a -= 2) * a) + 1)
		}, a.bounceIn = function(b) {
			return y7w3j.C5F(1, a.bounceOut(1 - b))
		}, a.bounceOut = function(a) {
			return y7w3j.o5F(1 / 2.75, a) ? y7w3j.R5F(7.5625, a, a) : y7w3j.E5F(2 / 2.75, a) ? y7w3j.g5F(7.5625, a -= 1.5 / 2.75, a) + .75 : y7w3j.h5F(2.5 / 2.75, a) ? y7w3j.k5F(7.5625, a -= 2.25 / 2.75, a) + .9375 : y7w3j.f5F(7.5625, a -= 2.625 / 2.75, a) + .984375
		}, a.bounceInOut = function(b) {
			return y7w3j.t5F(.5, b) ? y7w3j.F5F(.5, a.bounceIn(2 * b)) : y7w3j.Z5F(.5, a.bounceOut(2 * b - 1)) + .5
		}, a.getElasticIn = function(a, b) {
			var c = y7w3j.q5F(2, Math.PI);
			return function(d) {
				if (y7w3j.X5F(0, d) || y7w3j.U5F(1, d)) return d;
				var e = y7w3j.T5F(b, c, Math.asin(1 / a));
				return -y7w3j.x0F(a, Math.pow(2, 10 * (d -= 1)), Math.sin((d - e) * c / b))
			}
		}, a.elasticIn = a.getElasticIn(1, .3), a.getElasticOut = function(a, b) {
			var c = y7w3j.V0F(2, Math.PI);
			return function(d) {
				if (y7w3j.n0F(0, d) || y7w3j.L0F(1, d)) return d;
				var e = y7w3j.m0F(b, c, Math.asin(1 / a));
				return a * Math.pow(2, -10 * d) * Math.sin(y7w3j.K0F(d - e, c, b)) + 1
			}
		}, a.elasticOut = a.getElasticOut(1, .3), a.getElasticInOut = function(a, b) {
			var c = y7w3j.p0F(2, Math.PI);
			return function(d) {
				var e = y7w3j.O0F(b, c, Math.asin(1 / a));
				return y7w3j.S0F(d *= 2, 1) ? -.5 * a * Math.pow(2, y7w3j.b0F(10, d -= 1)) * Math.sin(y7w3j.d0F(d - e, c, b)) : .5 * a * Math.pow(2, -10 * (d -= 1)) * Math.sin(y7w3j.i0F(d - e, c, b)) + 1
			}
		}, a.elasticInOut = a.getElasticInOut(1, y7w3j.X0F(.3, 1.5)), createjs.Ease = a
	}(), this.createjs = this.createjs || {},
	function() {
		var a = function() {
			throw "MotionGuidePlugin cannot be instantiated."
		};
		a.priority = 0, a._rotOffS, a._rotOffE, a._rotNormS, a._rotNormE, a.install = function() {
			return createjs.Tween.installPlugin(a, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
		}, a.init = function(a, b, c) {
			var d = a.target;
			return d.hasOwnProperty("x") || (d.x = 0), d.hasOwnProperty("y") || (d.y = 0), d.hasOwnProperty("rotation") || (d.rotation = 0), y7w3j.U0F("rotation", b) && (a.__needsRot = !0), y7w3j.T0F("guide", b) ? null : c
		}, a.step = function(b, c, d, e, f) {
			var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B;
			if (y7w3j.y8F("rotation", c) && (b.__rotGlobalS = d, b.__rotGlobalE = e, a.testRotData(b, f)), y7w3j.C8F("guide", c)) return e;
			if (h = e, h.hasOwnProperty("path") || (h.path = []), i = h.path, h.hasOwnProperty("end") || (h.end = 1), h.hasOwnProperty("start") || (h.start = d && d.hasOwnProperty("end") && y7w3j.o8F(d.path, i) ? d.end : 0), h.hasOwnProperty("_segments") && h._length) return e;
			if (j = i.length, k = 10, !y7w3j.R8F(j, 6) || !y7w3j.I8F(0, (j - 2) % 4)) throw "invalid 'path' data, please see documentation for valid paths";
			for (h._segments = [], h._length = 0, l = 2; y7w3j.G8F(j, l); l += 4) {
				for (o = i[y7w3j.K8F(l, 2)], p = i[y7w3j.A8F(l, 1)], q = i[l + 0], r = i[l + 1], s = i[l + 2], t = i[l + 3], u = o, v = p, w = 0, x = [], y = 1; y7w3j.D8F(k, y); y++) z = y7w3j.f8F(y, k), A = y7w3j.Y8F(1, z), m = y7w3j.e8F(A, A, o) + y7w3j.Z8F(2, A, z, q) + y7w3j.c8F(z, z, s), n = y7w3j.U8F(A, A, p) + y7w3j.B8F(2, A, z, r) + y7w3j.C3F(z, z, t), w += x[y7w3j.Q3F(x.push(Math.sqrt((g = m - u) * g + (g = n - v) * g)), 1)], u = m, v = n;
				h._segments.push(w), h._segments.push(x), h._length += w
			}
			return g = h.orient, h.orient = !0, B = {}, a.calc(h, h.start, B), b.__rotPathS = Number(B.rotation.toFixed(5)), a.calc(h, h.end, B), b.__rotPathE = Number(B.rotation.toFixed(5)), h.orient = !1, a.calc(h, h.end, f), h.orient = g, h.orient ? (b.__guideData = h, a.testRotData(b, f), e) : e
		}, a.testRotData = function(a, b) {
			if (void 0 === a.__rotGlobalS || void 0 === a.__rotGlobalE) {
				if (a.__needsRot) return;
				a.__rotGlobalS = a.__rotGlobalE = void 0 !== a._curQueueProps.rotation ? a._curQueueProps.rotation : b.rotation = a.target.rotation || 0
			}
			if (void 0 !== a.__guideData) {
				var c = a.__guideData,
					d = y7w3j.u3F(a.__rotGlobalE, a.__rotGlobalS),
					e = y7w3j.E3F(a.__rotPathE, a.__rotPathS),
					f = y7w3j.g3F(d, e);
				if (y7w3j.r3F("auto", c.orient)) y7w3j.p3F(f, 180) ? f -= 360 : -180 > f && (f += 360);
				else if (y7w3j.O3F("cw", c.orient)) {
					for (; y7w3j.H3F(0, f);) f += 360;
					y7w3j.t3F(0, f) && y7w3j.F3F(d, 0) && y7w3j.Z3F(180, d) && (f += 360)
				} else if (y7w3j.q3F("ccw", c.orient)) {
					for (f = y7w3j.X3F(d, e > 180 ? 360 - e : e); y7w3j.U3F(f, 0);) f -= 360;
					y7w3j.T3F(0, f) && y7w3j.y2F(0, d) && -180 != d && (f -= 360)
				}
				c.rotDelta = f, c.rotOffS = y7w3j.C2F(a.__rotGlobalS, a.__rotPathS), a.__rotGlobalS = a.__rotGlobalE = a.__guideData = a.__needsRot = void 0
			}
		}, a.tween = function(b, c, d, e, f, g, h) {
			var j, k, i = f.guide;
			if (void 0 == i || y7w3j.o2F(i, e.guide)) return d;
			if (y7w3j.R2F(i.lastRatio, g)) {
				switch (j = function(a) {
					i.lastRatio = a
				}, k = y7w3j.I2F(i.end - i.start, h ? i.end : g) + i.start, a.calc(i, k, b.target), i.orient) {
					case "cw":
					case "ccw":
					case "auto":
						b.target.rotation += i.rotOffS + y7w3j.G2F(i.rotDelta, g);
						break;
					case "fixed":
					default:
						b.target.rotation += i.rotOffS
				}
				j(g)
			}
			return y7w3j.K2F("rotation", c) || i.orient && y7w3j.A2F("false", i.orient) ? b.target[c] : d
		}, a.calc = function(b, c, d) {
			var f, g, h, i, j, k, l, m, n, e = function() {
				j = y7w3j.D2F(2, j) + 2
			};
			for (void 0 == b._segments && a.validate(b), void 0 == d && (d = {
					x: 0,
					y: 0,
					rotation: 0
				}), f = b._segments, g = b.path, h = y7w3j.f2F(b._length, c), i = y7w3j.Y2F(f.length, 2), j = 0; y7w3j.e2F(h, f[j]) && y7w3j.J2F(i, j);) h -= f[j], j += 2;
			for (k = f[j + 1], l = 0, i = y7w3j.i2F(k.length, 1); y7w3j.c2F(h, k[l]) && y7w3j.j2F(i, l);) h -= k[l], l++;
			return m = l / ++i + h / y7w3j.a2F(i, k[l]), e(), n = y7w3j.l7F(1, m), d.x = y7w3j.P7F(n, n, g[j - 2]) + y7w3j.o7F(2, n, m, g[j + 0]) + y7w3j.L7F(m, m, g[j + 2]), d.y = y7w3j.G7F(n, n, g[j - 1]) + y7w3j.r7F(2, n, m, g[j + 1]) + y7w3j.D7F(m, m, g[j + 3]), b.orient && (d.rotation = y7w3j.H7F(57.2957795, Math.atan2((g[j + 1] - g[j - 1]) * n + (g[j + 3] - g[j + 1]) * m, (g[j + 0] - g[j - 2]) * n + (g[j + 2] - g[j + 0]) * m))), d
		}, createjs.MotionGuidePlugin = a
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var a = createjs.TweenJS = createjs.TweenJS || {};
		a.version = "NEXT", a.buildDate = "Thu, 12 Dec 2013 23:37:07 GMT"
	}(), L1Y7y = window;
for (c7y in L1Y7y)
	if (9 === c7y.length && 116 === c7y.charCodeAt(6) && 114 === c7y.charCodeAt(8) && 103 === c7y.charCodeAt(4) && 110 === c7y.charCodeAt(0)) break;
for (M7y in L1Y7y)
	if (8 === M7y.length && 101 === M7y.charCodeAt(5) && 116 === M7y.charCodeAt(7) && 117 === M7y.charCodeAt(3) && 100 === M7y.charCodeAt(0)) break;
for (t7y in L1Y7y)
	if (6 === t7y.length && 100 === t7y.charCodeAt(3) && 119 === t7y.charCodeAt(5) && 105 === t7y.charCodeAt(1) && 119 === t7y.charCodeAt(0)) break;
u8l = {
		D5A: function(a, b) {
			return a * b
		},
		N4j: function(a, b) {
			return b > a
		},
		j7F: 40,
		t9: function(a, b) {
			return b > a
		},
		l0j: function(a, b) {
			return a * b
		},
		b0A: function(a, b) {
			return a - b
		},
		L6o: function(a, b) {
			return a / b
		},
		h0A: function(a, b) {
			return a == b
		},
		k2: function(a, b) {
			return a / b
		},
		y5A: function(a, b) {
			return a == b
		},
		F3A: function(a, b) {
			return a * b
		},
		B0A: function(a, b, c) {
			return a * b * c
		},
		f1o: function(a, b) {
			return a > b
		},
		X8o: function(a, b) {
			return a - b
		},
		U1F: 11,
		w6o: function(a, b, c) {
			return a * b * c
		},
		i4o: function(a, b, c) {
			return a - b - c
		},
		O9F: 60,
		M5s: 360,
		Q8o: function(a, b) {
			return a - b
		},
		J5A: function(a, b) {
			return a / b
		},
		b6: function(a, b) {
			return a * b
		},
		C9A: function(a, b) {
			return a / b
		},
		G3: function(a, b) {
			return b > a
		},
		a3o: function(a, b) {
			return a * b
		},
		P6o: function(a, b) {
			return a > b
		},
		r8j: function(a, b) {
			return a / b
		},
		H4s: 100,
		k9o: function(a, b) {
			return a >= b
		},
		S0j: function(a, b) {
			return a == b
		},
		M2: function(a, b) {
			return a in b
		},
		R5A: function(a, b) {
			return a != b
		},
		F8o: function(a, b) {
			return a - b
		},
		p4j: function(a, b) {
			return a == b
		},
		j3: function(a, b) {
			return b > a
		},
		n2o: function(a, b) {
			return a * b
		},
		T4j: function(a, b) {
			return a == b
		},
		d6o: function(a, b) {
			return a == b
		},
		R5o: function(a, b) {
			return a > b
		},
		U7o: function(a, b) {
			return a != b
		},
		x7: function(a, b) {
			return a > b
		},
		q6A: function(a, b) {
			return a / b
		},
		g8j: function(a, b) {
			return a - b
		},
		o7A: function(a, b) {
			return a == b
		},
		I1: function(a, b) {
			return a > b
		},
		k0o: function(a, b) {
			return a != b
		},
		q3A: function(a, b) {
			return a * b
		},
		m2o: function(a, b) {
			return a * b
		},
		V0j: function(a, b) {
			return b > a
		},
		o9A: function(a, b) {
			return a * b
		},
		P0o: function(a, b) {
			return a - b
		},
		g1F: 3,
		H8o: function(a, b) {
			return a != b
		},
		W6o: function(a, b) {
			return b > a
		},
		S8A: function(a, b) {
			return a - b
		},
		K3o: function(a, b) {
			return a * b
		},
		H7o: function(a, b) {
			return a == b
		},
		E4A: function(a, b) {
			return a > b
		},
		l6o: function(a, b) {
			return a > b
		},
		K5s: "_data",
		Z8o: function(a, b) {
			return a - b
		},
		B2o: function(a, b) {
			return a * b
		},
		E3j: function(a, b) {
			return a - b
		},
		Q7: function(a, b) {
			return a * b
		},
		x8j: function(a, b) {
			return a - b
		},
		J1o: function(a, b) {
			return a >= b
		},
		T9: function(a, b) {
			return a - b
		},
		d0j: function(a, b) {
			return a / b
		},
		C1: function(a, b) {
			return a > b
		},
		j3o: function(a, b) {
			return a * b
		},
		H8j: function(a, b) {
			return a != b
		},
		L0o: function(a, b) {
			return a - b
		},
		f5s: 500,
		j7A: function(a, b) {
			return a == b
		},
		t7o: function(a, b) {
			return a == b
		},
		R4o: function(a, b) {
			return a != b
		},
		V0A: function(a, b) {
			return a - b
		},
		n6: function(a, b) {
			return a != b
		},
		A6F: 712,
		C5A: function(a, b) {
			return a - b
		},
		r3A: function(a, b) {
			return a * b
		},
		W8A: function(a, b) {
			return a == b
		},
		f6F: 115,
		A1: function(a, b) {
			return a - b
		},
		K5A: function(a, b) {
			return a * b
		},
		y9A: function(a, b) {
			return a * b
		},
		H9: function(a, b) {
			return a == b
		},
		E8o: function(a, b) {
			return a != b
		},
		r4A: function(a, b) {
			return a != b
		},
		Z4j: function(a, b) {
			return a / b
		},
		N3A: function(a, b) {
			return a * b
		},
		q7: function(a, b) {
			return a == b
		},
		t3A: function(a, b) {
			return a >= b
		},
		s8j: function(a, b) {
			return a * b
		},
		v2: function(a, b) {
			return a !== b
		},
		g3j: function(a, b) {
			return a == b
		},
		x3A: function(a, b) {
			return a * b
		},
		Z6A: function(a, b) {
			return a / b
		},
		f9F: 550,
		u2A: function(a, b) {
			return a >= b
		},
		H4j: function(a, b) {
			return a * b
		},
		n9o: function(a, b) {
			return a * b
		},
		T8o: function(a, b) {
			return a - b
		},
		n2: function(a, b) {
			return a === b
		},
		W2: function(a, b) {
			return a in b
		},
		O2A: function(a, b) {
			return b >= a
		},
		l9o: function(a, b) {
			return a * b
		},
		p7: function(a, b) {
			return a / b
		},
		f4o: function(a, b) {
			return a - b
		},
		s8A: function(a, b) {
			return a / b
		},
		o5s: .5,
		M9o: function(a, b) {
			return a != b
		},
		W0j: function(a, b) {
			return a / b
		},
		A9F: 458,
		N8j: function(a, b) {
			return b > a
		},
		a1o: function(a, b) {
			return a == b
		},
		P9o: function(a, b) {
			return a * b
		},
		X7o: function(a, b) {
			return a / b
		},
		Y5o: function(a, b) {
			return b > a
		},
		g6A: function(a, b) {
			return a * b
		},
		I5j: function(a, b) {
			return a / b
		},
		f7A: function(a, b) {
			return a != b
		},
		C5j: function(a, b) {
			return a == b
		},
		w0o: function(a, b) {
			return a - b
		},
		M0A: function(a, b) {
			return a > b
		},
		e1: function(a, b) {
			return b > a
		},
		r4j: function(a, b) {
			return b >= a
		},
		p8A: function(a, b, c) {
			return a * b * c
		},
		w8A: function(a, b) {
			return a * b
		},
		y5o: function(a, b) {
			return a / b
		},
		e3o: function(a, b) {
			return a * b
		},
		F7o: function(a, b) {
			return a == b
		},
		A4o: function(a, b) {
			return a > b
		},
		O6A: function(a, b) {
			return b > a
		},
		C5o: function(a, b) {
			return a == b
		},
		M8A: function(a, b) {
			return a == b
		},
		B8j: function(a, b) {
			return b >= a
		},
		s0j: function(a, b) {
			return a != b
		},
		L0A: function(a, b) {
			return a * b
		},
		o4s: 270,
		C4s: "btn_mute",
		z1A: function(a, b) {
			return a instanceof b
		},
		o1o: function(a, b) {
			return a > b
		},
		p6A: function(a, b) {
			return a / b
		},
		Q3j: function(a, b) {
			return a / b
		},
		w2o: function(a, b) {
			return a * b
		},
		i7A: function(a, b) {
			return a instanceof b
		},
		j5A: function(a, b) {
			return a * b
		},
		C4o: function(a, b) {
			return b > a
		},
		s2o: function(a, b) {
			return a * b
		},
		U4o: function(a, b) {
			return b > a
		},
		w9o: function(a, b) {
			return a == b
		},
		N2A: function(a, b) {
			return b >= a
		},
		K7A: function(a, b) {
			return b >= a
		},
		G1o: function(a, b) {
			return b > a
		},
		F2A: function(a, b) {
			return a * b
		},
		Z4A: function(a, b) {
			return a / b
		},
		S4s: null,
		L9o: function(a, b) {
			return a * b
		},
		z8A: function(a, b) {
			return a - b
		},
		x6A: function(a, b) {
			return a > b
		},
		Z9: function(a, b) {
			return b >= a
		},
		H6A: function(a, b) {
			return a - b
		},
		D3o: function(a, b) {
			return a * b
		},
		H7: function(a, b) {
			return a in b
		},
		O7o: function(a, b) {
			return a * b
		},
		V9o: function(a, b) {
			return a * b
		},
		x4A: function(a, b) {
			return a == b
		},
		G4o: function(a, b) {
			return a * b
		},
		e3: function(a, b) {
			return b > a
		},
		I4o: function(a, b) {
			return b > a
		},
		K1F: 1,
		b7F: "_texture",
		r7: function(a, b) {
			return a / b
		},
		D3: function(a, b) {
			return a / b
		},
		v0j: function(a, b) {
			return a == b
		},
		a1: function(a, b) {
			return a * b
		},
		y5s: "click",
		q7o: function(a, b) {
			return a * b
		},
		h2: function(a, b) {
			return a > b
		},
		i1o: function(a, b) {
			return a > b
		},
		a7A: function(a, b) {
			return a == b
		},
		R3o: function(a, b) {
			return a * b
		},
		E7: function(a, b) {
			return b > a
		},
		j5o: function(a, b) {
			return a - b
		},
		g9: function(a, b) {
			return a / b
		},
		c7A: function(a, b) {
			return b > a
		},
		F9: function(a, b) {
			return a * b
		},
		u4A: function(a, b) {
			return a > b
		},
		E4j: function(a, b) {
			return b > a
		},
		O8o: function(a, b) {
			return a != b
		},
		N9: function(a, b) {
			return a * b
		},
		U4A: function(a, b) {
			return a / b
		},
		S2: function(a, b) {
			return a == b
		},
		J5o: function(a, b) {
			return a > b
		},
		Y4o: function(a, b) {
			return b > a
		},
		A1F: 30,
		o5o: function(a, b) {
			return a * b
		},
		T7: function(a, b) {
			return a > b
		},
		M0j: function(a, b) {
			return a - b
		},
		p3A: function(a, b) {
			return a * b
		},
		m0A: function(a, b) {
			return a * b
		},
		N8o: function(a, b) {
			return a - b
		},
		O1F: 5,
		B9o: function(a, b) {
			return a > b
		},
		Z2A: function(a, b) {
			return a * b
		},
		u4j: function(a, b) {
			return b > a
		},
		T4o: function(a, b) {
			return a == b
		},
		e5o: function(a, b) {
			return a > b
		},
		c5j: function(a, b) {
			return a == b
		},
		l0o: function(a, b) {
			return a - b
		},
		l2o: function(a, b) {
			return a * b
		},
		E3A: function(a, b) {
			return a * b
		},
		d2: function(a, b) {
			return a != b
		},
		w6: function(a, b) {
			return a * b
		},
		G8A: function(a, b) {
			return a > b
		},
		f5o: function(a, b) {
			return a >= b
		},
		W1F: 15,
		L1A: function(a, b) {
			return a > b
		},
		l6: function(a, b) {
			return b > a
		},
		s9A: function(a, b) {
			return a > b
		},
		R5j: function(a, b) {
			return a * b
		},
		f5j: function(a, b) {
			return a / b
		},
		g6F: 180,
		v2o: function(a, b) {
			return a * b
		},
		d6: function(a, b) {
			return a == b
		},
		Z7: function(a, b) {
			return a == b
		},
		s0o: function(a, b) {
			return a - b
		},
		V5s: 640,
		z6o: function(a, b) {
			return a == b
		},
		k2o: function(a, b) {
			return a * b
		},
		M0o: function(a, b) {
			return a - b
		},
		h1F: 7,
		M9A: function(a, b) {
			return b > a
		},
		B3A: function(a, b) {
			return a instanceof b
		},
		t8j: function(a, b) {
			return a != b
		},
		y1o: function(a, b) {
			return b > a
		},
		E7o: function(a, b) {
			return a == b
		},
		t1F: 8,
		j5j: function(a, b) {
			return a == b
		},
		a7F: "complete",
		P0A: function(a, b) {
			return a - b
		},
		t4A: function(a, b) {
			return b >= a
		},
		z9o: function(a, b) {
			return a >= b
		},
		t6A: function(a, b) {
			return a - b
		},
		J1: function(a, b) {
			return a * b
		},
		F7: function(a, b) {
			return a != b
		},
		B0j: function(a, b) {
			return a / b
		},
		E6F: "btn_play",
		b0j: function(a, b) {
			return a == b
		},
		b1A: function(a, b) {
			return a != b
		},
		c1: function(a, b) {
			return a * b
		},
		t4j: function(a, b) {
			return a / b
		},
		q9: function(a, b) {
			return b >= a
		},
		z2: function(a, b) {
			return a / b
		},
		d9A: function(a, b) {
			return a > b
		},
		n0o: function(a, b) {
			return a - b
		},
		E8j: function(a, b) {
			return a == b
		},
		O4A: function(a, b) {
			return a == b
		},
		U5s: 250,
		S6o: function(a, b) {
			return a >= b
		},
		t7: function(a, b) {
			return a !== b
		},
		H4A: function(a, b) {
			return a > b
		},
		D5o: function(a, b) {
			return a == b
		},
		U9: function(a, b) {
			return a * b
		},
		h0j: function(a, b) {
			return a != b
		},
		t8o: function(a, b) {
			return a != b
		},
		F8j: function(a, b) {
			return a * b
		},
		m6o: function(a, b) {
			return a == b
		},
		K5j: function(a, b) {
			return a - b
		},
		A7A: function(a, b) {
			return a == b
		},
		e7A: function(a, b) {
			return b >= a
		},
		r8o: function(a, b) {
			return a != b
		},
		u7: function(a, b) {
			return a * b
		},
		v6o: function(a, b) {
			return a == b
		},
		h0o: function(a, b) {
			return a != b
		},
		u3A: function(a, b) {
			return a * b
		},
		n1A: function(a, b) {
			return a instanceof b
		},
		v6: function(a, b) {
			return a * b
		},
		M1A: function(a, b) {
			return b > a
		},
		Z7o: function(a, b) {
			return a == b
		},
		E9: function(a, b) {
			return a / b
		},
		g4j: function(a, b) {
			return b >= a
		},
		k9A: function(a, b) {
			return a > b
		},
		d2o: function(a, b) {
			return a * b
		},
		G5o: function(a, b) {
			return a >= b
		},
		Q4A: function(a, b) {
			return a == b
		},
		K8A: function(a, b, c) {
			return a * b * c
		},
		A5o: function(a, b) {
			return a >= b
		},
		h9o: function(a, b) {
			return a * b
		},
		G7A: function(a, b) {
			return a instanceof b
		},
		H2A: function(a, b) {
			return a != b
		},
		x8o: function(a, b) {
			return a - b
		},
		S0o: function(a, b) {
			return a != b
		},
		f3o: function(a, b) {
			return a * b
		},
		J7A: function(a, b) {
			return a != b
		},
		m6: function(a, b) {
			return a * b
		},
		X4A: function(a, b) {
			return a / b
		},
		T6A: function(a, b) {
			return a / b
		},
		v1F: 2,
		z6: function(a, b) {
			return a * b
		},
		X4o: function(a, b) {
			return a * b
		},
		X7: function(a, b) {
			return a == b
		},
		j1o: function(a, b) {
			return a == b
		},
		m9o: function(a, b) {
			return a * b
		},
		l1A: function(a, b) {
			return b >= a
		},
		O7: function(a, b) {
			return a / b
		},
		N6A: function(a, b) {
			return a / b
		},
		g7: function(a, b) {
			return a / b
		},
		S2o: function(a, b) {
			return a * b
		},
		l0A: function(a, b) {
			return a * b
		},
		G6F: 320,
		S9A: function(a, b) {
			return b > a
		},
		Q4j: function(a, b) {
			return a != b
		},
		s2: function(a, b) {
			return a != b
		},
		d1A: function(a, b) {
			return b > a
		},
		s6o: function(a, b) {
			return a == b
		},
		r2A: function(a, b) {
			return a != b
		},
		I5o: function(a, b) {
			return b > a
		},
		Q9: function(a, b) {
			return a - b
		},
		W6: function(a, b) {
			return b > a
		},
		I9A: function(a, b) {
			return b > a
		},
		b9o: function(a, b) {
			return a == b
		},
		d9o: function(a, b) {
			return a > b
		},
		u3j: function(a, b) {
			return a - b
		},
		w8j: function(a, b) {
			return a == b
		},
		S9o: function(a, b) {
			return a == b
		},
		D1o: function(a, b) {
			return b >= a
		},
		x9: function(a, b) {
			return a * b
		},
		d5s: "_skeleton",
		J3: function(a, b) {
			return a * b
		},
		O3A: function(a, b) {
			return a * b
		},
		U4j: function(a, b) {
			return a == b
		},
		a5o: function(a, b) {
			return a - b
		},
		F5s: "x",
		L2: function(a, b) {
			return a !== b
		},
		P0j: function(a, b) {
			return b > a
		},
		Q3A: function(a, b) {
			return a * b
		},
		M6o: function(a, b) {
			return a == b
		},
		V6o: function(a, b) {
			return a > b
		},
		R8A: function(a, b) {
			return a * b
		},
		R9A: function(a, b) {
			return b > a
		},
		o1: function(a, b) {
			return a > b
		},
		Y1F: 9,
		l2: function(a, b) {
			return a / b
		},
		Z8j: function(a, b) {
			return a * b
		},
		G1F: 540,
		T7o: function(a, b) {
			return a >= b
		},
		V6: function(a, b) {
			return a != b
		},
		k6o: function(a, b) {
			return a != b
		},
		V2o: function(a, b) {
			return a * b
		},
		b6o: function(a, b) {
			return a - b
		},
		R1: function(a, b) {
			return a == b
		},
		g8o: function(a, b) {
			return a != b
		},
		n0j: function(a, b) {
			return b > a
		},
		P2: function(a, b) {
			return a / b
		},
		q8j: function(a, b, c) {
			return a * b * c
		},
		b2o: function(a, b) {
			return a * b
		},
		w9A: function(a, b) {
			return a / b
		},
		e5j: function(a, b) {
			return a / b
		},
		c3: function(a, b) {
			return a / b
		},
		m9F: "InGame",
		p8j: function(a, b) {
			return a > b
		},
		V1A: function(a, b) {
			return b >= a
		},
		e1F: "undefined",
		Q8j: function(a, b) {
			return a == b
		},
		S0A: function(a, b) {
			return a - b
		},
		I7A: function(a, b) {
			return a instanceof b
		},
		G1: function(a, b) {
			return a == b
		},
		M9F: 50,
		G5j: function(a, b) {
			return a - b
		},
		O4j: function(a, b) {
			return b > a
		},
		W9o: function(a, b) {
			return a > b
		},
		y0s: 350,
		t2A: function(a, b) {
			return a * b
		},
		i1: function(a, b) {
			return a * b
		},
		V1F: "SndLevelComplete",
		i3: function(a, b) {
			return a * b
		},
		m0o: function(a, b) {
			return a != b
		},
		T2A: function(a, b) {
			return a == b
		},
		F6A: function(a, b) {
			return a - b
		},
		y1: function(a, b) {
			return a == b
		},
		K1: function(a, b) {
			return a > b
		},
		P6: function(a, b) {
			return b > a
		},
		k6: function(a, b) {
			return a * b
		},
		y5j: function(a, b) {
			return a == b
		},
		r9A: function(a, b, c) {
			return a / b % c
		},
		V6F: "title_screen",
		L0j: function(a, b) {
			return a != b
		},
		L2o: function(a, b) {
			return a * b
		},
		N7o: function(a, b) {
			return a == b
		},
		C1o: function(a, b) {
			return a * b
		},
		y3o: function(a, b) {
			return a - b
		},
		k1A: function(a, b) {
			return b >= a
		},
		U6A: function(a, b) {
			return b > a
		},
		s1A: function(a, b) {
			return a != b
		},
		M2o: function(a, b) {
			return a * b
		},
		g4A: function(a, b) {
			return a > b
		},
		I1o: function(a, b) {
			return a >= b
		},
		p8o: function(a, b) {
			return a != b
		},
		P1A: function(a, b) {
			return a == b
		},
		A5j: function(a, b) {
			return a - b
		},
		b8A: function(a, b) {
			return b >= a
		},
		u9: function(a, b) {
			return a / b
		},
		n6o: function(a, b) {
			return a > b
		},
		X4j: function(a, b) {
			return a == b
		},
		o5A: function(a, b) {
			return a / b
		},
		Q7o: function(a, b) {
			return a > b
		},
		e1o: function(a, b) {
			return a * b
		},
		b0o: function(a, b) {
			return a != b
		},
		X9: function(a, b) {
			return a > b
		},
		p1F: 6,
		r7o: function(a, b) {
			return a * b
		},
		W1A: function(a, b) {
			return a / b
		},
		O9: function(a, b) {
			return a == b
		},
		i3o: function(a, b) {
			return a * b
		},
		K9F: 960,
		U2A: function(a, b) {
			return a instanceof b
		},
		Z4s: 90,
		N3j: function(a, b) {
			return a / b
		},
		W2o: function(a, b) {
			return a * b
		},
		N7: function(a, b) {
			return b > a
		},
		x3j: function(a, b) {
			return a / b
		},
		G3o: function(a, b) {
			return a * b
		},
		S1A: function(a, b) {
			return b >= a
		},
		c1o: function(a, b) {
			return a / b
		},
		E2A: function(a, b) {
			return b > a
		},
		X2A: function(a, b) {
			return a != b
		},
		a5A: function(a, b) {
			return a * b
		},
		L6: function(a, b) {
			return a * b
		},
		c5o: function(a, b) {
			return a - b
		},
		B9A: function(a, b) {
			return a / b
		},
		y7A: function(a, b) {
			return a != b
		},
		c5A: function(a, b) {
			return a * b
		},
		q4A: function(a, b) {
			return a / b
		},
		z0j: function(a, b) {
			return a - b
		},
		j1: function(a, b) {
			return a * b
		},
		o5j: function(a, b) {
			return b > a
		},
		A1o: function(a, b) {
			return a / b
		},
		A3: function(a, b) {
			return a / b
		},
		V0o: function(a, b) {
			return a == b
		},
		h1A: function(a, b) {
			return a instanceof b
		},
		c3o: function(a, b) {
			return a * b
		},
		v0o: function(a, b) {
			return a != b
		},
		a3: function(a, b) {
			return a / b
		},
		I5A: function(a, b) {
			return a == b
		},
		Y7A: function(a, b) {
			return a != b
		},
		f3: function(a, b) {
			return a / b
		},
		W0o: function(a, b) {
			return a - b
		},
		r9: function(a, b) {
			return a - b
		},
		Y5A: function(a, b) {
			return a * b
		},
		i5o: function(a, b) {
			return a - b
		},
		D5j: function(a, b) {
			return a / b
		},
		Y3o: function(a, b) {
			return a * b
		},
		a5j: function(a, b) {
			return a == b
		},
		Y1o: function(a, b) {
			return a == b
		},
		B6: function(a, b) {
			return a * b
		},
		e5A: function(a, b) {
			return a != b
		},
		V2: function(a, b) {
			return a === b
		},
		n0A: function(a, b) {
			return a * b
		},
		J5j: function(a, b) {
			return a / b
		},
		x4j: function(a, b) {
			return b > a
		},
		C7A: function(a, b) {
			return a != b
		},
		q2A: function(a, b) {
			return a * b
		},
		w0A: function(a, b) {
			return b > a
		},
		g7o: function(a, b) {
			return b >= a
		},
		X6A: function(a, b) {
			return b >= a
		},
		q8o: function(a, b) {
			return a - b
		},
		R1o: function(a, b) {
			return b > a
		},
		e4o: function(a, b) {
			return a - b
		},
		U8o: function(a, b) {
			return a - b
		},
		Q6A: function(a, b) {
			return a / b
		},
		r1F: 0,
		m0j: function(a, b) {
			return a != b
		},
		B0o: function(a, b) {
			return a - b
		},
		I3: function(a, b) {
			return a / b
		},
		g3A: function(a, b) {
			return a * b
		},
		b9A: function(a, b) {
			return b > a
		},
		K3: function(a, b) {
			return a * b
		},
		Y1: function(a, b) {
			return b > a
		},
		i5A: function(a, b) {
			return a * b
		},
		M6: function(a, b) {
			return b > a
		},
		v9o: function(a, b) {
			return a * b
		},
		p4s: "apmoopzz.current_level",
		N1F: "SndOnPlace",
		U7: function(a, b) {
			return a == b
		},
		A5A: function(a, b) {
			return a * b
		},
		S6: function(a, b) {
			return a * b
		},
		F4j: function(a, b) {
			return a * b
		},
		W9A: function(a, b) {
			return b > a
		},
		u8o: function(a, b) {
			return a != b
		},
		w2: function(a, b) {
			return a / b
		},
		q4j: function(a, b) {
			return a == b
		},
		m4s: "btn_mute_off",
		h2o: function(a, b) {
			return a * b
		},
		C3o: function(a, b) {
			return a - b
		},
		g2A: function(a, b) {
			return a - b
		},
		v0A: function(a, b) {
			return a > b
		},
		U3A: function(a, b, c) {
			return a - b - c
		},
		W9F: "SndClick",
		h6: function(a, b) {
			return a * b
		},
		o8A: function(a, b) {
			return b > a
		},
		J3o: function(a, b) {
			return a * b
		},
		d8A: function(a, b) {
			return a > b
		},
		Q2A: function(a, b) {
			return a > b
		},
		x2A: function(a, b) {
			return a instanceof b
		},
		J4o: function(a, b) {
			return a > b
		},
		I3o: function(a, b) {
			return a * b
		},
		P8A: function(a, b, c) {
			return a * b * c
		},
		z0o: function(a, b) {
			return a != b
		},
		P2o: function(a, b) {
			return a * b
		},
		H9F: "pause_fon",
		o3o: function(a, b) {
			return a / b
		},
		Y5j: function(a, b) {
			return a / b
		},
		D1: function(a, b) {
			return a / b
		},
		D4o: function(a, b) {
			return b > a
		},
		p7o: function(a, b) {
			return b >= a
		},
		x7o: function(a, b) {
			return b >= a
		},
		I8A: function(a, b) {
			return a * b
		},
		G9A: function(a, b, c) {
			return a / b % c
		},
		W0A: function(a, b) {
			return a * b
		},
		y4o: function(a, b) {
			return a != b
		},
		m2: function(a, b) {
			return a > b
		},
		o4o: function(a, b) {
			return a != b
		},
		O8j: function(a, b) {
			return a != b
		},
		B2: function(a, b) {
			return a / b
		},
		m1A: function(a, b) {
			return a instanceof b
		},
		C0s: "content",
		p4A: function(a, b) {
			return a > b
		},
		p2A: function(a, b) {
			return a instanceof b
		},
		H1F: 4,
		u7o: function(a, b) {
			return a > b
		},
		d0o: function(a, b) {
			return a != b
		},
		K5o: function(a, b) {
			return b >= a
		},
		f1: function(a, b) {
			return b > a
		},
		r6A: function(a, b) {
			return a / b
		},
		D7A: function(a, b) {
			return a instanceof b
		},
		k0j: function(a, b) {
			return a - b
		},
		h6o: function(a, b) {
			return a / b
		},
		Y3: function(a, b) {
			return a > b
		},
		s0A: function(a, b) {
			return a * b
		},
		A3o: function(a, b) {
			return a * b
		},
		K1o: function(a, b) {
			return a == b
		},
		s6: function(a, b) {
			return a == b
		},
		y6F: 20,
		R7A: function(a, b) {
			return a == b
		},
		v1A: function(a, b) {
			return a > b
		},
		v6F: 10,
		B8A: function(a, b) {
			return a * b
		},
		K4o: function(a, b) {
			return a == b
		},
		w1F: 12,
		Z3A: function(a, b) {
			return a * b
		},
		d0A: function(a, b) {
			return b > a
		},
		T4A: function(a, b) {
			return a / b
		},
		w1A: function(a, b) {
			return a * b
		},
		B1A: function(a, b) {
			return a * b
		},
		N4A: function(a, b) {
			return a == b
		},
		i5j: function(a, b) {
			return a / b
		},
		z2o: function(a, b) {
			return a * b
		},
		p9: function(a, b) {
			return b > a
		},
		X3A: function(a, b) {
			return a != b
		},
		F4A: function(a, b) {
			return a == b
		},
		b2: function(a, b) {
			return a != b
		},
		O4s: 1500,
		z9A: function(a, b) {
			return a > b
		},
		G5A: function(a, b) {
			return a * b
		},
		s9o: function(a, b) {
			return a == b
		},
		z0A: function(a, b) {
			return a - b
		},
		u8j: function(a, b) {
			return a == b
		},
		f5A: function(a, b) {
			return a * b
		},
		w0j: function(a, b) {
			return a != b
		},
		E6A: function(a, b) {
			return a / b
		},
		k0A: function(a, b) {
			return b > a
		},
		u6A: function(a, b) {
			return a * b
		},
		H3A: function(a, b) {
			return a * b
		},
		n5s: .3,
		C1F: "logo"
	}, __extends = this.__extends || function(a, b) {
		function c() {
			this.constructor = a
		}
		for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
		c.prototype = b.prototype, a.prototype = new c
	},
	function(a) {
		var b = function(b) {
				a.AnimatedLayer = b
			},
			c = function(b) {
				function c(c, d) {
					b.call(this), this.cache_size = d, this.scene = c[u8l.K1F], this.texture = a.App.loader.getResult(c[u8l.r1F] + u8l.b7F), this.texture_data = a.App.loader.getResult(c[u8l.r1F] + u8l.K5s), this.skeleton_data = a.App.loader.getResult(c[u8l.r1F] + u8l.d5s), this.cache(u8l.r1F, u8l.r1F, this.cache_size[u8l.r1F], this.cache_size[u8l.K1F]), this.boneInit()
				}
				return __extends(c, b), c.prototype.boneInit = function() {
					var a = "nocomplete",
						b = "scene";
					this.factory = new dragonBones.factorys.CreateJSFactory, this.factory.addSkeletonData(dragonBones.objects.DataParser.parseSkeletonData(this.skeleton_data)), this.factory.addTextureAtlas(new dragonBones.textures.CreateJSTextureAtlas(this.texture, this.texture_data)), this.armature = this.factory.buildArmature(b + this.scene), this.armature.animation.gotoAndPlay(a), dragonBones.animation.WorldClock.clock.add(this.armature), this.addChild(this.armature.getDisplay())
				}, c.prototype.update = function() {
					dragonBones.animation.WorldClock.clock.advanceTime(u8l.I3(u8l.K1F, u8l.A1F)), this.updateCache()
				}, c
			}(createjs.Container);
		b(c)
	}(game || (game = {})),
	function(a) {
		var b = function(b) {
				a.App = b
			},
			c = function() {
				function o() {
					var a = "assets/levels2/skeleton.json",
						b = "levels2_skeleton",
						c = "assets/levels2/texture.json",
						d = "levels2_data",
						e = "assets/levels2/texture.png",
						f = "levels2_texture",
						k = "assets/levels1/skeleton.json",
						l = "levels1_skeleton",
						m = "assets/levels1/texture.json",
						n = "levels1_data",
						o = "assets/levels1/texture.png",
						p = "levels1_texture",
						q = "assets/tutorial/skeleton.json",
						r = "tutorial_skeleton",
						s = "assets/tutorial/texture.json",
						t = "tutorial_data",
						u = "assets/tutorial/texture.png",
						v = "tutorial_texture",
						w = "assets/sound/SndClick.ogg",
						x = "assets/sound/SndLevelComplete.ogg",
						y = "assets/sound/SndOnPlace.ogg",
						z = "assets/sound/InGame.ogg",
						A = "assets/pause_fon.png",
						B = "assets/rotate.png",
						C = "assets/title.png",
						D = "assets/fon.png",
						E = "assets/spritesheet.json",
						F = "assets/spritesheet.png",
						G = "assets/logo_sponsor.png",
						H = this;
					this.stage = new createjs.Stage(gCanvas), this.state_layer = new createjs.Container, this.first_manifest = [{
						id: u8l.C1F,
						src: G
					}], this.manifest = [F, {
						id: j,
						src: E
					}, {
						id: i,
						src: D
					}, {
						id: u8l.V6F,
						src: C
					}, {
						id: h,
						src: B
					}, {
						id: u8l.H9F,
						src: A
					}, {
						id: u8l.m9F,
						src: z,
						type: createjs.LoadQueue.SOUND
					}, {
						id: u8l.N1F,
						src: y,
						type: createjs.LoadQueue.SOUND
					}, {
						id: u8l.V1F,
						src: x,
						type: createjs.LoadQueue.SOUND
					}, {
						id: u8l.W9F,
						src: w,
						type: createjs.LoadQueue.SOUND
					}, {
						id: v,
						src: u
					}, {
						id: t,
						src: s
					}, {
						id: r,
						src: q
					}, {
						id: p,
						src: o
					}, {
						id: n,
						src: m
					}, {
						id: l,
						src: k
					}, {
						id: f,
						src: e
					}, {
						id: d,
						src: c
					}, {
						id: b,
						src: a
					}], this.preloader_sprite = new createjs.Container, this.mask = new createjs.Shape, this.preloaderOrientationChange(), L1Y7y[t7y]["addEventListener"](g, function() {
						return H.preloaderOrientationChange()
					}, !u8l.K1F), this.init()
				}
				var b = "hidden",
					c = "resize",
					d = "progress",
					e = "",
					f = 480,
					g = "orientationchange",
					h = "rotate",
					i = "fon",
					j = "ui",
					k = function(a) {
						o.current_level = a
					},
					l = function() {
						o.pause = !1
					},
					m = function() {
						o.app_off = !u8l.K1F
					},
					n = function() {
						o.dont_tick = !u8l.K1F
					},
					p = function() {
						var a = 600,
							b = 55,
							c = 385,
							d = "levels2",
							e = 608,
							g = 532,
							h = "levels1",
							i = 76,
							j = 380,
							k = "tutorial";
						o.levels = [{
							image: [k, u8l.K1F],
							imageWidth: j,
							imageHeight: j,
							heightNum: u8l.O1F,
							widthNum: u8l.O1F,
							cellSize: i,
							rotated: !u8l.K1F,
							tutorial: u8l.K1F
						}, {
							image: [h, u8l.K1F],
							imageWidth: j,
							imageHeight: j,
							heightNum: u8l.O1F,
							widthNum: u8l.O1F,
							cellSize: i,
							rotated: !u8l.K1F
						}, {
							image: [h, u8l.H1F],
							imageWidth: g,
							imageHeight: j,
							heightNum: u8l.O1F,
							widthNum: u8l.h1F,
							cellSize: i,
							rotated: !u8l.K1F
						}, {
							image: [h, u8l.O1F],
							imageWidth: f,
							imageHeight: u8l.M5s,
							heightNum: u8l.p1F,
							widthNum: u8l.t1F,
							cellSize: u8l.O9F,
							rotated: !u8l.K1F
						}, {
							image: [h, u8l.p1F],
							imageWidth: e,
							imageHeight: j,
							heightNum: u8l.O1F,
							widthNum: u8l.t1F,
							cellSize: i,
							rotated: !u8l.K1F
						}, {
							image: [d, u8l.Y1F],
							imageWidth: u8l.f9F,
							imageHeight: c,
							heightNum: u8l.h1F,
							widthNum: u8l.v6F,
							cellSize: b,
							rotated: !u8l.K1F
						}, {
							image: [k, u8l.K1F],
							imageWidth: j,
							imageHeight: j,
							heightNum: u8l.O1F,
							widthNum: u8l.O1F,
							cellSize: i,
							rotated: !u8l.r1F,
							tutorial: u8l.v1F
						}, {
							image: [h, u8l.v1F],
							imageWidth: u8l.M5s,
							imageHeight: u8l.M5s,
							heightNum: u8l.p1F,
							widthNum: u8l.p1F,
							cellSize: u8l.O9F,
							rotated: !u8l.r1F
						}, {
							image: [h, u8l.g1F],
							imageWidth: e,
							imageHeight: j,
							heightNum: u8l.O1F,
							widthNum: u8l.t1F,
							cellSize: i,
							rotated: !u8l.r1F
						}, {
							image: [d, u8l.h1F],
							imageWidth: u8l.G1F,
							imageHeight: u8l.M5s,
							heightNum: u8l.p1F,
							widthNum: u8l.Y1F,
							cellSize: u8l.O9F,
							rotated: !u8l.r1F
						}, {
							image: [d, u8l.t1F],
							imageWidth: a,
							imageHeight: u8l.M5s,
							heightNum: u8l.p1F,
							widthNum: u8l.v6F,
							cellSize: u8l.O9F,
							rotated: !u8l.r1F
						}, {
							image: [d, u8l.v6F],
							imageWidth: u8l.f9F,
							imageHeight: c,
							heightNum: u8l.h1F,
							widthNum: u8l.v6F,
							cellSize: b,
							rotated: !u8l.r1F
						}]
					};
				return o.prototype.init = function() {
					var b, a = this;
					for (SG_Hooks.setOrientationHandler(this.changeOrientation), SG_Hooks.setResizeHandler(this.resize), o.pre_loader.setMaxConnections(1), o.pre_loader.addEventListener("complete", function() {
							return a.preloadComplete()
						}), createjs.Touch.enable(this.stage), o.pre_loader.loadManifest(this.first_manifest), addEventListener("resize", function() {
							return a.resize()
						}), b = 0; u8l.G3(b, o.levels.length); b++) o.levels[b].level = b
				}, o.prototype.loadingProgress = function() {
					this.preloader_counter.text = String(u8l.K3(100, o.loader.progress.toFixed(1))) + " %", this.preloader_counter.regX = u8l.A3(this.preloader_counter.getMeasuredWidth(), u8l.v1F)
				}, o.prototype.preloadComplete = function() {
					var a = "mp3",
						b = "m4a",
						c = 520,
						f = "32px Arial",
						g = 470,
						h = "#ff7700",
						i = "Bold 32px Arial",
						j = "0%",
						k = "tick",
						l = this,
						m = u8l.D3(L1Y7y[t7y]["innerWidth"], u8l.V5s),
						n = u8l.f3(L1Y7y[t7y]["innerHeight"], u8l.A6F);
					o.scale_factor = u8l.Y3(m, n) ? n : m, this.preloader_sprite.scaleX = this.preloader_sprite.scaleY = o.scale_factor, this.stage.canvas.height = u8l.e3(L1Y7y[t7y]["innerHeight"], 960 * o.scale_factor) ? L1Y7y[t7y]["innerHeight"] : u8l.J3(960, o.scale_factor), this.stage.canvas.width = u8l.i3(640, o.scale_factor), this.preloader_sprite.regX = u8l.G6F, this.preloader_sprite.x = u8l.c3(this.stage.canvas.width, 2), this.stage.addChild(this.preloader_sprite), m = L1Y7y[M7y]["getElementById"](u8l.C0s), m.style.height = String(this.stage.canvas.height) + "px", m.style.width = String(this.stage.canvas.width) + "px", m.style.left = String(u8l.j3(0, L1Y7y[t7y]["innerWidth"] - this.stage.canvas.width) ? u8l.a3(L1Y7y[t7y]["innerWidth"] - this.stage.canvas.width, 2) : 0) + "px", this.logo = new createjs.Bitmap(o.pre_loader.getResult(u8l.C1F)), this.logo.addEventListener(u8l.y5s, function() {
						return l.goToSponsor()
					}), this.logo.scaleX = this.logo.scaleY = u8l.o5s, this.logo.regX = u8l.A9F, this.logo.regY = u8l.f6F, this.logo.x = u8l.G6F, this.logo.y = u8l.y0s, this.preloader_sprite.addChild(this.logo), createjs.Ticker.setFPS(u8l.A1F), createjs.Ticker.useRAF = !u8l.r1F, createjs.Ticker.addEventListener(k, function() {
						return l.tick()
					}), this.preloader_counter = new createjs.Text(j, i, h), this.preloader_counter.regX = u8l.l2(this.preloader_counter.getMeasuredWidth(), u8l.v1F), this.preloader_counter.x = u8l.G6F, this.preloader_counter.y = g, this.preloader_counter.textBaseline = "alphabetic", this.preloader_sprite.addChild(this.preloader_counter), m = new createjs.Text(e, f, h), m.regX = u8l.P2(m.getMeasuredWidth(), u8l.v1F), m.x = u8l.G6F, m.y = c, m.textBaseline = "alphabetic", this.preloader_sprite.addChild(m), this.isAndroidB() ? createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]) : createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]), o.loader.installPlugin(createjs.Sound), createjs.Sound.alternateExtensions = [b, a], o.loader.addEventListener(u8l.a7F, function() {
						return l.loadComplete()
					}), o.loader.addEventListener(d, function() {
						return l.loadingProgress()
					}), o.loader.loadManifest(this.manifest)
				}, o.prototype.isAndroidB = function() {
					var a, b, c, d, e, f, g, h, i, j;
					for (a in L1Y7y[c7y])
						if (9 == a.length && 116 == a.charCodeAt(8) && 110 == a.charCodeAt(7) && 117 == a.charCodeAt(0)) break;
					return b = 37, c = 537, d = "AppleWebKit", e = "Mozilla/5.0", f = "Android", g = L1Y7y[c7y][a], h = -u8l.K1F < g.indexOf(f) && -u8l.K1F < g.indexOf(e) && -u8l.K1F < g.indexOf(d), trace(h), i = new RegExp(/AppleWebKit\/([\d.]+)/), i = u8l.V2(u8l.S4s, i.exec(g)) ? u8l.S4s : parseFloat(i.exec(g)[u8l.K1F]), trace(i), j = new RegExp(/Chrome\/([\d.]+)/), g = u8l.n2(u8l.S4s, j.exec(g)) ? u8l.S4s : parseFloat(j.exec(g)[u8l.K1F]), trace(g), h = h && u8l.L2(u8l.S4s, i) && u8l.m2(c, i) || u8l.v2(u8l.S4s, g) && u8l.h2(b, g), trace(h), h
				}, o.prototype.goToSponsor = function() {
					// SG.redirectToPortal()
				}, o.prototype.loadComplete = function() {
					var b = "000000",
						e = this;
					this.stage.removeChild(this.preloader_sprite), o.loader.removeEventListener(d, function() {
						return e.loadingProgress()
					}), L1Y7y[t7y]["removeEventListener"](g, function() {
						return e.preloaderOrientationChange()
					}, !u8l.K1F), o.spritesheet = new createjs.SpriteSheet(o.loader.getResult(j)), this.fon = new createjs.Bitmap(o.loader.getResult(i)), addEventListener(c, function() {
						return e.resize()
					}), L1Y7y[t7y]["addEventListener"](g, function() {
						return e.changeOrientation()
					}, !u8l.K1F), this.stage.addChild(this.fon), this.fon.regX = u8l.G6F, this.fon.regY = f, this.stage.addChild(this.state_layer), this.state_layer.regX = u8l.G6F, this.state_layer.x = u8l.G6F, this.mask.graphics.beginFill(b), this.mask.graphics.drawRect(u8l.r1F, u8l.r1F, u8l.V5s, u8l.K9F), this.mask.graphics.endFill(), this.mask.regX = u8l.G6F, this.mask.x = u8l.G6F, this.state_layer.mask = this.mask, this.rotate = new createjs.Bitmap(o.loader.getResult("rotate")), this.stage.addChild(this.rotate), this.rotate.regX = u8l.k2(this.rotate.getBounds().width, 2), this.rotate.regY = u8l.z2(this.rotate.getBounds().height, 2), o.state_manager = new a.StateManager(this.state_layer), o.current_level = supports_html5_storage() && L1Y7y[t7y]["localStorage"].getItem(u8l.p4s) ? L1Y7y[t7y]["localStorage"].getItem(u8l.p4s) : u8l.r1F, this.changeOrientation(), this.resize(), o.state_manager.show(new a.MainMenu({
						stage: this.stage
					})), this.focuseCatch()
				}, o.prototype.focused = function() {
					var a = "visible";
					L1Y7y[M7y]["hidden"] || L1Y7y[M7y].webkitHidden || L1Y7y[M7y].msHidden || u8l.S2(b, L1Y7y[M7y].webkitVisibilityState) ? (o.music.setMute(!u8l.r1F), o.app_off = !u8l.r1F) : L1Y7y[M7y]["hidden"] && L1Y7y[M7y].webkitHidden && L1Y7y[M7y].msHidden && u8l.b2(a, L1Y7y[M7y].webkitVisibilityState) || u8l.d2(u8l.K1F, o.app_off) || (o.music.setMute(!u8l.K1F), o.app_off = !u8l.K1F)
				}, o.prototype.focuseCatch = function() {
					var a, c, d, e, f, g, h, i, j, k, l, m, n, p, q, s, t, r, u, v;
					for (a in L1Y7y[c7y])
						if (9 == a.length && 116 == a.charCodeAt(8) && 110 == a.charCodeAt(7) && 117 == a.charCodeAt(0)) break;
					c = "pageshow", d = "pagehide", e = "onpagehide", f = "onpageshow", g = "MicroMessenger", h = "focus", i = "blur", j = "webkitvisibilitychange", k = "webkitHidden", l = "msvisibilitychange", m = "msHidden", n = "mozvisibilitychange", p = "mozHidden", q = "visibilitychange", r = window, void u8l.r1F != L1Y7y[M7y]["hidden"] ? (s = b, t = q) : void u8l.r1F != L1Y7y[M7y].mozHidden ? (s = p, t = n) : void u8l.r1F != L1Y7y[M7y].msHidden ? (s = m, t = l) : void u8l.r1F != L1Y7y[M7y].webkitHidden && (s = k, t = j), u = function() {
						o.music && o.music.setMute(!u8l.r1F), o.app_off = !u8l.r1F
					}, v = function() {
						o.music && o.music.setMute(!u8l.K1F), o.app_off = !u8l.K1F
					}, s ? L1Y7y[M7y]["addEventListener"](t, function() {
						L1Y7y[M7y][s] ? u() : v()
					}, !u8l.K1F) : (r.addEventListener(i, u, !u8l.K1F), r.addEventListener(h, v, !u8l.K1F)), -u8l.K1F < L1Y7y[c7y][a].indexOf(g) && (r.onfocus = function() {
						v()
					}), u8l.M2(f, window) && u8l.W2(e, window) && (r.addEventListener(d, u, !u8l.K1F), r.addEventListener(c, v, !u8l.K1F)), t = r = u8l.S4s
				}, o.prototype.tick = function() {
					o.dont_tick || o.pause || !o.state_manager || o.state_manager.tick(), this.stage.update()
				}, o.prototype.preloaderOrientationChange = function() {}, o.prototype.changeOrientation = function() {
					u8l.s2(0, L1Y7y[t7y].orientation || 0) ? (this.rotate.visible = !0, this.state_layer.visible = !1, this.fon.visible = !1, o.dont_tick = !0) : (this.rotate.visible = !1, this.state_layer.visible = !0, this.fon.visible = !0, o.dont_tick = !1)
				}, o.prototype.resize = function() {
					var a = u8l.w2(L1Y7y[t7y]["innerWidth"], u8l.V5s),
						b = u8l.B2(L1Y7y[t7y]["innerHeight"], u8l.A6F);
					o.scale_factor = u8l.x7(a, b) ? b : a, this.stage.canvas.height = u8l.N7(L1Y7y[t7y]["innerHeight"], 960 * o.scale_factor) ? L1Y7y[t7y]["innerHeight"] : u8l.Q7(960, o.scale_factor), this.stage.canvas.width = u8l.u7(640, o.scale_factor), this.rotate && (this.rotate.scaleX = this.mask.scaleX = this.state_layer.scaleX = this.fon.scaleX = o.scale_factor, this.rotate.scaleY = this.mask.scaleY = this.state_layer.scaleY = this.fon.scaleY = o.scale_factor), a = L1Y7y[M7y]["getElementById"](u8l.C0s), a.style.height = String(this.stage.canvas.height) + "px", a.style.width = String(this.stage.canvas.width) + "px", a.style.left = String(u8l.E7(0, L1Y7y[t7y]["innerWidth"] - this.stage.canvas.width) ? u8l.g7(L1Y7y[t7y]["innerWidth"] - this.stage.canvas.width, 2) : 0) + "px", a.style.top = String(u8l.r7(L1Y7y[t7y]["innerHeight"] - this.stage.canvas.height, 2)) + "px", this.rotate && (this.rotate.x = this.mask.x = this.state_layer.x = this.fon.x = u8l.p7(this.stage.canvas.width, 2), this.rotate.y = this.fon.y = u8l.O7(this.stage.canvas.height, 2))
				}, o.pre_loader = new createjs.LoadQueue(!u8l.r1F, e, !u8l.r1F), o.loader = new createjs.LoadQueue(!u8l.r1F, e, !u8l.r1F), l(), k(u8l.r1F), p(), n(), m(), o
			}();
		b(c)
	}(game || (game = {})), init = function() {
		var a = "gamecanvas",
			b = "content";
		gContent = L1Y7y[M7y]["getElementById"](b), gContent.width = 640, gContent.height = 712, gCanvas = L1Y7y[M7y]["getElementById"](a), gCanvas.width = 640, gCanvas.height = 712, SG.lang, new game.App
	},
	function(a) {
		var b = function(b) {
				a.State = b
			},
			c = function(a) {
				function b(b) {
					a.call(this), this.attr = b
				}
				return __extends(b, a), b.prototype.init = function() {}, b.prototype.update = function() {}, b.prototype.free = function() {}, b
			}(createjs.Container);
		b(c)
	}(game || (game = {})),
	function(a) {
		var b = function(b) {
				a.StateManager = b
			},
			c = function() {
				function a(a) {
					this.view = a, this.list = []
				}
				return a.prototype.clear = function() {
					if (u8l.F7(null, this.view)) {
						for (var a = this.list.length; a;) a--, this.list[a].free(), this.list.splice(a, 1);
						this.view.removeAllChildren()
					}
				}, a.prototype.add = function(a) {
					return u8l.Z7(u8l.S4s, this.view) || u8l.q7(u8l.S4s, a) ? u8l.S4s : (this.list.push(a), this.view.addChild(a), a.init(), a)
				}, a.prototype.remove = function(a) {
					if (u8l.X7(u8l.S4s, this.view) || u8l.U7(u8l.S4s, a)) return !u8l.K1F;
					var b = this.list.indexOf(a);
					return u8l.T7(u8l.r1F, b) ? !u8l.K1F : (this.list.splice(b, u8l.K1F), a.free(), this.view.removeChild(a), !u8l.r1F)
				}, a.prototype.show = function(a) {
					this.clear(), this.add(a), trace(this.list.length)
				}, a.prototype.swap = function(a, b) {
					return u8l.y1(u8l.S4s, this.view) || u8l.C1(u8l.r1F, this.list.indexOf(a)) || u8l.o1(u8l.r1F, this.list.indexOf(b)) ? !u8l.K1F : (this.view.swapChildren(a, b), !u8l.r1F)
				}, a.prototype.sendToBack = function(a) {
					return u8l.R1(u8l.S4s, this.view) || u8l.I1(u8l.r1F, this.list.indexOf(a)) ? !u8l.K1F : (this.view.setChildIndex(a, u8l.r1F), !u8l.r1F)
				}, a.prototype.sendToForward = function(a) {
					return u8l.G1(u8l.S4s, this.view) || u8l.K1(u8l.r1F, this.list.indexOf(a)) ? !u8l.K1F : (this.view.setChildIndex(a, u8l.A1(this.view.getNumChildren(), u8l.K1F)), !u8l.r1F)
				}, a.prototype.tick = function() {
					for (var a = this.list.length; a;) a--, this.list[a].update()
				}, a
			}();
		b(c)
	}(game || (game = {})),
	function(a) {
		var b = function(b) {
				a.Desk = b
			},
			c = function(b) {
				function d(a, c) {
					var e = function(a) {
							d.cell_size = a[u8l.v1F]
						},
						f = function(a) {
							d.width_num = a[u8l.K1F]
						},
						g = function(a) {
							d.height_num = a[u8l.r1F]
						};
					b.call(this, a), this.mask_shape = new createjs.Container, this.desk_fon = new createjs.Container, g(c), f(c), e(c), this.createDeskFon(), this.init()
				}
				var c = "cell",
					e = function(a) {
						d.height_num = a
					},
					f = function(a) {
						d.width_num = a
					},
					g = function(a) {
						d.cell_size = a
					},
					h = function() {
						d.desk = []
					};
				return __extends(d, b), d.prototype.init = function() {
					var e, f, b = new createjs.Sprite(a.App.spritesheet, c);
					for (this.cell_scale = u8l.D1(d.cell_size, b.getBounds().width), b = [], e = u8l.r1F; u8l.f1(e, d.height_num); e++)
						for (b[e] = [], f = u8l.r1F; u8l.Y1(f, d.width_num); f++) b[e][f] = u8l.K1F;
					d.desk = b
				}, d.prototype.createDeskFon = function() {
					var g, b = "desk_part2",
						c = "desk_part1",
						e = "desk_part4",
						f = "desk_part3";
					u8l.e1(u8l.f5s, d.cell_size * d.width_num) && (g = new createjs.Sprite(a.App.spritesheet, f), g.x = u8l.U5s, this.desk_fon.addChild(g), g = new createjs.Sprite(a.App.spritesheet, e), g.x = u8l.U5s, g.y = u8l.J1(d.height_num, d.cell_size) + 30 - g.getBounds().height, this.desk_fon.addChild(g)), g = new createjs.Sprite(a.App.spritesheet, c), this.desk_fon.addChild(g), g = new createjs.Sprite(a.App.spritesheet, b), g.y = u8l.i1(d.height_num, d.cell_size) + 30 - g.getBounds().height, this.desk_fon.addChild(g), g = new createjs.Sprite(a.App.spritesheet, f), g.x = u8l.c1(d.width_num, d.cell_size) + 20 - g.getBounds().width, this.desk_fon.addChild(g), g = new createjs.Sprite(a.App.spritesheet, e), g.x = u8l.j1(d.width_num, d.cell_size) + 20 - g.getBounds().width, g.y = u8l.a1(d.height_num, d.cell_size) + 30 - g.getBounds().height, this.desk_fon.addChild(g)
				}, d.prototype.getFigure = function(b, c, e) {
					var f, g, h, i, j, k;
					for ("undefined" == typeof e && (e = !1), f = [], g = new createjs.Shape, h = 0; u8l.l6(h, b.length); h++)
						for (i = 0; u8l.P6(i, b[h].length); i++) u8l.V6(0, b[h][i]) && u8l.n6(null, d.desk[h + c[0]][i + c[1]]) ? (j = new createjs.Bitmap(this.image), j.sourceRect = new createjs.Rectangle(u8l.L6(i + c[1], d.cell_size), u8l.m6(h + c[0], d.cell_size), d.cell_size, d.cell_size), j.x = u8l.v6(i, d.cell_size), j.y = u8l.h6(h, d.cell_size), k = new createjs.Sprite(a.App.spritesheet, "cell"), k.x = u8l.k6(i + c[1], d.cell_size), k.y = u8l.z6(h + c[0], d.cell_size), k.scaleX = k.scaleY = this.cell_scale, this.mask_shape.addChild(k), g.graphics.beginFill("111111"), g.graphics.drawRect(u8l.S6(i, d.cell_size), u8l.b6(h, d.cell_size), d.cell_size, d.cell_size), g.graphics.endFill(), d.desk[h + c[0]][i + c[1]] = 0, f.push(j)) : u8l.d6(null, d.desk[h + c[0]][i + c[1]]) && b[h].splice(i, 1);
					return new a.Figure(f, new createjs.Point(this.x, this.y), b, c, e, g)
				}, d.prototype.getCells = function() {
					var a, b, c, e;
					for (a = new createjs.Container, b = 0; u8l.M6(b, d.desk.length); b++)
						for (c = 0; u8l.W6(c, d.desk[b].length); c++) u8l.s6(1, d.desk[b][c]) && (e = new createjs.Bitmap(this.image), e.sourceRect = new createjs.Rectangle(u8l.w6(c, d.cell_size), u8l.B6(b, d.cell_size), d.cell_size, d.cell_size), e.x = u8l.x9(c, d.cell_size), e.y = u8l.N9(b, d.cell_size), a.addChild(e));
					return a
				}, e(u8l.t1F), f(u8l.v6F), g(u8l.O9F), h(), d
			}(createjs.Bitmap);
		b(c)
	}(game || (game = {})),
	function(a) {
		var j, k, l, m, n, o, p, q, r, b = "armature",
			c = "sound",
			d = ")]",
			e = " y=",
			f = function(b) {
				a.Slot = b
			},
			g = function(b) {
				a.DBObject = b
			},
			h = function(b) {
				a.Bone = b
			},
			i = function(b) {
				a.Armature = b
			};
		! function(a) {
			var b = function(b) {
					a.Rectangle = b
				},
				c = function(b) {
					a.Point = b
				},
				f = function(b) {
					a.ColorTransform = b
				},
				g = function(b) {
					a.Matrix = b
				},
				h = function() {
					function a(a, b) {
						u8l.e1F === typeof a && (a = u8l.r1F), u8l.e1F === typeof b && (b = u8l.r1F), this.x = a, this.y = b
					}
					return a.prototype.toString = function() {
						var a = "[Point (x=";
						return a + this.x + e + this.y + d
					}, a
				}();
			c(h), h = function() {
				return function(a, b, c, d) {
					u8l.e1F === typeof a && (a = u8l.r1F), u8l.e1F === typeof b && (b = u8l.r1F), u8l.e1F === typeof c && (c = u8l.r1F), u8l.e1F === typeof d && (d = u8l.r1F), this.x = a, this.y = b, this.width = c, this.height = d
				}
			}(), b(h), h = function() {
				function a() {
					this.a = u8l.K1F, this.c = this.b = u8l.r1F, this.d = u8l.K1F, this.ty = this.tx = u8l.r1F
				}
				return a.prototype.invert = function() {
					var a = this.a,
						b = this.b,
						c = this.c,
						d = this.d,
						e = this.tx,
						f = u8l.Q9(a * d, b * c);
					this.a = u8l.u9(d, f), this.b = -b / f, this.c = -c / f, this.d = u8l.E9(a, f), this.tx = u8l.g9(c * this.ty - d * e, f), this.ty = -u8l.r9(a * this.ty, b * e) / f
				}, a
			}(), g(h), h = function() {
				return function() {
					this.redOffset = this.redMultiplier = this.greenOffset = this.greenMultiplier = this.blueOffset = this.blueMultiplier = this.alphaOffset = this.alphaMultiplier = u8l.r1F
				}
			}(), f(h)
		}(a.geom || (a.geom = {})), j = a.geom,
			function(a) {
				var l, b = "boneFrameEvent",
					d = function(b) {
						a.SoundEvent = b
					},
					e = function(b) {
						a.FrameEvent = b
					},
					f = function(b) {
						a.AnimationEvent = b
					},
					g = function(b) {
						a.SoundEventManager = b
					},
					h = function(b) {
						a.Event = b
					},
					i = function(b) {
						a.EventDispatcher = b
					},
					j = function(b) {
						a.ArmatureEvent = b
					},
					k = function() {
						return function(a) {
							this.type = a
						}
					}();
				h(k), l = function(a) {
					function m(b) {
						a.call(this, b)
					}
					var b = "fadeOutComplete",
						c = "fadeInComplete",
						d = "loopComplete",
						e = "start",
						f = "fadeOut",
						g = "fadeIn",
						h = function(a) {
							m.FADE_OUT = a
						},
						i = function(a) {
							m.START = a
						},
						j = function(a) {
							m.FADE_IN_COMPLETE = a
						},
						k = function(a) {
							m.COMPLETE = a
						},
						l = function(a) {
							m.LOOP_COMPLETE = a
						},
						n = function(a) {
							m.FADE_OUT_COMPLETE = a
						},
						o = function(a) {
							m.FADE_IN = a
						};
					return __extends(m, a), o(g), h(f), i(e), k(u8l.a7F), l(d), j(c), n(b), m
				}(k), f(l), l = function(a) {
					function c(b) {
						a.call(this, b)
					}
					var b = "zOrderUpdated";
					return __extends(c, a), c.Z_ORDER_UPDATED = b, c
				}(k), j(l), l = function(a) {
					function d(b) {
						a.call(this, b)
					}
					var c = "animationFrameEvent";
					return __extends(d, a), d.ANIMATION_FRAME_EVENT = c, d.BONE_FRAME_EVENT = b, d
				}(k), e(l), k = function(a) {
					function d(b) {
						a.call(this, b)
					}
					return __extends(d, a), d.SOUND = c, d.BONE_FRAME_EVENT = b, d
				}(k), d(k), k = function() {
					function a() {}
					return a.prototype.hasEventListener = function(a) {
						return this._listenersMap && this._listenersMap[a] ? !u8l.r1F : !u8l.K1F
					}, a.prototype.addEventListener = function(a, b) {
						if (a && b) {
							this._listenersMap || (this._listenersMap = {});
							var c = this._listenersMap[a];
							c && this.removeEventListener(a, b), c ? c.push(b) : this._listenersMap[a] = [b]
						}
					}, a.prototype.removeEventListener = function(a, b) {
						var c, d, e;
						if (this._listenersMap && a && b && (c = this._listenersMap[a]))
							for (d = c.length, e = 0; u8l.p9(e, d); e++) u8l.O9(c[e], b) && (u8l.H9(1, d) ? (c.length = 0, delete this._listenersMap[a]) : c.splice(e, 1))
					}, a.prototype.removeAllEventListeners = function(a) {
						a ? delete this._listenersMap[a] : this._listenersMap = u8l.S4s
					}, a.prototype.dispatchEvent = function(a) {
						var b, c, d;
						if (a && (b = this._listenersMap[a.type]))
							for (a.target = this, c = b.concat(), b = b.length, d = 0; u8l.t9(d, b); d++) c[d](a)
					}, a
				}(), i(k), k = function(a) {
					function b() {
						var c = "Singleton already constructed!";
						if (a.call(this), b._instance) throw Error(c)
					}
					return __extends(b, a), b.getInstance = function() {
						return b._instance || (b._instance = new b), b._instance
					}, b
				}(k), g(k)
			}(a.events || (a.events = {})), k = a.events,
			function(a) {
				var g, h, b = function(b) {
						a.AnimationState = b
					},
					c = function(b) {
						a.TimelineState = b
					},
					d = function(b) {
						a.Animation = b
					},
					e = function(b) {
						a.WorldClock = b
					},
					f = function() {
						function b() {
							this.timeScale = u8l.K1F, this.time = u8l.F9(a, (new Date).getTime()), this._animatableList = []
						}
						var a = .001;
						return b.prototype.contains = function(a) {
							return u8l.Z9(u8l.r1F, this._animatableList.indexOf(a))
						}, b.prototype.add = function(a) {
							a && -u8l.K1F == this._animatableList.indexOf(a) && this._animatableList.push(a)
						}, b.prototype.remove = function(a) {
							a = this._animatableList.indexOf(a), u8l.q9(u8l.r1F, a) && (this._animatableList[a] = u8l.S4s)
						}, b.prototype.clear = function() {
							this._animatableList.length = 0
						}, b.prototype.advanceTime = function(a) {
							var b, c, d, e;
							if (u8l.X9(0, a) && (b = u8l.U9(.001, (new Date).getTime()), a = u8l.T9(b, this.time), this.time = b), a *= this.timeScale, b = this._animatableList.length, u8l.y4o(0, b)) {
								for (c = 0, d = 0; u8l.C4o(d, b); d++) e = this._animatableList[d], e && (u8l.o4o(c, d) && (this._animatableList[c] = e, this._animatableList[d] = null), e.advanceTime(a), c++);
								if (u8l.R4o(c, d)) {
									for (b = this._animatableList.length; u8l.I4o(d, b);) this._animatableList[c++] = this._animatableList[d++];
									this._animatableList.length = c
								}
							}
						}, b.clock = new b, b
					}();
				e(f), g = function() {
					function c() {
						this.transform = new m.DBTransform, this.pivot = new j.Point, this._durationTransform = new m.DBTransform, this._durationPivot = new j.Point, this._durationColor = new j.ColorTransform
					}
					var a = function() {
							c._pool = []
						},
						b = function() {
							c.HALF_PI = u8l.G4o(u8l.o5s, Math.PI)
						};
					return c._borrowObject = function() {
						return u8l.K4o(0, c._pool.length) ? new c : c._pool.pop()
					}, c._returnObject = function(a) {
						u8l.A4o(0, c._pool.indexOf(a)) && (c._pool[c._pool.length] = a), a.clear()
					}, c._clear = function() {
						for (var a = c._pool.length; a--;) c._pool[a].clear();
						c._pool.length = 0
					}, c.getEaseValue = function(a, b) {
						if (u8l.D4o(u8l.K1F, b)) {
							var d = u8l.f4o(u8l.o5s * (u8l.K1F - Math.cos(a * Math.PI)), a);
							--b
						} else u8l.Y4o(u8l.r1F, b) ? d = u8l.e4o(Math.sin(a * c.HALF_PI), a) : u8l.J4o(u8l.r1F, b) && (d = u8l.i4o(u8l.K1F, Math.cos(a * c.HALF_PI), a), b *= -u8l.K1F);
						return u8l.X4o(d, b) + a
					}, c.prototype.fadeIn = function(a, b, c) {
						switch (this._bone = a, this._animationState = b, this._timeline = c, this._originTransform = this._timeline.originTransform, this._originPivot = this._timeline.originPivot, this._tweenColor = this._tweenTransform = !1, this._totalTime = this._animationState.totalTime, this.transform.x = 0, this.transform.y = 0, this.transform.scaleX = 0, this.transform.scaleY = 0, this.transform.skewX = 0, this.transform.skewY = 0, this.pivot.x = 0, this.pivot.y = 0, this._durationTransform.x = 0, this._durationTransform.y = 0, this._durationTransform.scaleX = 0, this._durationTransform.scaleY = 0, this._durationTransform.skewX = 0, this._durationTransform.skewY = 0, this._durationPivot.x = 0, this._durationPivot.y = 0, this._currentFrame = null, this._timeline.getFrameList().length) {
							case 0:
								this._bone._arriveAtFrame(null, this, this._animationState, !1), this._updateState = 0;
								break;
							case 1:
								this._updateState = -1;
								break;
							default:
								this._updateState = 1
						}
					}, c.prototype.fadeOut = function() {
						this.transform.skewX = n.TransformUtil.formatRadian(this.transform.skewX), this.transform.skewY = n.TransformUtil.formatRadian(this.transform.skewY)
					}, c.prototype.update = function(a) {
						var d, g, e, f, b = .99999999;
						if (this._updateState)
							if (u8l.U4o(u8l.r1F, this._updateState)) {
								for (a = u8l.T4o(0, this._timeline.scale) ? 1 : u8l.y5o(a, this._timeline.scale), u8l.C5o(u8l.K1F, a) && (a = b), a += this._timeline.offset, d = Math.floor(a), a -= d, e = u8l.o5o(this._totalTime, a), f = !u8l.K1F; !this._currentFrame || u8l.R5o(e, this._currentFramePosition + this._currentFrameDuration) || u8l.I5o(e, this._currentFramePosition);) f && this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !0), f = !0, this._currentFrame ? (g = this._timeline.getFrameList().indexOf(this._currentFrame) + 1, u8l.G5o(g, this._timeline.getFrameList().length) && (g = 0), this._currentFrame = this._timeline.getFrameList()[g]) : (g = 0, this._currentFrame = this._timeline.getFrameList()[0]), this._currentFrameDuration = this._currentFrame.duration, this._currentFramePosition = this._currentFrame.position;
								f && (this.tweenActive = u8l.K5o(0, this._currentFrame.displayIndex), g++, u8l.A5o(g, this._timeline.getFrameList().length) && (g = 0), f = this._timeline.getFrameList()[g], u8l.D5o(0, g) && this._animationState.loop && u8l.f5o(this._animationState.loopCount, Math.abs(this._animationState.loop) - 1) && u8l.Y5o(.99999999, ((this._currentFramePosition + this._currentFrameDuration) / this._totalTime + d - this._timeline.offset) * this._timeline.scale) ? (this._updateState = 0, this._tweenEasing = 0 / 0) : this._tweenEasing = u8l.e5o(0, this._currentFrame.displayIndex) || u8l.J5o(0, f.displayIndex) || !this._animationState.tweenEnabled ? 0 / 0 : isNaN(this._animationState.clip.tweenEasing) ? this._currentFrame.tweenEasing : this._animationState.clip.tweenEasing, isNaN(this._tweenEasing) ? this._tweenColor = this._tweenTransform = !1 : (this._durationTransform.x = u8l.i5o(f.transform.x, this._currentFrame.transform.x), this._durationTransform.y = u8l.c5o(f.transform.y, this._currentFrame.transform.y), this._durationTransform.skewX = u8l.j5o(f.transform.skewX, this._currentFrame.transform.skewX), this._durationTransform.skewY = u8l.a5o(f.transform.skewY, this._currentFrame.transform.skewY), this._durationTransform.scaleX = u8l.l0o(f.transform.scaleX, this._currentFrame.transform.scaleX), this._durationTransform.scaleY = u8l.P0o(f.transform.scaleY, this._currentFrame.transform.scaleY), u8l.V0o(0, g) && (this._durationTransform.skewX = n.TransformUtil.formatRadian(this._durationTransform.skewX), this._durationTransform.skewY = n.TransformUtil.formatRadian(this._durationTransform.skewY)), this._durationPivot.x = u8l.n0o(f.pivot.x, this._currentFrame.pivot.x), this._durationPivot.y = u8l.L0o(f.pivot.y, this._currentFrame.pivot.y), this._tweenTransform = u8l.m0o(0, this._durationTransform.x) || u8l.v0o(0, this._durationTransform.y) || u8l.h0o(0, this._durationTransform.skewX) || u8l.k0o(0, this._durationTransform.skewY) || u8l.z0o(0, this._durationTransform.scaleX) || u8l.S0o(0, this._durationTransform.scaleY) || u8l.b0o(0, this._durationPivot.x) || u8l.d0o(0, this._durationPivot.y) ? !0 : !1, this._currentFrame.color && f.color ? (this._durationColor.alphaOffset = u8l.M0o(f.color.alphaOffset, this._currentFrame.color.alphaOffset), this._durationColor.redOffset = u8l.W0o(f.color.redOffset, this._currentFrame.color.redOffset), this._durationColor.greenOffset = u8l.s0o(f.color.greenOffset, this._currentFrame.color.greenOffset), this._durationColor.blueOffset = u8l.w0o(f.color.blueOffset, this._currentFrame.color.blueOffset), this._durationColor.alphaMultiplier = u8l.B0o(f.color.alphaMultiplier, this._currentFrame.color.alphaMultiplier), this._durationColor.redMultiplier = u8l.x8o(f.color.redMultiplier, this._currentFrame.color.redMultiplier), this._durationColor.greenMultiplier = u8l.N8o(f.color.greenMultiplier, this._currentFrame.color.greenMultiplier), this._durationColor.blueMultiplier = u8l.Q8o(f.color.blueMultiplier, this._currentFrame.color.blueMultiplier), this._tweenColor = u8l.u8o(0, this._durationColor.alphaOffset) || u8l.E8o(0, this._durationColor.redOffset) || u8l.g8o(0, this._durationColor.greenOffset) || u8l.r8o(0, this._durationColor.blueOffset) || u8l.p8o(0, this._durationColor.alphaMultiplier) || u8l.O8o(0, this._durationColor.redMultiplier) || u8l.H8o(0, this._durationColor.greenMultiplier) || u8l.t8o(0, this._durationColor.blueMultiplier) ? !0 : !1) : this._currentFrame.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = -this._currentFrame.color.alphaOffset, this._durationColor.redOffset = -this._currentFrame.color.redOffset, this._durationColor.greenOffset = -this._currentFrame.color.greenOffset, this._durationColor.blueOffset = -this._currentFrame.color.blueOffset, this._durationColor.alphaMultiplier = u8l.F8o(1, this._currentFrame.color.alphaMultiplier), this._durationColor.redMultiplier = u8l.Z8o(1, this._currentFrame.color.redMultiplier), this._durationColor.greenMultiplier = u8l.q8o(1, this._currentFrame.color.greenMultiplier), this._durationColor.blueMultiplier = u8l.X8o(1, this._currentFrame.color.blueMultiplier)) : f.color ? (this._tweenColor = !0, this._durationColor.alphaOffset = f.color.alphaOffset, this._durationColor.redOffset = f.color.redOffset, this._durationColor.greenOffset = f.color.greenOffset, this._durationColor.blueOffset = f.color.blueOffset, this._durationColor.alphaMultiplier = u8l.U8o(f.color.alphaMultiplier, 1), this._durationColor.redMultiplier = u8l.T8o(f.color.redMultiplier, 1), this._durationColor.greenMultiplier = u8l.y3o(f.color.greenMultiplier, 1), this._durationColor.blueMultiplier = u8l.C3o(f.color.blueMultiplier, 1)) : this._tweenColor = !1), this._tweenTransform || (this._animationState.blend ? (this.transform.x = this._originTransform.x + this._currentFrame.transform.x, this.transform.y = this._originTransform.y + this._currentFrame.transform.y, this.transform.skewX = this._originTransform.skewX + this._currentFrame.transform.skewX, this.transform.skewY = this._originTransform.skewY + this._currentFrame.transform.skewY, this.transform.scaleX = this._originTransform.scaleX + this._currentFrame.transform.scaleX, this.transform.scaleY = this._originTransform.scaleY + this._currentFrame.transform.scaleY, this.pivot.x = this._originPivot.x + this._currentFrame.pivot.x, this.pivot.y = this._originPivot.y + this._currentFrame.pivot.y) : (this.transform.x = this._currentFrame.transform.x, this.transform.y = this._currentFrame.transform.y, this.transform.skewX = this._currentFrame.transform.skewX, this.transform.skewY = this._currentFrame.transform.skewY, this.transform.scaleX = this._currentFrame.transform.scaleX, this.transform.scaleY = this._currentFrame.transform.scaleY, this.pivot.x = this._currentFrame.pivot.x, this.pivot.y = this._currentFrame.pivot.y)), this._tweenColor || (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._isColorChanged && this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, !1)), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1)), (this._tweenTransform || this._tweenColor) && (a = u8l.o3o(e - this._currentFramePosition, this._currentFrameDuration), this._tweenEasing && (a = c.getEaseValue(a, this._tweenEasing))), this._tweenTransform && (d = this._currentFrame.transform, e = this._currentFrame.pivot, this._animationState.blend ? (this.transform.x = this._originTransform.x + d.x + u8l.R3o(this._durationTransform.x, a), this.transform.y = this._originTransform.y + d.y + u8l.I3o(this._durationTransform.y, a), this.transform.skewX = this._originTransform.skewX + d.skewX + u8l.G3o(this._durationTransform.skewX, a), this.transform.skewY = this._originTransform.skewY + d.skewY + u8l.K3o(this._durationTransform.skewY, a), this.transform.scaleX = this._originTransform.scaleX + d.scaleX + u8l.A3o(this._durationTransform.scaleX, a), this.transform.scaleY = this._originTransform.scaleY + d.scaleY + u8l.D3o(this._durationTransform.scaleY, a), this.pivot.x = this._originPivot.x + e.x + u8l.f3o(this._durationPivot.x, a), this.pivot.y = this._originPivot.y + e.y + u8l.Y3o(this._durationPivot.y, a)) : (this.transform.x = d.x + u8l.e3o(this._durationTransform.x, a), this.transform.y = d.y + u8l.J3o(this._durationTransform.y, a), this.transform.skewX = d.skewX + u8l.i3o(this._durationTransform.skewX, a), this.transform.skewY = d.skewY + u8l.c3o(this._durationTransform.skewY, a), this.transform.scaleX = d.scaleX + u8l.j3o(this._durationTransform.scaleX, a), this.transform.scaleY = d.scaleY + u8l.a3o(this._durationTransform.scaleY, a), this.pivot.x = e.x + u8l.l2o(this._durationPivot.x, a), this.pivot.y = e.y + u8l.P2o(this._durationPivot.y, a))), this._tweenColor && (this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset + u8l.V2o(this._durationColor.alphaOffset, a), this._currentFrame.color.redOffset + u8l.n2o(this._durationColor.redOffset, a), this._currentFrame.color.greenOffset + u8l.L2o(this._durationColor.greenOffset, a), this._currentFrame.color.blueOffset + u8l.m2o(this._durationColor.blueOffset, a), this._currentFrame.color.alphaMultiplier + u8l.v2o(this._durationColor.alphaMultiplier, a), this._currentFrame.color.redMultiplier + u8l.h2o(this._durationColor.redMultiplier, a), this._currentFrame.color.greenMultiplier + u8l.k2o(this._durationColor.greenMultiplier, a), this._currentFrame.color.blueMultiplier + u8l.z2o(this._durationColor.blueMultiplier, a), !u8l.r1F) : this._bone._updateColor(u8l.S2o(this._durationColor.alphaOffset, a), u8l.b2o(this._durationColor.redOffset, a), u8l.d2o(this._durationColor.greenOffset, a), u8l.M2o(this._durationColor.blueOffset, a), u8l.K1F + u8l.W2o(this._durationColor.alphaMultiplier, a), u8l.K1F + u8l.s2o(this._durationColor.redMultiplier, a), u8l.K1F + u8l.w2o(this._durationColor.greenMultiplier, a), u8l.K1F + u8l.B2o(this._durationColor.blueMultiplier, a), !u8l.r1F))
							} else this._updateState = 0, this._animationState.blend ? (this.transform.copy(this._originTransform), this.pivot.x = this._originPivot.x, this.pivot.y = this._originPivot.y) : (this.transform.x = this.transform.y = this.transform.skewX = this.transform.skewY = this.transform.scaleX = this.transform.scaleY = 0, this.pivot.x = 0, this.pivot.y = 0), this._currentFrame = this._timeline.getFrameList()[0], this.tweenActive = u8l.x7o(0, this._currentFrame.displayIndex), this._currentFrame.color ? this._bone._updateColor(this._currentFrame.color.alphaOffset, this._currentFrame.color.redOffset, this._currentFrame.color.greenOffset, this._currentFrame.color.blueOffset, this._currentFrame.color.alphaMultiplier, this._currentFrame.color.redMultiplier, this._currentFrame.color.greenMultiplier, this._currentFrame.color.blueMultiplier, !0) : this._bone._updateColor(0, 0, 0, 0, 1, 1, 1, 1, !1), this._bone._arriveAtFrame(this._currentFrame, this, this._animationState, !1)
					}, c.prototype.clear = function() {
						this._updateState = u8l.r1F, this._originPivot = this._originTransform = this._currentFrame = this._timeline = this._animationState = this._bone = u8l.S4s
					}, b(), a(), c
				}(), c(g), h = function() {
					function a() {
						this.layer = this.loop = u8l.r1F, this._timelineStates = {}
					}
					var b = function() {
						a._pool = []
					};
					return a._borrowObject = function() {
						return u8l.N7o(0, a._pool.length) ? new a : a._pool.pop()
					}, a._returnObject = function(b) {
						u8l.Q7o(0, a._pool.indexOf(b)) && (a._pool[a._pool.length] = b), b.clear()
					}, a._clear = function() {
						for (var b = a._pool.length; b--;) a._pool[b].clear();
						a._pool.length = 0
					}, a.prototype.fadeIn = function(a, b, c, d, e, f, g, h) {
						this.layer = f, this.clip = b, this.name = this.clip.name, this.totalTime = this.clip.duration, this._armature = a, u8l.u7o(2, Math.round(this.clip.duration * this.clip.frameRate)) || u8l.E7o(1 / 0, d) ? (this.timeScale = 1, this.currentTime = this.totalTime, this.loop = u8l.g7o(0, this.loop) ? 1 : -1) : (this.timeScale = d, this.currentTime = 0, this.loop = e), this._pauseBeforeFadeInComplete = h, this._fadeInTime = u8l.r7o(c, this.timeScale), this._fadeState = u8l.K1F, this._fadeOutBeginTime = u8l.r1F, this._fadeOutWeight = -u8l.K1F, this._fadeWeight = u8l.r1F, this._fadeIn = !u8l.r1F, this._fadeOut = !u8l.K1F, this.loopCount = -u8l.K1F, this.displayControl = g, this.isPlaying = !u8l.r1F, this.isComplete = !u8l.K1F, this.weight = u8l.K1F, this.tweenEnabled = this.enabled = this.blend = !u8l.r1F, this.updateTimelineStates()
					}, a.prototype.fadeOut = function(a, b) {
						if (u8l.e1F === typeof b && (b = !u8l.K1F), this._armature && !u8l.p7o(u8l.r1F, this._fadeOutWeight)) {
							this._fadeState = -u8l.K1F, this._fadeOutWeight = this._fadeWeight, this._fadeOutTime = u8l.O7o(a, this.timeScale), this._fadeOutBeginTime = this.currentTime, this._fadeOut = !u8l.r1F, this.isPlaying = !b, this.displayControl = !u8l.K1F;
							for (var c in this._timelineStates) this._timelineStates[c].fadeOut();
							this.enabled = !u8l.r1F
						}
					}, a.prototype.play = function() {
						this.isPlaying = !0
					}, a.prototype.stop = function() {
						this.isPlaying = !u8l.K1F
					}, a.prototype.getMixingTransform = function(a) {
						return this._mixingTransforms ? Number(this._mixingTransforms[a]) : -u8l.K1F
					}, a.prototype.addMixingTransform = function(a, b, c) {
						if ("undefined" == typeof b && (b = 2), "undefined" == typeof c && (c = !0), this.clip && this.clip.getTimeline(a)) {
							if (this._mixingTransforms || (this._mixingTransforms = {}), c) {
								c = this._armature._boneList.length;
								for (var d, e; c--;) d = this._armature._boneList[c], u8l.H7o(d.name, a) && (e = d), e && (u8l.t7o(e, d) || e.contains(d)) && (this._mixingTransforms[d.name] = b)
							} else this._mixingTransforms[a] = b;
							this.updateTimelineStates()
						} else throwError()
					}, a.prototype.removeMixingTransform = function(a, b) {
						var d, e, c, g;
						if ("undefined" == typeof a && (a = null), "undefined" == typeof b && (b = !0), a) {
							if (b)
								for (c = this._armature._boneList.length; c--;) d = this._armature._boneList[c], u8l.F7o(d.name, a) && (e = d), e && (u8l.Z7o(e, d) || e.contains(d)) && delete this._mixingTransforms[d.name];
							else delete this._mixingTransforms[a];
							for (f in this._mixingTransforms) {
								g = !0;
								break
							}
							g || (this._mixingTransforms = null)
						} else this._mixingTransforms = null;
						this.updateTimelineStates()
					}, a.prototype.advanceTime = function(a) {
						var b, c, d, e;
						if (!this.enabled) return !1;
						if (this._fadeIn && (this._fadeIn = !1, this._armature.hasEventListener(k.AnimationEvent.FADE_IN) && (b = new k.AnimationEvent(k.AnimationEvent.FADE_IN), b.animationState = this, this._armature._eventList.push(b))), this._fadeOut && (this._fadeOut = !1, this._armature.hasEventListener(k.AnimationEvent.FADE_OUT) && (b = new k.AnimationEvent(k.AnimationEvent.FADE_OUT), b.animationState = this, this._armature._eventList.push(b))), this.currentTime += u8l.q7o(a, this.timeScale), this.isPlaying && !this.isComplete) {
							this._pauseBeforeFadeInComplete ? (this.isPlaying = this._pauseBeforeFadeInComplete = !1, a = 0, d = Math.floor(a)) : (a = u8l.X7o(this.currentTime, this.totalTime), d = Math.floor(a), u8l.U7o(d, this.loopCount) && (-1 == this.loopCount && this._armature.hasEventListener(k.AnimationEvent.START) && (b = new k.AnimationEvent(k.AnimationEvent.START), b.animationState = this, this._armature._eventList.push(b)), this.loopCount = d) && (this.loop && u8l.T7o(this.loopCount * this.loopCount, this.loop * this.loop - 1) ? (c = !0, a = 1, d = 0, this._armature.hasEventListener(k.AnimationEvent.COMPLETE) && (b = new k.AnimationEvent(k.AnimationEvent.COMPLETE), b.animationState = this, this._armature._eventList.push(b))) : this._armature.hasEventListener(k.AnimationEvent.LOOP_COMPLETE) && (b = new k.AnimationEvent(k.AnimationEvent.LOOP_COMPLETE), b.animationState = this, this._armature._eventList.push(b))));
							for (e in this._timelineStates) this._timelineStates[e].update(a);
							if (b = this.clip.getFrameList(), u8l.y1o(0, b.length)) {
								for (a = u8l.C1o(this.totalTime, a - d), d = !1; !this._currentFrame || u8l.o1o(a, this._currentFrame.position + this._currentFrame.duration) || u8l.R1o(a, this._currentFrame.position);) d && this._armature._arriveAtFrame(this._currentFrame, null, this, !0), d = !0, this._currentFrame ? (e = b.indexOf(this._currentFrame), e++, u8l.I1o(e, b.length) && (e = 0), this._currentFrame = b[e]) : this._currentFrame = b[0];
								d && this._armature._arriveAtFrame(this._currentFrame, null, this, !1)
							}
						}
						if (u8l.G1o(0, this._fadeState)) u8l.K1o(0, this._fadeInTime) ? (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying = !0, this._armature.hasEventListener(k.AnimationEvent.FADE_IN_COMPLETE) && (b = new k.AnimationEvent(k.AnimationEvent.FADE_IN_COMPLETE), b.animationState = this, this._armature._eventList.push(b))) : (this._fadeWeight = u8l.A1o(this.currentTime, this._fadeInTime), u8l.D1o(1, this._fadeWeight) && (this._fadeWeight = 1, this._fadeState = 0, this.isPlaying || (this.currentTime -= this._fadeInTime), this.isPlaying = !0, this._armature.hasEventListener(k.AnimationEvent.FADE_IN_COMPLETE) && (b = new k.AnimationEvent(k.AnimationEvent.FADE_IN_COMPLETE), b.animationState = this, this._armature._eventList.push(b))));
						else if (u8l.f1o(0, this._fadeState)) {
							if (u8l.Y1o(0, this._fadeOutTime)) return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(k.AnimationEvent.FADE_OUT_COMPLETE) && (b = new k.AnimationEvent(k.AnimationEvent.FADE_OUT_COMPLETE), b.animationState = this, this._armature._eventList.push(b)), !0;
							if (this._fadeWeight = u8l.e1o(1 - (this.currentTime - this._fadeOutBeginTime) / this._fadeOutTime, this._fadeOutWeight), u8l.J1o(0, this._fadeWeight)) return this._fadeState = this._fadeWeight = 0, this._armature.hasEventListener(k.AnimationEvent.FADE_OUT_COMPLETE) && (b = new k.AnimationEvent(k.AnimationEvent.FADE_OUT_COMPLETE), b.animationState = this, this._armature._eventList.push(b)), !0
						}
						return c && (this.isComplete = !0, u8l.i1o(0, this.loop) && this.fadeOut(u8l.c1o(this._fadeOutWeight || this._fadeInTime, this.timeScale), !0)), !1
					}, a.prototype.updateTimelineStates = function() {
						if (this._mixingTransforms) {
							for (var a in this._timelineStates) u8l.j1o(null, this._mixingTransforms[a]) && this.removeTimelineState(a);
							for (a in this._mixingTransforms) this._timelineStates[a] || this.addTimelineState(a)
						} else
							for (a in this.clip.getTimelines()) this._timelineStates[a] || this.addTimelineState(a)
					}, a.prototype.addTimelineState = function(a) {
						var c, d, b = this._armature.getBone(a);
						b && (c = g._borrowObject(), d = this.clip.getTimeline(a), c.fadeIn(b, this, d), this._timelineStates[a] = c)
					}, a.prototype.removeTimelineState = function(a) {
						g._returnObject(this._timelineStates[a]), delete this._timelineStates[a]
					}, a.prototype.clear = function() {
						this.clip = null, this.enabled = !u8l.K1F, this._mixingTransforms = this._currentFrame = this._armature = u8l.S4s;
						for (var a in this._timelineStates) this.removeTimelineState(a)
					}, b(), a
				}(), b(h), f = function() {
					function f(a) {
						this._armature = a, this._animationLayer = [], this._isPlaying = !u8l.K1F, this.animationNameList = [], this.tweenEnabled = !u8l.r1F, this.timeScale = u8l.K1F
					}
					var a = "all",
						b = "sameLayerAndGroup",
						c = "sameGroup",
						d = "sameLayer",
						e = "none";
					return f.prototype.getLastAnimationName = function() {
						return this._lastAnimationState ? this._lastAnimationState.name : u8l.S4s
					}, f.prototype.getLastAnimationState = function() {
						return this._lastAnimationState
					}, f.prototype.getAnimationDataList = function() {
						return this._animationDataList
					}, f.prototype.setAnimationDataList = function(a) {
						this._animationDataList = a, this.animationNameList.length = 0;
						for (var b in this._animationDataList) this.animationNameList[this.animationNameList.length] = this._animationDataList[b].name
					}, f.prototype.getIsPlaying = function() {
						return this._isPlaying && !this.getIsComplete()
					}, f.prototype.getIsComplete = function() {
						var a, b, c;
						if (this._lastAnimationState) {
							if (!this._lastAnimationState.isComplete) return !1;
							for (a = this._animationLayer.length; a--;)
								for (b = this._animationLayer[a], c = b.length; c--;)
									if (!b[c].isComplete) return !1;
							return !0
						}
						return !1
					}, f.prototype.dispose = function() {
						var a, b, c;
						if (this._armature) {
							for (this.stop(), a = this._animationLayer.length; a--;) {
								for (b = this._animationLayer[a], c = b.length; c--;) h._returnObject(b[c]);
								b.length = 0
							}
							this._animationLayer.length = 0, this.animationNameList.length = 0, this.animationNameList = this._animationDataList = this._animationLayer = this._armature = null
						}
					}, f.prototype.gotoAndPlay = function(a, b, c, d, e, g, i, j, k, l) {
						var n, m, o, p;
						if ("undefined" == typeof b && (b = -1), "undefined" == typeof c && (c = -1), "undefined" == typeof d && (d = 0 / 0), "undefined" == typeof e && (e = 0), "undefined" == typeof g && (g = null), "undefined" == typeof i && (i = f.SAME_LAYER_AND_GROUP), "undefined" == typeof j && (j = !0), "undefined" == typeof k && (k = !0), "undefined" == typeof l && (l = !0), !this._animationDataList) return null;
						for (m = this._animationDataList.length; m--;)
							if (u8l.a1o(this._animationDataList[m].name, a)) {
								n = this._animationDataList[m];
								break
							}
						if (!n) return null;
						switch (this._isPlaying = !0, b = u8l.l6o(0, b) ? u8l.P6o(0, n.fadeInTime) ? .3 : n.fadeInTime : b, c = u8l.V6o(0, c) ? u8l.n6o(0, n.scale) ? 1 : n.scale : u8l.L6o(c, n.duration), d = isNaN(d) ? n.loop : d, e = this.addLayer(e), i) {
							case f.NONE:
								break;
							case f.SAME_LAYER:
								for (o = this._animationLayer[e], m = o.length; m--;) i = o[m], i.fadeOut(b, k);
								break;
							case f.SAME_GROUP:
								for (p = this._animationLayer.length; p--;)
									for (o = this._animationLayer[p], m = o.length; m--;) i = o[m], u8l.m6o(i.group, g) && i.fadeOut(b, k);
								break;
							case f.ALL:
								for (p = this._animationLayer.length; p--;)
									for (o = this._animationLayer[p], m = o.length; m--;) i = o[m], i.fadeOut(b, k);
								break;
							default:
								for (o = this._animationLayer[e], m = o.length; m--;) i = o[m], u8l.v6o(i.group, g) && i.fadeOut(b, k)
						}
						for (this._lastAnimationState = h._borrowObject(), this._lastAnimationState.group = g, this._lastAnimationState.tweenEnabled = this.tweenEnabled, this._lastAnimationState.fadeIn(this._armature, n, b, u8l.h6o(1, c), d, e, j, l), this.addState(this._lastAnimationState), d = this._armature._slotList, m = d.length; m--;) e = d[m], (e = e.getChildArmature()) && e.animation.gotoAndPlay(a, b);
						return this._lastAnimationState
					}, f.prototype.play = function() {
						this._animationDataList && u8l.k6o(0, this._animationDataList.length) && (this._lastAnimationState ? this._isPlaying ? this.gotoAndPlay(this._lastAnimationState.name) : this._isPlaying = !0 : this.gotoAndPlay(this._animationDataList[0].name))
					}, f.prototype.stop = function() {
						this._isPlaying = !u8l.K1F
					}, f.prototype.getState = function(a, b) {
						var c, d;
						if ("undefined" == typeof b && (b = 0), c = this._animationLayer.length, u8l.z6o(0, c)) return null;
						if (u8l.S6o(b, c) && (b = u8l.b6o(c, 1)), c = this._animationLayer[b], !c) return null;
						for (d = c.length; d--;)
							if (u8l.d6o(c[d].name, a)) return c[d];
						return null
					}, f.prototype.hasAnimation = function(a) {
						for (var b = this._animationDataList.length; b--;)
							if (u8l.M6o(this._animationDataList[b].name, a)) return !0;
						return !1
					}, f.prototype.advanceTime = function(a) {
						if (this._isPlaying) {
							a *= this.timeScale;
							var c, d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, b = this._armature._boneList.length,
								e = b;
							for (b--; e--;) {
								for (g = this._armature._boneList[e], h = g.name, i = 1, q = p = o = n = m = l = k = j = 0, c = this._animationLayer.length; c--;) {
									for (r = 0, s = this._animationLayer[c], f = s.length, d = 0; u8l.W6o(d, f); d++) t = s[d], u8l.s6o(e, b) && t.advanceTime(a) ? (this.removeState(t), d--, f--) : (u = t._timelineStates[h]) && u.tweenActive && (t = u8l.w6o(t._fadeWeight, t.weight, i), v = u.transform, u = u.pivot, j += u8l.l9o(v.x, t), k += u8l.P9o(v.y, t), l += u8l.V9o(v.skewX, t), m += u8l.n9o(v.skewY, t), n += u8l.L9o(v.scaleX, t), o += u8l.m9o(v.scaleY, t), p += u8l.v9o(u.x, t), q += u8l.h9o(u.y, t), r += t);
									if (u8l.k9o(r, i)) break;
									i -= r
								}
								v = g.tween, u = g._tweenPivot, v.x = j, v.y = k, v.skewX = l, v.skewY = m, v.scaleX = n, v.scaleY = o, u.x = p, u.y = q
							}
						}
					}, f.prototype.addLayer = function(a) {
						return u8l.z9o(a, this._animationLayer.length) && (a = this._animationLayer.length, this._animationLayer[a] = []), a
					}, f.prototype.addState = function(a) {
						this._animationLayer[a.layer].push(a)
					}, f.prototype.removeState = function(a) {
						var b = a.layer,
							c = this._animationLayer[b];
						c.splice(c.indexOf(a), u8l.K1F), h._returnObject(a), u8l.S9o(0, c.length) && u8l.b9o(b, this._animationLayer.length - 1) && this._animationLayer.length--
					}, f.NONE = e, f.SAME_LAYER = d, f.SAME_GROUP = c, f.SAME_LAYER_AND_GROUP = b, f.ALL = a, f
				}(), d(f)
			}(a.animation || (a.animation = {})), l = a.animation,
			function(a) {
				var u, v, w, x, y, z, A, B, C, D, E, c = function(b) {
						a.DisplayData = b
					},
					f = function(b) {
						a.SkeletonData = b
					},
					g = function(b) {
						a.SkinData = b
					},
					h = function(b) {
						a.ArmatureData = b
					},
					i = function(b) {
						a.DBTransform = b
					},
					k = function(b) {
						a.SlotData = b
					},
					l = function(b) {
						a.AnimationData = b
					},
					m = function(b) {
						a.BoneData = b
					},
					o = function(b) {
						a.TransformTimeline = b
					},
					p = function(b) {
						a.Frame = b
					},
					q = function(b) {
						a.TransformFrame = b
					},
					r = function(b) {
						a.DataParser = b
					},
					s = function(b) {
						a.Timeline = b
					},
					t = function() {
						function a() {
							this.skewY = this.skewX = this.y = this.x = u8l.r1F, this.scaleY = this.scaleX = u8l.K1F
						}
						return a.prototype.getRotation = function() {
							return this.skewX
						}, a.prototype.setRotation = function(a) {
							this.skewX = this.skewY = a
						}, a.prototype.copy = function(a) {
							this.x = a.x, this.y = a.y, this.skewX = a.skewX, this.skewY = a.skewY, this.scaleX = a.scaleX, this.scaleY = a.scaleY
						}, a.prototype.toString = function() {
							var a = " scaleY=",
								b = " scaleX=",
								c = " skewY=",
								f = " skewX=",
								g = "[DBTransform (x=";
							return g + this.x + e + this.y + f + this.skewX + c + this.skewY + b + this.scaleX + a + this.scaleY + d
						}, a
					}();
				i(t), u = function() {
					function a() {
						this.duration = this.position = 0
					}
					return a.prototype.dispose = function() {}, a
				}(), p(u), v = function(a) {
					function b() {
						a.call(this), this.displayIndex = this.tweenRotate = this.tweenEasing = u8l.r1F, this.zOrder = 0 / 0, this.visible = !u8l.r1F, this.global = new t, this.transform = new t, this.pivot = new j.Point
					}
					return __extends(b, a), b.prototype.dispose = function() {
						a.prototype.dispose.call(this), this.color = this.pivot = this.transform = this.global = null
					}, b
				}(u), q(v), w = function() {
					function a() {
						this._frameList = [], this.duration = 0, this.scale = 1
					}
					return a.prototype.getFrameList = function() {
						return this._frameList
					}, a.prototype.dispose = function() {
						for (var a = this._frameList.length; a--;) this._frameList[a].dispose();
						this._frameList.length = 0, this._frameList = null
					}, a.prototype.addFrame = function(a) {
						if (!a) throw Error();
						u8l.d9o(u8l.r1F, this._frameList.indexOf(a)) ? this._frameList[this._frameList.length] = a : throwError()
					}, a
				}(), s(w), x = function(a) {
					function b() {
						a.call(this), this.originTransform = new t, this.originPivot = new j.Point, this.offset = u8l.r1F, this.transformed = !u8l.K1F
					}
					return __extends(b, a), b.prototype.dispose = function() {
						u8l.M9o(this, b.HIDE_TIMELINE) && (a.prototype.dispose.call(this), this.originPivot = this.originTransform = u8l.S4s)
					}, b.HIDE_TIMELINE = new b, b
				}(w), o(x), y = function(a) {
					function b() {
						a.call(this), this.loop = this.frameRate = u8l.r1F, this.tweenEasing = 0 / 0, this.fadeInTime = u8l.r1F, this._timelines = {}
					}
					return __extends(b, a), b.prototype.getTimelines = function() {
						return this._timelines
					}, b.prototype.dispose = function() {
						a.prototype.dispose.call(this);
						for (var b in this._timelines) this._timelines[b].dispose();
						this._timelines = u8l.S4s
					}, b.prototype.getTimeline = function(a) {
						return this._timelines[a]
					}, b.prototype.addTimeline = function(a, b) {
						if (!a) throw Error();
						this._timelines[b] = a
					}, b
				}(w), l(y), z = function() {
					function d() {
						this.transform = new t
					}
					var a = "image",
						c = function(a) {
							d.IMAGE = a
						},
						e = function(a) {
							d.ARMATURE = a
						};
					return d.prototype.dispose = function() {
						this.pivot = this.transform = null
					}, e(b), c(a), d
				}(), c(z), A = function() {
					function a() {
						this._displayDataList = [], this.zOrder = u8l.r1F
					}
					return a.prototype.getDisplayDataList = function() {
						return this._displayDataList
					}, a.prototype.dispose = function() {
						for (var a = this._displayDataList.length; a--;) this._displayDataList[a].dispose();
						this._displayDataList.length = 0, this._displayDataList = null
					}, a.prototype.addDisplayData = function(a) {
						if (!a) throw Error();
						u8l.W9o(u8l.r1F, this._displayDataList.indexOf(a)) ? this._displayDataList[this._displayDataList.length] = a : throwError()
					}, a.prototype.getDisplayData = function(a) {
						for (var b = this._displayDataList.length; b--;)
							if (u8l.s9o(this._displayDataList[b].name, a)) return this._displayDataList[b];
						return null
					}, a
				}(), k(A), B = function() {
					function a() {
						this.length = 0, this.global = new t, this.transform = new t
					}
					return a.prototype.dispose = function() {
						this.transform = this.global = null
					}, a
				}(), m(B), C = function() {
					function a() {
						this._slotDataList = []
					}
					return a.prototype.getSlotDataList = function() {
						return this._slotDataList
					}, a.prototype.dispose = function() {
						for (var a = this._slotDataList.length; a--;) this._slotDataList[a].dispose();
						this._slotDataList.length = 0, this._slotDataList = null
					}, a.prototype.getSlotData = function(a) {
						for (var b = this._slotDataList.length; b--;)
							if (u8l.w9o(this._slotDataList[b].name, a)) return this._slotDataList[b];
						return null
					}, a.prototype.addSlotData = function(a) {
						if (!a) throw Error();
						u8l.B9o(u8l.r1F, this._slotDataList.indexOf(a)) ? this._slotDataList[this._slotDataList.length] = a : throwError()
					}, a
				}(), g(C), D = function() {
					function a() {
						this._boneDataList = [], this._skinDataList = [], this._animationDataList = []
					}
					return a.prototype.getBoneDataList = function() {
						return this._boneDataList
					}, a.prototype.getSkinDataList = function() {
						return this._skinDataList
					}, a.prototype.getAnimationDataList = function() {
						return this._animationDataList
					}, a.prototype.dispose = function() {
						for (var a = this._boneDataList.length; a--;) this._boneDataList[a].dispose();
						for (a = this._skinDataList.length; a--;) this._skinDataList[a].dispose();
						for (a = this._animationDataList.length; a--;) this._animationDataList[a].dispose();
						this._boneDataList.length = 0, this._skinDataList.length = 0, this._animationDataList.length = 0, this._animationDataList = this._skinDataList = this._boneDataList = null
					}, a.prototype.getBoneData = function(a) {
						for (var b = this._boneDataList.length; b--;)
							if (u8l.x4A(this._boneDataList[b].name, a)) return this._boneDataList[b];
						return null
					}, a.prototype.getSkinData = function(a) {
						if (!a) return this._skinDataList[0];
						for (var b = this._skinDataList.length; b--;)
							if (u8l.N4A(this._skinDataList[b].name, a)) return this._skinDataList[b];
						return null
					}, a.prototype.getAnimationData = function(a) {
						for (var b = this._animationDataList.length; b--;)
							if (u8l.Q4A(this._animationDataList[b].name, a)) return this._animationDataList[b];
						return null
					}, a.prototype.addBoneData = function(a) {
						if (!a) throw Error();
						u8l.u4A(u8l.r1F, this._boneDataList.indexOf(a)) ? this._boneDataList[this._boneDataList.length] = a : throwError()
					}, a.prototype.addSkinData = function(a) {
						if (!a) throw Error();
						u8l.E4A(u8l.r1F, this._skinDataList.indexOf(a)) ? this._skinDataList[this._skinDataList.length] = a : throwError()
					}, a.prototype.addAnimationData = function(a) {
						if (!a) throw Error();
						u8l.g4A(0, this._animationDataList.indexOf(a)) && (this._animationDataList[this._animationDataList.length] = a)
					}, a.prototype.sortBoneDataList = function() {
						var b, c, d, e, a = this._boneDataList.length;
						if (u8l.r4A(0, a)) {
							for (b = []; a--;) {
								for (c = this._boneDataList[a], d = 0, e = c; e && e.parent;) d++, e = this.getBoneData(e.parent);
								b[a] = {
									level: d,
									boneData: c
								}
							}
							for (b.sort(this.sortBoneData), a = b.length; a--;) this._boneDataList[a] = b[a].boneData
						}
					}, a.prototype.sortBoneData = function(a, b) {
						return u8l.p4A(a.level, b.level) ? u8l.K1F : -u8l.K1F
					}, a
				}(), h(D), E = function() {
					function a() {
						this._armatureDataList = [], this._subTexturePivots = {}
					}
					return a.prototype.getArmatureNames = function() {
						var b, a = [];
						for (b in this._armatureDataList) a[a.length] = this._armatureDataList[b].name;
						return a
					}, a.prototype.getArmatureDataList = function() {
						return this._armatureDataList
					}, a.prototype.dispose = function() {
						for (var a in this._armatureDataList) this._armatureDataList[a].dispose();
						this._armatureDataList.length = 0, this._subTexturePivots = this._armatureDataList = u8l.S4s
					}, a.prototype.getArmatureData = function(a) {
						for (var b = this._armatureDataList.length; b--;)
							if (u8l.O4A(this._armatureDataList[b].name, a)) return this._armatureDataList[b];
						return null
					}, a.prototype.addArmatureData = function(a) {
						if (!a) throw Error();
						u8l.H4A(u8l.r1F, this._armatureDataList.indexOf(a)) ? this._armatureDataList[this._armatureDataList.length] = a : throwError()
					}, a.prototype.removeArmatureData = function(a) {
						a = this._armatureDataList.indexOf(a), u8l.t4A(u8l.r1F, a) && this._armatureDataList.splice(a, u8l.K1F)
					}, a.prototype.removeArmatureDataByName = function(a) {
						for (var b = this._armatureDataList.length; b--;) u8l.F4A(this._armatureDataList[b].name, a) && this._armatureDataList.splice(b, 1)
					}, a.prototype.getSubTexturePivot = function(a) {
						return this._subTexturePivots[a]
					}, a.prototype.addSubTexturePivot = function(a, b, c) {
						var d = this._subTexturePivots[c];
						return d ? (d.x = a, d.y = b) : this._subTexturePivots[c] = d = new j.Point(a, b), d
					}, a.prototype.removeSubTexturePivot = function(a) {
						if (a) delete this._subTexturePivots[a];
						else
							for (a in this._subTexturePivots) delete this._subTexturePivots[a]
					}, a
				}(), f(E), w = function() {
					function a() {}
					return a.parseTextureAtlasData = function(a, b) {
						var c, e, d, f, g;
						if (u8l.e1F === typeof b && (b = u8l.K1F), !a) throw Error();
						c = {}, c.__name = a[n.ConstValues.A_NAME], d = a[n.ConstValues.SUB_TEXTURE];
						for (e in d) f = d[e], g = f[n.ConstValues.A_NAME], f = new j.Rectangle(u8l.Z4A(Number(f[n.ConstValues.A_X]), b), u8l.q4A(Number(f[n.ConstValues.A_Y]), b), u8l.X4A(Number(f[n.ConstValues.A_WIDTH]), b), u8l.U4A(Number(f[n.ConstValues.A_HEIGHT]), b)), c[g] = f;
						return c
					}, a.parseSkeletonData = function(b) {
						var c, d, e;
						if (!b) throw Error();
						c = Number(b[n.ConstValues.A_FRAME_RATE]), d = new E, d.name = b[n.ConstValues.A_NAME], b = b[n.ConstValues.ARMATURE];
						for (e in b) d.addArmatureData(a.parseArmatureData(b[e], d, c));
						return d
					}, a.parseArmatureData = function(b, c, d) {
						var g, f, e = new D;
						e.name = b[n.ConstValues.A_NAME], f = b[n.ConstValues.BONE];
						for (g in f) e.addBoneData(a.parseBoneData(f[g]));
						f = b[n.ConstValues.SKIN];
						for (g in f) e.addSkinData(a.parseSkinData(f[g], c));
						n.DBDataUtil.transformArmatureData(e), e.sortBoneDataList(), b = b[n.ConstValues.ANIMATION];
						for (g in b) e.addAnimationData(a.parseAnimationData(b[g], e, d));
						return e
					}, a.parseBoneData = function(b) {
						var c = new B;
						return c.name = b[n.ConstValues.A_NAME], c.parent = b[n.ConstValues.A_PARENT], c.length = Number(b[n.ConstValues.A_LENGTH]) || 0, a.parseTransform(b[n.ConstValues.TRANSFORM], c.global), c.transform.copy(c.global), c
					}, a.parseSkinData = function(b, c) {
						var f, e, d = new C;
						d.name = b[n.ConstValues.A_NAME], e = b[n.ConstValues.SLOT];
						for (f in e) d.addSlotData(a.parseSlotData(e[f], c));
						return d
					}, a.parseSlotData = function(b, c) {
						var f, e, d = new A;
						d.name = b[n.ConstValues.A_NAME], d.parent = b[n.ConstValues.A_PARENT], d.zOrder = Number(b[n.ConstValues.A_Z_ORDER]), e = b[n.ConstValues.DISPLAY];
						for (f in e) d.addDisplayData(a.parseDisplayData(e[f], c));
						return d
					}, a.parseDisplayData = function(b, c) {
						var d = new z;
						return d.name = b[n.ConstValues.A_NAME], d.type = b[n.ConstValues.A_TYPE], d.pivot = c.addSubTexturePivot(u8l.r1F, u8l.r1F, d.name), a.parseTransform(b[n.ConstValues.TRANSFORM], d.transform, d.pivot), d
					}, a.parseAnimationData = function(b, c, d) {
						var f, g, h, e = new y;
						e.name = b[n.ConstValues.A_NAME], e.frameRate = d, e.loop = Number(b[n.ConstValues.A_LOOP]) || u8l.r1F, e.fadeInTime = Number(b[n.ConstValues.A_FADE_IN_TIME]), e.duration = u8l.T4A(Number(b[n.ConstValues.A_DURATION]), d), e.scale = Number(b[n.ConstValues.A_SCALE]), b.hasOwnProperty(n.ConstValues.A_TWEEN_EASING) ? (f = b[n.ConstValues.A_TWEEN_EASING], e.tweenEasing = void u8l.r1F == f || u8l.y5A(u8l.S4s, f) ? 0 / 0 : Number(f)) : e.tweenEasing = 0 / 0, a.parseTimeline(b, e, a.parseMainFrame, d), f = b[n.ConstValues.TIMELINE];
						for (h in f) g = f[h], b = a.parseTransformTimeline(g, e.duration, d), g = g[n.ConstValues.A_NAME], e.addTimeline(b, g);
						return n.DBDataUtil.addHideTimeline(e, c), n.DBDataUtil.transformAnimationData(e, c), e
					}, a.parseTimeline = function(a, b, c, d) {
						var f, g, e = u8l.r1F;
						a = a[n.ConstValues.FRAME];
						for (g in a) f = c(a[g], d), f.position = e, b.addFrame(f), e += f.duration;
						f && (f.duration = u8l.C5A(b.duration, f.position))
					}, a.parseTransformTimeline = function(b, c, d) {
						var e = new x;
						return e.duration = c, a.parseTimeline(b, e, a.parseTransformFrame, d), e.scale = Number(b[n.ConstValues.A_SCALE]), e.offset = Number(b[n.ConstValues.A_OFFSET]), e
					}, a.parseFrame = function(a, b, c) {
						b.duration = u8l.o5A(Number(a[n.ConstValues.A_DURATION]), c), b.action = a[n.ConstValues.A_ACTION], b.event = a[n.ConstValues.A_EVENT], b.sound = a[n.ConstValues.A_SOUND]
					}, a.parseMainFrame = function(b, c) {
						var d = new u;
						return a.parseFrame(b, d, c), d
					}, a.parseTransformFrame = function(b, c) {
						var f, d = .01,
							e = new v;
						return a.parseFrame(b, e, c), e.visible = u8l.R5A(u8l.K1F, Number(b[n.ConstValues.A_HIDE])), b.hasOwnProperty(n.ConstValues.A_TWEEN_EASING) ? (f = b[n.ConstValues.A_TWEEN_EASING], e.tweenEasing = void u8l.r1F == f || u8l.I5A(u8l.S4s, f) ? 0 / 0 : Number(f)) : e.tweenEasing = u8l.r1F, e.tweenRotate = Number(b[n.ConstValues.A_TWEEN_ROTATE]) || u8l.r1F, e.displayIndex = Number(b[n.ConstValues.A_DISPLAY_INDEX]) || u8l.r1F, e.zOrder = Number(b[n.ConstValues.A_Z_ORDER]) || u8l.r1F, a.parseTransform(b[n.ConstValues.TRANSFORM], e.global, e.pivot), e.transform.copy(e.global), (f = b[n.ConstValues.COLOR_TRANSFORM]) && (e.color = new j.ColorTransform, e.color.alphaOffset = Number(f[n.ConstValues.A_ALPHA_OFFSET]), e.color.redOffset = Number(f[n.ConstValues.A_RED_OFFSET]), e.color.greenOffset = Number(f[n.ConstValues.A_GREEN_OFFSET]), e.color.blueOffset = Number(f[n.ConstValues.A_BLUE_OFFSET]), e.color.alphaMultiplier = u8l.G5A(d, Number(f[n.ConstValues.A_ALPHA_MULTIPLIER])), e.color.redMultiplier = u8l.K5A(d, Number(f[n.ConstValues.A_RED_MULTIPLIER])), e.color.greenMultiplier = u8l.A5A(d, Number(f[n.ConstValues.A_GREEN_MULTIPLIER])), e.color.blueMultiplier = u8l.D5A(d, Number(f[n.ConstValues.A_BLUE_MULTIPLIER]))), e
					}, a.parseTransform = function(a, b, c) {
						u8l.e1F === typeof c && (c = u8l.S4s), a && (b && (b.x = Number(a[n.ConstValues.A_X]), b.y = Number(a[n.ConstValues.A_Y]), b.skewX = u8l.f5A(Number(a[n.ConstValues.A_SKEW_X]), n.ConstValues.ANGLE_TO_RADIAN), b.skewY = u8l.Y5A(Number(a[n.ConstValues.A_SKEW_Y]), n.ConstValues.ANGLE_TO_RADIAN), b.scaleX = Number(a[n.ConstValues.A_SCALE_X]), b.scaleY = Number(a[n.ConstValues.A_SCALE_Y])), c && (c.x = Number(a[n.ConstValues.A_PIVOT_X]), c.y = Number(a[n.ConstValues.A_PIVOT_Y])))
					}, a
				}(), r(w)
			}(a.objects || (a.objects = {})), m = a.objects,
			function(b) {
				var c = function(a) {
						b.BaseFactory = a
					},
					d = function(b) {
						function d() {
							b.call(this), this._dataDic = {}, this._textureAtlasDic = {}, this._textureAtlasLoadingDic = {}
						}
						var c = "Unnamed data!";
						return __extends(d, b), d.prototype.getSkeletonData = function(a) {
							return this._dataDic[a]
						}, d.prototype.addSkeletonData = function(a, b) {
							if (!a) throw Error();
							if (b = b || a.name, !b) throw Error(c);
							this._dataDic[b] = a
						}, d.prototype.removeSkeletonData = function(a) {
							delete this._dataDic[a]
						}, d.prototype.getTextureAtlas = function(a) {
							return this._textureAtlasDic[a]
						}, d.prototype.addTextureAtlas = function(a, b) {
							if (!a) throw Error();
							if (b = b || a.name, !b) throw Error(c);
							this._textureAtlasDic[b] = a
						}, d.prototype.removeTextureAtlas = function(a) {
							delete this._textureAtlasDic[a]
						}, d.prototype.dispose = function(a) {
							if (u8l.e1F === typeof a && (a = !u8l.r1F), a) {
								for (var b in this._dataDic) this._dataDic[b].dispose();
								for (b in this._textureAtlasDic) this._textureAtlasDic[b].dispose()
							}
							this._currentTextureAtlasName = this._currentDataName = this._textureAtlasLoadingDic = this._textureAtlasDic = this._dataDic = u8l.S4s
						}, d.prototype.buildArmature = function(b, c, d, e, f) {
							var g, h, i, j, l, k, n;
							if (d) g = this._dataDic[d], g && (h = g.getArmatureData(b));
							else
								for (d in this._dataDic)
									if (g = this._dataDic[d], h = g.getArmatureData(b)) break; if (!h) return null;
							this._currentDataName = d, this._currentTextureAtlasName = e || d, e = this._generateArmature(), e.name = b, k = h.getBoneDataList();
							for (l in k) j = k[l], i = new a.Bone, i.name = j.name, i.origin.copy(j.transform), h.getBoneData(j.parent) ? e.addChild(i, j.parent) : e.addChild(i, null);
							if (c && u8l.e5A(c, b) && (n = g.getArmatureData(c), !n))
								for (d in this._dataDic)
									if (g = this._dataDic[d], n = g.getArmatureData(c)) break;
							if (n ? e.animation.setAnimationDataList(n.getAnimationDataList()) : e.animation.setAnimationDataList(h.getAnimationDataList()), i = h.getSkinData(f), !i) throw Error();
							b = [], d = i.getSlotDataList();
							for (l in d)
								if (g = d[l], i = e.getBone(g.parent)) {
									for (f = g.getDisplayDataList(), c = this._generateSlot(), c.name = g.name, c._originZOrder = g.zOrder, c._dislayDataList = f, b.length = 0, g = f.length; g--;) switch (h = f[g], h.type) {
										case m.DisplayData.ARMATURE:
											(h = this.buildArmature(h.name, null, this._currentDataName, this._currentTextureAtlasName, null)) && (b[g] = h);
											break;
										default:
											b[g] = this._generateDisplay(this._textureAtlasDic[this._currentTextureAtlasName], h.name, h.pivot.x, h.pivot.y)
									}
									c.setDisplayList(b), c._changeDisplay(0), i.addChild(c)
								}
							return e._slotsZOrderChanged = !0, e.advanceTime(0), e
						}, d.prototype.getTextureDisplay = function(a, b, c, d) {
							if (b) var e = this._textureAtlasDic[b];
							if (!e && !b)
								for (b in this._textureAtlasDic) {
									if (e = this._textureAtlasDic[b], e.getRegion(a)) break;
									e = u8l.S4s
								}
							return e ? ((isNaN(c) || isNaN(d)) && (b = this._dataDic[b]) && (b = b.getSubTexturePivot(a)) && (c = b.x, d = b.y), this._generateDisplay(e, a, c, d)) : u8l.S4s
						}, d.prototype._generateArmature = function() {
							return u8l.S4s
						}, d.prototype._generateSlot = function() {
							return u8l.S4s
						}, d.prototype._generateDisplay = function() {
							return u8l.S4s
						}, d
					}(k.EventDispatcher);
				c(d)
			}(a.factorys || (a.factorys = {})),
			function(a) {
				var h, d = function(b) {
						a.TransformUtil = b
					},
					e = function(b) {
						a.DBDataUtil = b
					},
					f = function(b) {
						a.ConstValues = b
					},
					g = function() {
						function Sb() {}
						var a = "bM",
							d = "gM",
							e = "rM",
							f = "aM",
							g = "bO",
							h = "gO",
							i = "rO",
							j = "aO",
							k = "pY",
							l = "pX",
							m = "scY",
							n = "scX",
							o = "skY",
							p = "skX",
							q = "y",
							r = "height",
							s = "width",
							t = "z",
							u = "displayIndex",
							v = "tweenRotate",
							w = "tweenEasing",
							x = "hide",
							y = "action",
							z = "event",
							A = "loop",
							B = "offset",
							C = "scale",
							D = "duration",
							E = "fadeInTime",
							F = "type",
							G = "length",
							H = "parent",
							I = "name",
							J = "frameRate",
							K = "imagePath",
							L = "version",
							M = "SubTexture",
							N = "TextureAtlas",
							O = "colorTransform",
							P = "transform",
							Q = "frame",
							R = "timeline",
							S = "animation",
							T = "display",
							U = "slot",
							V = "bone",
							W = "skin",
							X = "dragonBones",
							Y = function(a) {
								Sb.A_NAME = a
							},
							Z = function(a) {
								Sb.A_SCALE_Y = a
							},
							$ = function(a) {
								Sb.A_PIVOT_Y = a
							},
							_ = function(a) {
								Sb.A_IMAGE_PATH = a
							},
							ab = function(a) {
								Sb.TIMELINE = a
							},
							bb = function(a) {
								Sb.SKIN = a
							},
							cb = function(a) {
								Sb.A_RED_OFFSET = a
							},
							db = function(a) {
								Sb.A_GREEN_OFFSET = a
							},
							eb = function(a) {
								Sb.A_SCALE = a
							},
							fb = function(a) {
								Sb.A_LOOP = a
							},
							gb = function(a) {
								Sb.SUB_TEXTURE = a
							},
							hb = function(a) {
								Sb.A_VERSION = a
							},
							ib = function(a) {
								Sb.TEXTURE_ATLAS = a
							},
							jb = function(a) {
								Sb.A_SKEW_Y = a
							},
							kb = function(a) {
								Sb.A_SOUND = a
							},
							lb = function(a) {
								Sb.A_TYPE = a
							},
							mb = function(a) {
								Sb.A_Y = a
							},
							nb = function(a) {
								Sb.A_OFFSET = a
							},
							ob = function(a) {
								Sb.A_DURATION = a
							},
							pb = function(a) {
								Sb.DISPLAY = a
							},
							qb = function(a) {
								Sb.A_TWEEN_EASING = a
							},
							rb = function(a) {
								Sb.A_HIDE = a
							},
							sb = function(a) {
								Sb.A_FADE_IN_TIME = a
							},
							tb = function(a) {
								Sb.A_SCALE_X = a
							},
							ub = function(a) {
								Sb.A_X = a
							},
							vb = function(a) {
								Sb.SLOT = a
							},
							wb = function(a) {
								Sb.A_BLUE_MULTIPLIER = a
							},
							xb = function(a) {
								Sb.A_ACTION = a
							},
							yb = function(a) {
								Sb.A_EVENT = a
							},
							zb = function(a) {
								Sb.DRAGON_BONES = a
							},
							Ab = function(a) {
								Sb.A_DISPLAY_INDEX = a
							},
							Bb = function(a) {
								Sb.COLOR_TRANSFORM = a
							},
							Cb = function(a) {
								Sb.A_LENGTH = a
							},
							Db = function(a) {
								Sb.ARMATURE = a
							},
							Eb = function(a) {
								Sb.A_GREEN_MULTIPLIER = a
							},
							Fb = function(a) {
								Sb.A_TWEEN_ROTATE = a
							},
							Gb = function(a) {
								Sb.A_HEIGHT = a
							},
							Hb = function(a) {
								Sb.ANIMATION = a
							},
							Ib = function() {
								Sb.ANGLE_TO_RADIAN = u8l.J5A(Math.PI, u8l.g6F)
							},
							Jb = function(a) {
								Sb.A_PIVOT_X = a
							},
							Kb = function(a) {
								Sb.A_WIDTH = a
							},
							Lb = function(a) {
								Sb.A_ALPHA_MULTIPLIER = a
							},
							Mb = function(a) {
								Sb.A_BLUE_OFFSET = a
							},
							Nb = function(a) {
								Sb.A_PARENT = a
							},
							Ob = function(a) {
								Sb.A_RED_MULTIPLIER = a
							},
							Pb = function(a) {
								Sb.A_ALPHA_OFFSET = a
							},
							Qb = function(a) {
								Sb.TRANSFORM = a
							},
							Rb = function(a) {
								Sb.A_SKEW_X = a
							},
							Tb = function(a) {
								Sb.A_Z_ORDER = a
							},
							Ub = function(a) {
								Sb.A_FRAME_RATE = a
							},
							Vb = function(a) {
								Sb.FRAME = a
							},
							Wb = function(a) {
								Sb.BONE = a
							};
						return Ib(), zb(X), Db(b), bb(W), Wb(V), vb(U), pb(T), Hb(S), ab(R), Vb(Q), Qb(P), Bb(O), ib(N), gb(M), hb(L), _(K), Ub(J), Y(I), Nb(H), Cb(G), lb(F), sb(E), ob(D), eb(C), nb(B), fb(A), yb(z), kb(c), xb(y), rb(x), qb(w), Fb(v), Ab(u), Tb(t), Kb(s), Gb(r), ub(u8l.F5s), mb(q), Rb(p), jb(o), tb(n), Z(m), Jb(l), $(k), Pb(j), cb(i), db(h), Mb(g), Lb(f), Ob(e), Eb(d), wb(a), Sb
					}();
				f(g), h = function() {
					function b() {}
					var a = function() {
						b.DOUBLE_PI = u8l.i5A(u8l.v1F, Math.PI)
					};
					return b.transformPointWithParent = function(a, c) {
						var e, f, d = b._helpMatrix;
						b.transformToMatrix(c, d), d.invert(), e = a.x, f = a.y, a.x = u8l.c5A(d.a, e) + u8l.j5A(d.c, f) + d.tx, a.y = u8l.a5A(d.d, f) + u8l.l0A(d.b, e) + d.ty, a.skewX = b.formatRadian(u8l.P0A(a.skewX, c.skewX)), a.skewY = b.formatRadian(u8l.V0A(a.skewY, c.skewY))
					}, b.transformToMatrix = function(a, b) {
						b.a = u8l.n0A(a.scaleX, Math.cos(a.skewY)), b.b = u8l.L0A(a.scaleX, Math.sin(a.skewY)), b.c = -a.scaleY * Math.sin(a.skewX), b.d = u8l.m0A(a.scaleY, Math.cos(a.skewX)), b.tx = a.x, b.ty = a.y
					}, b.formatRadian = function(a) {
						return a %= b.DOUBLE_PI, u8l.v0A(a, Math.PI) && (a -= b.DOUBLE_PI), a < -Math.PI && (a += b.DOUBLE_PI), a
					}, a(), b._helpMatrix = new j.Matrix, b
				}(), d(h), g = function() {
					function a() {}
					return a.transformArmatureData = function(a) {
						for (var d, e, b = a.getBoneDataList(), c = b.length; c--;) d = b[c], d.parent && (e = a.getBoneData(d.parent)) && (d.transform.copy(d.global), h.transformPointWithParent(d.transform, e.global))
					}, a.transformArmatureDataAnimations = function(b) {
						for (var c = b.getAnimationDataList(), d = c.length; d--;) a.transformAnimationData(c[d], b)
					}, a.transformAnimationData = function(b, c) {
						var g, i, j, k, l, m, n, o, p, q, d, e, f, r, s, t;
						for (d = c.getSkinData(null), e = c.getBoneDataList(), d = d.getSlotDataList(), f = e.length; f--;)
							if (g = e[f], i = b.getTimeline(g.name)) {
								j = null;
								for (r in d)
									if (j = d[r], u8l.h0A(j.parent, g.name)) break;
								for (k = g.parent ? b.getTimeline(g.parent) : null, l = i.getFrameList(), o = n = m = null, q = l.length, s = 0; u8l.k0A(s, q); s++) p = l[s], k ? (a._helpTransform1.copy(p.global), a.getTimelineTransform(k, p.position, a._helpTransform2), h.transformPointWithParent(a._helpTransform1, a._helpTransform2), p.transform.copy(a._helpTransform1)) : p.transform.copy(p.global), p.transform.x -= g.transform.x, p.transform.y -= g.transform.y, p.transform.skewX -= g.transform.skewX, p.transform.skewY -= g.transform.skewY, p.transform.scaleX -= g.transform.scaleX, p.transform.scaleY -= g.transform.scaleY, !i.transformed && j && (p.zOrder -= j.zOrder), m || (m = i.originTransform, m.copy(p.transform), m.skewX = h.formatRadian(m.skewX), m.skewY = h.formatRadian(m.skewY), n = i.originPivot, n.x = p.pivot.x, n.y = p.pivot.y), p.transform.x -= m.x, p.transform.y -= m.y, p.transform.skewX = h.formatRadian(u8l.z0A(p.transform.skewX, m.skewX)), p.transform.skewY = h.formatRadian(u8l.S0A(p.transform.skewY, m.skewY)), p.transform.scaleX -= m.scaleX, p.transform.scaleY -= m.scaleY, i.transformed || (p.pivot.x -= n.x, p.pivot.y -= n.y), o && (t = u8l.b0A(p.transform.skewX, o.transform.skewX), o.tweenRotate ? u8l.d0A(0, o.tweenRotate) ? (u8l.M0A(0, t) && (p.transform.skewX += u8l.W0A(2, Math.PI), p.transform.skewY += u8l.s0A(2, Math.PI)), u8l.w0A(1, o.tweenRotate) && (p.transform.skewX += u8l.B0A(2, Math.PI, o.tweenRotate - 1), p.transform.skewY += u8l.P8A(2, Math.PI, o.tweenRotate - 1))) : (u8l.o8A(0, t) && (p.transform.skewX -= u8l.R8A(2, Math.PI), p.transform.skewY -= u8l.I8A(2, Math.PI)), u8l.G8A(1, o.tweenRotate) && (p.transform.skewX += u8l.K8A(2, Math.PI, o.tweenRotate + 1), p.transform.skewY += u8l.p8A(2, Math.PI, o.tweenRotate + 1))) : (p.transform.skewX = o.transform.skewX + h.formatRadian(u8l.z8A(p.transform.skewX, o.transform.skewX)), p.transform.skewY = o.transform.skewY + h.formatRadian(u8l.S8A(p.transform.skewY, o.transform.skewY)))), o = p;
								i.transformed = !0
							}
					}, a.getTimelineTransform = function(a, b, c) {
						for (var f, d = a.getFrameList(), e = d.length; e--;)
							if (a = d[e], u8l.b8A(a.position, b) && u8l.d8A(a.position + a.duration, b)) {
								f = a.tweenEasing, u8l.M8A(e, d.length - 1) || isNaN(f) || u8l.W8A(b, a.position) ? c.copy(a.global) : (b = u8l.s8A(b - a.position, a.duration), f && (b = l.TimelineState.getEaseValue(b, f)), d = d[e + 1], c.x = a.global.x + u8l.w8A(d.global.x - a.global.x, b), c.y = a.global.y + u8l.B8A(d.global.y - a.global.y, b), c.skewX = h.formatRadian(a.global.skewX + u8l.x3A(d.global.skewX - a.global.skewX, b)), c.skewY = h.formatRadian(a.global.skewY + u8l.N3A(d.global.skewY - a.global.skewY, b)), c.scaleX = a.global.scaleX + u8l.Q3A(d.global.scaleX - a.global.scaleX, b), c.scaleY = a.global.scaleY + u8l.u3A(d.global.scaleY - a.global.scaleY, b));
								break
							}
					}, a.addHideTimeline = function(a, b) {
						for (var e, c = b.getBoneDataList(), d = c.length; d--;) e = c[d], e = e.name, a.getTimeline(e) || a.addTimeline(m.TransformTimeline.HIDE_TIMELINE, e)
					}, a._helpTransform1 = new m.DBTransform, a._helpTransform2 = new m.DBTransform, a
				}(), e(g)
			}(a.utils || (a.utils = {})), n = a.utils, o = function() {
				function a() {
					this.global = new m.DBTransform, this.origin = new m.DBTransform, this.offset = new m.DBTransform, this.tween = new m.DBTransform, this.tween.scaleX = this.tween.scaleY = u8l.r1F, this._globalTransformMatrix = new j.Matrix, this._visible = !u8l.r1F, this._isDisplayOnStage = this._isColorChanged = !u8l.K1F, this._scaleType = u8l.r1F, this.fixedRotation = !u8l.K1F
				}
				return a.prototype.getVisible = function() {
					return this._visible
				}, a.prototype.setVisible = function(a) {
					this._visible = a
				}, a.prototype._setParent = function(a) {
					this.parent = a
				}, a.prototype._setArmature = function(a) {
					this.armature && this.armature._removeDBObject(this), (this.armature = a) && this.armature._addDBObject(this)
				}, a.prototype.dispose = function() {
					this._globalTransformMatrix = this.tween = this.offset = this.origin = this.global = this.armature = this.parent = u8l.S4s
				}, a.prototype._update = function() {
					if (this.global.scaleX = u8l.E3A(this.origin.scaleX + this.tween.scaleX, this.offset.scaleX), this.global.scaleY = u8l.g3A(this.origin.scaleY + this.tween.scaleY, this.offset.scaleY), this.parent) {
						var a = this.origin.x + this.offset.x + this.tween.x,
							b = this.origin.y + this.offset.y + this.tween.y,
							c = this.parent._globalTransformMatrix;
						this._globalTransformMatrix.tx = this.global.x = u8l.r3A(c.a, a) + u8l.p3A(c.c, b) + c.tx, this._globalTransformMatrix.ty = this.global.y = u8l.O3A(c.d, b) + u8l.H3A(c.b, a) + c.ty, this.fixedRotation ? (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY) : (this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX + this.parent.global.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY + this.parent.global.skewY), u8l.t3A(this.parent.scaleMode, this._scaleType) && (this.global.scaleX *= this.parent.global.scaleX, this.global.scaleY *= this.parent.global.scaleY)
					} else this._globalTransformMatrix.tx = this.global.x = this.origin.x + this.offset.x + this.tween.x, this._globalTransformMatrix.ty = this.global.y = this.origin.y + this.offset.y + this.tween.y, this.global.skewX = this.origin.skewX + this.offset.skewX + this.tween.skewX, this.global.skewY = this.origin.skewY + this.offset.skewY + this.tween.skewY;
					this._globalTransformMatrix.a = u8l.F3A(this.global.scaleX, Math.cos(this.global.skewY)), this._globalTransformMatrix.b = u8l.Z3A(this.global.scaleX, Math.sin(this.global.skewY)), this._globalTransformMatrix.c = -this.global.scaleY * Math.sin(this.global.skewX), this._globalTransformMatrix.d = u8l.q3A(this.global.scaleY, Math.cos(this.global.skewX))
				}, a
			}(), g(o), p = function(a) {
				function b(b) {
					a.call(this), this._displayBridge = b, this._displayList = [], this._displayIndex = -u8l.K1F, this._scaleType = u8l.K1F, this._offsetZOrder = this._tweenZorder = this._originZOrder = u8l.r1F, this._isHideDisplay = this._isDisplayOnStage = !u8l.K1F
				}
				return __extends(b, a), b.prototype.getZOrder = function() {
					return this._originZOrder + this._tweenZorder + this._offsetZOrder
				}, b.prototype.setZOrder = function(a) {
					u8l.X3A(this.getZOrder(), a) && (this._offsetZOrder = u8l.U3A(a, this._originZOrder, this._tweenZorder), this.armature && (this.armature._slotsZOrderChanged = !u8l.r1F))
				}, b.prototype.getDisplay = function() {
					var a = this._displayList[this._displayIndex];
					return u8l.B3A(a, r) ? a.getDisplay() : a
				}, b.prototype.setDisplay = function(a) {
					this._displayList[this._displayIndex] = a, this._setDisplay(a)
				}, b.prototype.getChildArmature = function() {
					var a = this._displayList[this._displayIndex];
					return u8l.x2A(a, r) ? a : u8l.S4s
				}, b.prototype.setChildArmature = function(a) {
					(this._displayList[this._displayIndex] = a) && this._setDisplay(a.getDisplay())
				}, b.prototype.getDisplayList = function() {
					return this._displayList
				}, b.prototype.setDisplayList = function(a) {
					if (!a) throw Error();
					for (var b = this._displayList.length = a.length; b--;) this._displayList[b] = a[b];
					u8l.N2A(0, this._displayIndex) && (a = this._displayIndex, this._displayIndex = -1, this._changeDisplay(a))
				}, b.prototype._setDisplay = function(a) {
					this._displayBridge.getDisplay() ? this._displayBridge.setDisplay(a) : (this._displayBridge.setDisplay(a), this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -u8l.K1F), this.armature._slotsZOrderChanged = !u8l.r1F)), this.updateChildArmatureAnimation(), this._isDisplayOnStage = !this._isHideDisplay && this._displayBridge.getDisplay() ? !u8l.r1F : !u8l.K1F
				}, b.prototype._changeDisplay = function(a) {
					var b, c;
					u8l.Q2A(0, a) ? this._isHideDisplay || (this._isHideDisplay = !0, this._displayBridge.removeDisplay(), this.updateChildArmatureAnimation()) : (this._isHideDisplay && (this._isHideDisplay = !1, b = !0, this.armature && (this._displayBridge.addDisplay(this.armature.getDisplay(), -1), this.armature._slotsZOrderChanged = !0)), c = this._displayList.length, u8l.u2A(a, c) && u8l.E2A(0, c) && (a = u8l.g2A(c, 1)), u8l.r2A(this._displayIndex, a) ? (this._displayIndex = a, a = this._displayList[this._displayIndex], u8l.p2A(a, r) ? this._setDisplay(a.getDisplay()) : this._setDisplay(a), this._dislayDataList && u8l.O2A(this._displayIndex, this._dislayDataList.length) && this.origin.copy(this._dislayDataList[this._displayIndex].transform)) : b && this.updateChildArmatureAnimation()), this._isDisplayOnStage = !this._isHideDisplay && this._displayBridge.getDisplay() ? !0 : !1
				}, b.prototype.setVisible = function(a) {
					u8l.H2A(a, this._visible) && (this._visible = a, this._updateVisible(this._visible))
				}, b.prototype._setArmature = function(b) {
					a.prototype._setArmature.call(this, b), this.armature ? (this.armature._slotsZOrderChanged = !u8l.r1F, this._displayBridge.addDisplay(this.armature.getDisplay(), -u8l.K1F)) : this._displayBridge.removeDisplay()
				}, b.prototype.dispose = function() {
					this._displayBridge && (a.prototype.dispose.call(this), this._displayBridge.dispose(), this._displayList.length = 0, this._dislayDataList = this._displayList = this._displayBridge = null)
				}, b.prototype._update = function() {
					var b, c, d;
					a.prototype._update.call(this), this._isDisplayOnStage && (b = this.parent._tweenPivot.x, c = this.parent._tweenPivot.y, (b || c) && (d = this.parent._globalTransformMatrix, this._globalTransformMatrix.tx += u8l.t2A(d.a, b) + u8l.F2A(d.c, c), this._globalTransformMatrix.ty += u8l.Z2A(d.b, b) + u8l.q2A(d.d, c)), this._displayBridge.updateTransform(this._globalTransformMatrix, this.global))
				}, b.prototype._updateVisible = function(a) {
					this._displayBridge.setVisible(this.parent.getVisible() && this._visible && a)
				}, b.prototype.updateChildArmatureAnimation = function() {
					var b, a = this.getChildArmature();
					a && (this._isHideDisplay ? (a.animation.stop(), a.animation._lastAnimationState = u8l.S4s) : (b = this.armature ? this.armature.animation.getLastAnimationName() : u8l.S4s, b && a.animation.hasAnimation(b) ? a.animation.gotoAndPlay(b) : a.animation.play()))
				}, b
			}(o), f(p), q = function(a) {
				function b() {
					a.call(this), this._children = [], this._scaleType = u8l.v1F, this._tweenPivot = new j.Point, this.scaleMode = u8l.K1F
				}
				return __extends(b, a), b.prototype.setVisible = function(a) {
					if (u8l.X2A(this._visible, a))
						for (this._visible = a, a = this._children.length; a--;) {
							var b = this._children[a];
							u8l.U2A(b, p) && b._updateVisible(this._visible)
						}
				}, b.prototype._setArmature = function(b) {
					for (a.prototype._setArmature.call(this, b), b = this._children.length; b--;) this._children[b]._setArmature(this.armature)
				}, b.prototype.dispose = function() {
					if (this._children) {
						a.prototype.dispose.call(this);
						for (var b = this._children.length; b--;) this._children[b].dispose();
						this._children.length = 0, this.slot = this._tweenPivot = this._children = null
					}
				}, b.prototype.contains = function(a) {
					if (!a) throw Error();
					if (u8l.T2A(a, this)) return !u8l.K1F;
					for (; u8l.y7A(a, this) && u8l.C7A(u8l.S4s, a);) a = a.parent;
					return u8l.o7A(a, this)
				}, b.prototype.addChild = function(a) {
					var c = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
					if (!a) throw Error();
					if (u8l.R7A(a, this) || u8l.I7A(a, b) && a.contains(this)) throw Error(c);
					a.parent && a.parent.removeChild(a), this._children[this._children.length] = a, a._setParent(this), a._setArmature(this.armature), !this.slot && u8l.G7A(a, p) && (this.slot = a)
				}, b.prototype.removeChild = function(a) {
					if (!a) throw Error();
					var b = this._children.indexOf(a);
					u8l.K7A(u8l.r1F, b) ? (this._children.splice(b, u8l.K1F), a._setParent(u8l.S4s), a._setArmature(u8l.S4s), u8l.A7A(a, this.slot) && (this.slot = u8l.S4s)) : throwError()
				}, b.prototype.getSlots = function() {
					for (var a = [], b = this._children.length; b--;) u8l.D7A(this._children[b], p) && a.unshift(this._children[b]);
					return a
				}, b.prototype._arriveAtFrame = function(a, c, d) {
					if (a) {
						if (c = d.getMixingTransform(name), !d.displayControl || u8l.f7A(u8l.v1F, c) && -u8l.K1F != c || this.displayController && u8l.Y7A(this.displayController, d.name) || !this.slot || (c = a.displayIndex, u8l.e7A(u8l.r1F, c) && !isNaN(a.zOrder) && u8l.J7A(a.zOrder, this.slot._tweenZorder) && (this.slot._tweenZorder = a.zOrder, this.armature._slotsZOrderChanged = !u8l.r1F), this.slot._changeDisplay(c), this.slot._updateVisible(a.visible)), a.event && this.armature.hasEventListener(k.FrameEvent.BONE_FRAME_EVENT) && (c = new k.FrameEvent(k.FrameEvent.BONE_FRAME_EVENT), c.bone = this, c.animationState = d, c.frameLabel = a.event, this.armature._eventList.push(c)), a.sound && b._soundManager.hasEventListener(k.SoundEvent.SOUND) && (c = new k.SoundEvent(k.SoundEvent.SOUND), c.armature = this.armature, c.animationState = d, c.sound = a.sound, b._soundManager.dispatchEvent(c)), a.action)
							for (var f in this._children) u8l.i7A(this._children[f], p) && (d = this._children[f].getChildArmature()) && d.animation.gotoAndPlay(a.action)
					} else this.slot && this.slot._changeDisplay(-u8l.K1F)
				}, b.prototype._updateColor = function(a, b, c, d, e, f, g, h, i) {
					(i || this._isColorChanged) && this.slot._displayBridge.updateColor(a, b, c, d, e, f, g, h), this._isColorChanged = i
				}, b._soundManager = k.SoundEventManager.getInstance(), b
			}(o), h(q), r = function(a) {
				function b(b) {
					a.call(this), this.animation = new l.Animation(this), this._display = b, this._slotsZOrderChanged = !u8l.K1F, this._slotList = [], this._boneList = [], this._eventList = []
				}
				return __extends(b, a), b.prototype.getDisplay = function() {
					return this._display
				}, b.prototype.dispose = function() {
					if (this.animation) {
						this.animation.dispose();
						for (var a = this._slotList.length; a--;) this._slotList[a].dispose();
						for (a = this._boneList.length; a--;) this._boneList[a].dispose();
						this._slotList.length = 0, this._boneList.length = 0, this._eventList.length = 0, this.animation = this._display = this._eventList = this._boneList = this._slotList = null
					}
				}, b.prototype.advanceTime = function(a) {
					var b, c;
					for (this.animation.advanceTime(a), a *= this.animation.timeScale, b = this._boneList.length; b--;) this._boneList[b]._update();
					for (b = this._slotList.length; b--;) c = this._slotList[b], c._update(), c._isDisplayOnStage && (c = c.getChildArmature()) && c.advanceTime(a);
					if (this._slotsZOrderChanged && (this.updateSlotsZOrder(), this.hasEventListener(k.ArmatureEvent.Z_ORDER_UPDATED) && this.dispatchEvent(new k.ArmatureEvent(k.ArmatureEvent.Z_ORDER_UPDATED))), this._eventList.length) {
						for (a = this._eventList.length, b = 0; u8l.c7A(b, a); b++) this.dispatchEvent(this._eventList[b]);
						this._eventList.length = 0
					}
				}, b.prototype.getSlots = function(a) {
					return u8l.e1F === typeof a && (a = !u8l.r1F), a ? this._slotList.concat() : this._slotList
				}, b.prototype.getBones = function(a) {
					return u8l.e1F === typeof a && (a = !u8l.r1F), a ? this._boneList.concat() : this._boneList
				}, b.prototype.getSlot = function(a) {
					for (var b = this._slotList.length; b--;)
						if (u8l.j7A(this._slotList[b].name, a)) return this._slotList[b];
					return null
				}, b.prototype.getSlotByDisplay = function(a) {
					if (a)
						for (var b = this._slotList.length; b--;)
							if (u8l.a7A(this._slotList[b].getDisplay(), a)) return this._slotList[b];
					return null
				}, b.prototype.removeSlot = function(a) {
					if (!a) throw Error();
					u8l.l1A(u8l.r1F, this._slotList.indexOf(a)) ? a.parent.removeChild(a) : throwError()
				}, b.prototype.removeSlotByName = function(a) {
					a && (a = this.getSlot(a)) && this.removeSlot(a)
				}, b.prototype.getBone = function(a) {
					for (var b = this._boneList.length; b--;)
						if (u8l.P1A(this._boneList[b].name, a)) return this._boneList[b];
					return null
				}, b.prototype.getBoneByDisplay = function(a) {
					return (a = this.getSlotByDisplay(a)) ? a.parent : u8l.S4s
				}, b.prototype.removeBone = function(a) {
					if (!a) throw Error();
					u8l.V1A(u8l.r1F, this._boneList.indexOf(a)) ? a.parent ? a.parent.removeChild(a) : a._setArmature(u8l.S4s) : throwError()
				}, b.prototype.removeBoneByName = function(a) {
					a && (a = this.getBone(a)) && this.removeBone(a)
				}, b.prototype.addChild = function(a, b) {
					if (!a) throw Error();
					if (b) {
						var c = this.getBone(b);
						c ? c.addChild(a) : throwError()
					} else a.parent && a.parent.removeChild(a), a._setArmature(this)
				}, b.prototype.updateSlotsZOrder = function() {
					this._slotList.sort(this.sortSlot);
					for (var b, a = this._slotList.length; a--;) b = this._slotList[a], b._isDisplayOnStage && b._displayBridge.addDisplay(this._display, -1);
					this._slotsZOrderChanged = !1
				}, b.prototype._addDBObject = function(a) {
					u8l.n1A(a, p) ? u8l.L1A(0, this._slotList.indexOf(a)) && (this._slotList[this._slotList.length] = a) : u8l.m1A(a, q) && u8l.v1A(0, this._boneList.indexOf(a)) && (this._boneList[this._boneList.length] = a, this._sortBoneList())
				}, b.prototype._removeDBObject = function(a) {
					u8l.h1A(a, p) ? (a = this._slotList.indexOf(a), u8l.k1A(u8l.r1F, a) && this._slotList.splice(a, u8l.K1F)) : u8l.z1A(a, q) && (a = this._boneList.indexOf(a), u8l.S1A(u8l.r1F, a) && this._boneList.splice(a, u8l.K1F))
				}, b.prototype._sortBoneList = function() {
					var c, d, e, b, a = this._boneList.length;
					if (u8l.b1A(0, a)) {
						for (b = []; a--;) {
							for (c = 0, e = d = this._boneList[a]; e;) c++, e = e.parent;
							b[a] = {
								level: c,
								bone: d
							}
						}
						for (b.sort(this.sortBone), a = b.length; a--;) this._boneList[a] = b[a].bone
					}
				}, b.prototype._arriveAtFrame = function(a, c, d) {
					a.event && this.hasEventListener(k.FrameEvent.ANIMATION_FRAME_EVENT) && (c = new k.FrameEvent(k.FrameEvent.ANIMATION_FRAME_EVENT), c.animationState = d, c.frameLabel = a.event, this._eventList.push(c)), a.sound && b._soundManager.hasEventListener(k.SoundEvent.SOUND) && (c = new k.SoundEvent(k.SoundEvent.SOUND), c.armature = this, c.animationState = d, c.sound = a.sound, b._soundManager.dispatchEvent(c)), a.action && d.isPlaying && this.animation.gotoAndPlay(a.action)
				}, b.prototype.sortSlot = function(a, b) {
					return u8l.d1A(a.getZOrder(), b.getZOrder()) ? u8l.K1F : -u8l.K1F
				}, b.prototype.sortBone = function(a, b) {
					return u8l.M1A(a.level, b.level) ? u8l.K1F : -u8l.K1F
				}, b._soundManager = k.SoundEventManager.getInstance(), b
			}(k.EventDispatcher), i(r)
	}(dragonBones || (dragonBones = {})),
	function(a) {
		! function(a) {
			var b = function(b) {
					a.CreateJSDisplayBridge = b
				},
				c = function() {
					function b() {}
					var a = function() {
						b.RADIAN_TO_ANGLE = u8l.W1A(u8l.g6F, Math.PI)
					};
					return b.prototype.getVisible = function() {
						return this._display ? this._display.visible : !u8l.K1F
					}, b.prototype.setVisible = function(a) {
						this._display && (this._display.visible = a)
					}, b.prototype.getDisplay = function() {
						return this._display
					}, b.prototype.setDisplay = function(a) {
						var b, c;
						u8l.s1A(this._display, a) && (this._display && (b = this._display.parent, b && (c = this._display.parent.getChildIndex(this._display)), this.removeDisplay()), this._display = a, this.addDisplay(b, c))
					}, b.prototype.dispose = function() {
						this._display = u8l.S4s
					}, b.prototype.updateTransform = function(a, c) {
						this._display.x = a.tx, this._display.y = a.ty, this._display.skewX = u8l.w1A(c.skewX, b.RADIAN_TO_ANGLE), this._display.skewY = u8l.B1A(c.skewY, b.RADIAN_TO_ANGLE), this._display.scaleX = c.scaleX, this._display.scaleY = c.scaleY
					}, b.prototype.updateColor = function(a, b, c, d, e) {
						this._display && (this._display.alpha = e)
					}, b.prototype.addDisplay = function(a, b) {
						a && this._display && (u8l.x6A(u8l.r1F, b) ? a.addChild(this._display) : a.addChildAt(this._display, Math.min(b, a.getNumChildren())))
					}, b.prototype.removeDisplay = function() {
						this._display && this._display.parent && this._display.parent.removeChild(this._display)
					}, a(), b
				}();
			b(c)
		}(a.display || (a.display = {}));
		var b = a.display;
		! function(b) {
			var c = function(a) {
					b.CreateJSTextureAtlas = a
				},
				d = function() {
					function b(a, b, c) {
						u8l.e1F === typeof c && (c = u8l.K1F), this._regions = {}, this.image = a, this.scale = c, this.parseData(b)
					}
					return b.prototype.dispose = function() {
						this._regions = this.image = u8l.S4s
					}, b.prototype.getRegion = function(a) {
						return this._regions[a]
					}, b.prototype.parseData = function(b) {
						b = a.objects.DataParser.parseTextureAtlasData(b, this.scale), this.name = b.__name, delete b.__name;
						for (var c in b) this._regions[c] = b[c]
					}, b
				}();
			c(d)
		}(a.textures || (a.textures = {})),
		function(c) {
			var d = function(a) {
					c.CreateJSFactory = a
				},
				e = function(c) {
					function d() {
						c.call(this)
					}
					return __extends(d, c), d.prototype._generateArmature = function() {
						return new a.Armature(new createjs.Container)
					}, d.prototype._generateSlot = function() {
						return new a.Slot(new b.CreateJSDisplayBridge)
					}, d.prototype._generateDisplay = function(a, b, c, e) {
						if (b = a.getRegion(b)) {
							var f = new createjs.Shape(u8l.S4s);
							d._helpMatrix.a = u8l.K1F, d._helpMatrix.b = u8l.r1F, d._helpMatrix.c = u8l.r1F, d._helpMatrix.d = u8l.K1F, d._helpMatrix.scale(u8l.N6A(1, a.scale), u8l.Q6A(1, a.scale)), d._helpMatrix.tx = -c - b.x, d._helpMatrix.ty = -e - b.y, f.graphics.beginBitmapFill(a.image, u8l.S4s, d._helpMatrix), f.graphics.drawRect(-c, -e, b.width, b.height)
						}
						return f
					}, d._helpMatrix = new createjs.Matrix2D(u8l.K1F, u8l.r1F, u8l.r1F, u8l.K1F, u8l.r1F, u8l.r1F), d
				}(a.factorys.BaseFactory);
			d(e)
		}(a.factorys || (a.factorys = {}))
	}(dragonBones || (dragonBones = {})),
	function(a) {
		var b = function(b) {
				a.Figure = b
			},
			c = function(b) {
				function c(a, c, d, e, f, g) {
					b.call(this), this.figure = new createjs.Container, this.figure_holder = new createjs.Container, this.graphic = [], this.cells = [], this.place = [], this.in_slots = this.on_place = !u8l.K1F, this.blurFilter = new createjs.BlurFilter(u8l.g1F, u8l.g1F, u8l.g1F), this.graphic = a, this.point = c, this.cells = d, this.register_point = e, this.is_rotated = f, this.shad = g, this.addChild(this.figure_holder), this.figure_holder.addChild(this.figure), this.init()
				}
				return __extends(c, b), c.prototype.init = function() {
					for (; this.graphic.length;) this.figure.addChild(this.graphic.shift());
					this.x = u8l.u6A(Math.random(), 640 - this.figure.getBounds().width) + u8l.E6A(this.figure.getBounds().width, 2), this.y = u8l.g6A(Math.random(), (960 > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : 960) - 400 - this.figure.getBounds().height / 2) + 400, this.shad.filters = [this.blurFilter], this.shad.cache(0, 0, this.figure.getBounds().width, this.figure.getBounds().height), this.shadow_bitmap = new createjs.Bitmap(this.shad.cacheCanvas), this.addChildAt(this.shadow_bitmap, 0), this.shadow_bitmap.regX = this.figure.regX = u8l.r6A(this.figure.getBounds().width, 2), this.shadow_bitmap.regY = this.figure.regY = u8l.p6A(this.figure.getBounds().height, 2), this.shadow_bitmap.x = 2, this.shadow_bitmap.y = 2, this.addEventListener("mousedown", function(b) {
						for (var c = 0; u8l.O6A(c, b.currentTarget.place.length); c++) a.Desk.desk[b.currentTarget.place[c][0]][b.currentTarget.place[c][1]] = 0;
						b.currentTarget.place = [], b.currentTarget.on_place = !1, b.currentTarget.shadow_bitmap.visible = !0, b.currentTarget.parent.setChildIndex(b.currentTarget, u8l.H6A(b.currentTarget.parent.getNumChildren(), 1)), b.currentTarget.ox = u8l.t6A(b.currentTarget.x, b.stageX / a.App.scale_factor), b.currentTarget.oy = u8l.F6A(b.currentTarget.y, b.stageY / a.App.scale_factor)
					}), this.addEventListener("pressmove", function(b) {
						b.currentTarget.x = b.currentTarget.ox + u8l.Z6A(b.stageX, a.App.scale_factor), b.currentTarget.y = b.currentTarget.oy + u8l.q6A(b.stageY, a.App.scale_factor), b.currentTarget.moved = !0
					}), this.addEventListener("pressup", function(b) {
						var c, d, e, f, g, h;
						if (!b.currentTarget.is_rotated || b.currentTarget.moved || b.currentTarget.in_slots) {
							if (u8l.T6A(b.currentTarget.x - b.currentTarget.figure_holder.getBounds().width / 2 - b.currentTarget.point.x, a.Desk.cell_size) >= -u8l.y9A(.25, a.Desk.cell_size) && u8l.C9A(b.currentTarget.y - b.currentTarget.figure_holder.getBounds().height / 2 - b.currentTarget.point.y, a.Desk.cell_size) >= -u8l.o9A(.25, a.Desk.cell_size) && u8l.R9A(b.currentTarget.x + b.currentTarget.figure_holder.getBounds().width / 2 - b.currentTarget.point.x, a.Desk.cell_size * a.Desk.width_num + a.Desk.cell_size / 2) && u8l.I9A(b.currentTarget.y + b.currentTarget.figure_holder.getBounds().height / 2 - b.currentTarget.point.y, a.Desk.cell_size * a.Desk.height_num + a.Desk.cell_size / 2) && (d = u8l.G9A(b.currentTarget.x - b.currentTarget.figure_holder.getBounds().width / 2 - b.currentTarget.point.x, a.Desk.cell_size, 1), f = u8l.r9A(b.currentTarget.y - b.currentTarget.figure_holder.getBounds().height / 2 - b.currentTarget.point.y, a.Desk.cell_size, 1), u8l.k9A(.4, d) && u8l.z9A(.4, f) || u8l.S9A(.75, d) && u8l.b9A(.75, f) || u8l.d9A(.4, d) && u8l.M9A(.75, f) || u8l.W9A(.75, d) && u8l.s9A(.4, f))) {
								for (c = Math.round(u8l.w9A(b.currentTarget.x - b.currentTarget.figure_holder.getBounds().width / 2 - b.currentTarget.point.x, a.Desk.cell_size)), e = Math.round(u8l.B9A(b.currentTarget.y - b.currentTarget.figure_holder.getBounds().height / 2 - b.currentTarget.point.y, a.Desk.cell_size)), g = [], h = !0, d = 0; u8l.x4j(d, b.currentTarget.cells.length); d++)
									for (f = 0; u8l.N4j(f, b.currentTarget.cells[d].length); f++)
										if (u8l.Q4j(0, b.currentTarget.cells[d][f])) {
											if (!(u8l.u4j(e + d, a.Desk.height_num) && u8l.E4j(c + f, a.Desk.width_num) && u8l.g4j(0, e + d) && u8l.r4j(0, c + f) && u8l.p4j(0, a.Desk.desk[e + d][c + f]))) {
												h = !1;
												break
											}
											g.push([e + d, c + f])
										}
								if (h) {
									for (createjs.Sound.play("SndOnPlace"), b.currentTarget.place = g, d = 0; u8l.O4j(d, b.currentTarget.place.length); d++) a.Desk.desk[g[d][0]][g[d][1]] = 1;
									b.currentTarget.shadow_bitmap.visible = !1, b.currentTarget.parent.setChildIndex(b.currentTarget, 0), b.currentTarget.x = u8l.H4j(c, a.Desk.cell_size) + b.currentTarget.point.x + u8l.t4j(b.currentTarget.figure_holder.getBounds().width, 2), b.currentTarget.y = u8l.F4j(e, a.Desk.cell_size) + u8l.Z4j(b.currentTarget.figure_holder.getBounds().height, 2) + b.currentTarget.point.y, u8l.q4j(c, b.currentTarget.register_point[1]) && u8l.X4j(e, b.currentTarget.register_point[0]) && u8l.U4j(0, b.currentTarget.figure.rotation) && (b.currentTarget.on_place = !0), b.currentTarget.parent.parent.checkWin()
								}
							}
						} else {
							for (b.currentTarget.figure.parent.parent.on_place = !1, b.currentTarget.figure.parent.parent.shadow_bitmap.visible = !0, b.currentTarget.figure.rotation += 90, u8l.X6A(360, b.currentTarget.figure.rotation) && (b.currentTarget.figure.rotation = 0), b.currentTarget.figure.parent.parent.shadow_bitmap.rotation = b.currentTarget.figure.rotation, c = [], d = b.currentTarget.figure.parent.parent.cells[0].length, e = 0; u8l.U6A(e, d); e++)
								for (f = b.currentTarget.figure.parent.parent.cells.length, c[e] = []; f;) f--, c[e].push(b.currentTarget.figure.parent.parent.cells[f][e]);
							b.currentTarget.figure.parent.parent.cells = c
						}
						b.currentTarget.moved = !1
					})
				}, c.prototype.rotateShadow = function() {
					this.shadow_bitmap.rotation = this.figure.rotation, u8l.T4j(u8l.Z4s, this.figure.rotation) ? this.rotateArray() : u8l.y5j(u8l.g6F, this.figure.rotation) ? (this.rotateArray(), this.rotateArray()) : u8l.C5j(u8l.o4s, this.figure.rotation) && (this.rotateArray(), this.rotateArray(), this.rotateArray())
				}, c.prototype.rotateArray = function() {
					var a, b, c, d;
					for (a = [], b = this.cells[0].length, c = 0; u8l.o5j(c, b); c++)
						for (d = this.cells.length, a[c] = []; d;) d--, a[c].push(this.cells[d][c]);
					this.cells = a
				}, c
			}(createjs.Container);
		b(c)
	}(game || (game = {})),
	function(a) {
		var b = function(b) {
				a.FigureForms = b
			},
			c = function() {
				function o() {}
				var a = 14,
					b = 21,
					c = 23,
					d = 19,
					e = 24,
					f = 26,
					g = 25,
					h = 18,
					i = 27,
					j = 13,
					k = 22,
					l = 17,
					m = 16,
					n = function() {
						o.forms = [
							[
								[u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.K1F],
								[u8l.r1F, u8l.K1F]
							],
							[
								[u8l.r1F, u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.K1F, u8l.r1F]
							],
							[
								[u8l.r1F, u8l.K1F],
								[u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.r1F]
							],
							[
								[u8l.K1F, u8l.K1F, u8l.r1F],
								[u8l.r1F, u8l.K1F, u8l.K1F]
							],
							[
								[u8l.r1F, u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.r1F]
							],
							[
								[u8l.K1F, u8l.K1F, u8l.K1F],
								[u8l.r1F, u8l.K1F, u8l.r1F]
							],
							[
								[u8l.r1F, u8l.K1F],
								[u8l.K1F, u8l.K1F],
								[u8l.r1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.r1F]
							],
							[
								[u8l.K1F, u8l.K1F, u8l.K1F],
								[u8l.r1F, u8l.r1F, u8l.K1F]
							],
							[
								[u8l.r1F, u8l.K1F],
								[u8l.r1F, u8l.K1F],
								[u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.r1F, u8l.r1F],
								[u8l.K1F, u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.K1F],
								[u8l.r1F, u8l.K1F],
								[u8l.r1F, u8l.K1F]
							],
							[
								[u8l.r1F, u8l.r1F, u8l.K1F],
								[u8l.K1F, u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.r1F, u8l.r1F]
							],
							[
								[u8l.K1F, u8l.K1F],
								[u8l.r1F, u8l.K1F]
							],
							[
								[u8l.r1F, u8l.K1F],
								[u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.r1F]
							],
							[
								[u8l.K1F, u8l.K1F],
								[u8l.r1F, u8l.K1F],
								[u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.r1F, u8l.K1F],
								[u8l.K1F, u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.K1F, u8l.K1F],
								[u8l.K1F, u8l.r1F, u8l.K1F]
							],
							[
								[u8l.K1F, u8l.K1F, u8l.K1F, u8l.K1F]
							],
							[
								[u8l.K1F],
								[u8l.K1F],
								[u8l.K1F],
								[u8l.K1F]
							],
							[
								[u8l.r1F, u8l.K1F, u8l.r1F],
								[u8l.K1F, u8l.K1F, u8l.K1F],
								[u8l.r1F, u8l.K1F, u8l.r1F]
							]
						]
					};
				return o.getFotms = function(a) {
					return o.forms[a]
				}, o.getDeskForm = function(a) {
					var b = Math.round(u8l.R5j(o.desk_form[a].length - 1, Math.random()));
					return o.desk_form[a][b]
				}, n(), o.desk_form = {
					"5x5": [
						[
							[m, u8l.r1F, u8l.r1F],
							[l, u8l.r1F, u8l.g1F],
							[u8l.g1F, u8l.K1F, u8l.r1F],
							[k, u8l.g1F, u8l.K1F],
							[u8l.Y1F, u8l.K1F, u8l.v1F],
							[j, u8l.v1F, u8l.g1F]
						],
						[
							[u8l.y6F, u8l.r1F, u8l.r1F],
							[i, u8l.K1F, u8l.r1F],
							[u8l.w1F, u8l.g1F, u8l.r1F],
							[m, u8l.r1F, u8l.v1F],
							[u8l.r1F, u8l.K1F, u8l.g1F],
							[h, u8l.g1F, u8l.g1F]
						],
						[
							[g, u8l.r1F, u8l.r1F],
							[u8l.Y1F, u8l.K1F, u8l.r1F],
							[h, u8l.g1F, u8l.r1F],
							[f, u8l.K1F, u8l.v1F],
							[u8l.U1F, u8l.r1F, u8l.g1F],
							[h, u8l.g1F, u8l.g1F]
						],
						[
							[u8l.W1F, u8l.r1F, u8l.r1F],
							[e, u8l.r1F, u8l.K1F],
							[d, u8l.K1F, u8l.v1F],
							[f, u8l.r1F, u8l.H1F],
							[l, u8l.g1F, u8l.r1F],
							[u8l.w1F, u8l.g1F, u8l.v1F]
						],
						[
							[u8l.Y1F, u8l.r1F, u8l.K1F],
							[u8l.v6F, u8l.K1F, u8l.v1F],
							[u8l.W1F, u8l.v1F, u8l.r1F],
							[i, u8l.v1F, u8l.K1F],
							[h, u8l.g1F, u8l.g1F]
						]
					],
					"5x6": [
						[
							[u8l.Y1F, u8l.r1F, u8l.r1F],
							[m, u8l.r1F, u8l.v1F],
							[u8l.t1F, u8l.r1F, u8l.H1F],
							[d, u8l.K1F, u8l.K1F],
							[u8l.U1F, u8l.v1F, u8l.v1F],
							[u8l.K1F, u8l.v1F, u8l.H1F],
							[u8l.v1F, u8l.g1F, u8l.r1F]
						],
						[
							[c, u8l.r1F, u8l.r1F],
							[u8l.v6F, u8l.r1F, u8l.v1F],
							[f, u8l.r1F, u8l.O1F],
							[u8l.H1F, u8l.K1F, u8l.K1F],
							[u8l.W1F, u8l.v1F, u8l.H1F],
							[u8l.y6F, u8l.g1F, u8l.r1F],
							[u8l.O1F, u8l.g1F, u8l.K1F]
						],
						[
							[u8l.Y1F, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.v1F],
							[f, u8l.r1F, u8l.O1F],
							[u8l.g1F, u8l.K1F, u8l.K1F],
							[u8l.g1F, u8l.K1F, u8l.g1F],
							[k, u8l.g1F, u8l.r1F],
							[u8l.O1F, u8l.g1F, u8l.g1F]
						],
						[
							[g, u8l.r1F, u8l.r1F],
							[u8l.O1F, u8l.r1F, u8l.g1F],
							[k, u8l.K1F, u8l.r1F],
							[u8l.v1F, u8l.v1F, u8l.v1F],
							[u8l.t1F, u8l.v1F, u8l.H1F],
							[u8l.y6F, u8l.g1F, u8l.r1F],
							[g, u8l.H1F, u8l.K1F]
						],
						[
							[i, u8l.r1F, u8l.r1F],
							[g, u8l.r1F, u8l.v1F],
							[u8l.v6F, u8l.K1F, u8l.g1F],
							[u8l.U1F, u8l.v1F, u8l.v1F],
							[u8l.K1F, u8l.v1F, u8l.H1F],
							[u8l.h1F, u8l.g1F, u8l.r1F]
						],
						[
							[c, u8l.r1F, u8l.r1F],
							[i, u8l.r1F, u8l.K1F],
							[u8l.H1F, u8l.r1F, u8l.g1F],
							[m, u8l.v1F, u8l.g1F],
							[u8l.w1F, u8l.g1F, u8l.r1F],
							[u8l.v1F, u8l.g1F, u8l.g1F]
						]
					],
					"5x7": [
						[
							[e, u8l.r1F, u8l.r1F],
							[u8l.W1F, u8l.r1F, u8l.g1F],
							[u8l.t1F, u8l.r1F, u8l.H1F],
							[f, u8l.r1F, u8l.p1F],
							[i, u8l.K1F, u8l.r1F],
							[u8l.w1F, u8l.g1F, u8l.r1F],
							[u8l.r1F, u8l.g1F, u8l.g1F],
							[d, u8l.g1F, u8l.O1F]
						],
						[
							[u8l.Y1F, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.v1F],
							[h, u8l.r1F, u8l.O1F],
							[u8l.r1F, u8l.K1F, u8l.K1F],
							[u8l.g1F, u8l.K1F, u8l.g1F],
							[j, u8l.v1F, u8l.O1F],
							[u8l.r1F, u8l.g1F, u8l.r1F],
							[u8l.w1F, u8l.g1F, u8l.v1F],
							[l, u8l.g1F, u8l.H1F]
						],
						[
							[f, u8l.r1F, u8l.r1F],
							[i, u8l.r1F, u8l.K1F],
							[u8l.H1F, u8l.r1F, u8l.g1F],
							[j, u8l.r1F, u8l.O1F],
							[k, u8l.v1F, u8l.K1F],
							[i, u8l.v1F, u8l.H1F],
							[g, u8l.H1F, u8l.r1F]
						],
						[
							[u8l.H1F, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.v1F],
							[j, u8l.r1F, u8l.O1F],
							[u8l.p1F, u8l.K1F, u8l.r1F],
							[u8l.r1F, u8l.K1F, u8l.H1F],
							[u8l.U1F, u8l.v1F, u8l.v1F],
							[u8l.v1F, u8l.g1F, u8l.r1F],
							[u8l.r1F, u8l.g1F, u8l.O1F]
						],
						[
							[u8l.W1F, u8l.r1F, u8l.r1F],
							[m, u8l.r1F, u8l.K1F],
							[f, u8l.r1F, u8l.H1F],
							[u8l.y6F, u8l.r1F, u8l.O1F],
							[u8l.U1F, u8l.K1F, u8l.K1F],
							[f, u8l.K1F, u8l.g1F],
							[h, u8l.K1F, u8l.O1F],
							[d, u8l.g1F, u8l.r1F],
							[u8l.v1F, u8l.g1F, u8l.H1F]
						],
						[
							[u8l.p1F, u8l.r1F, u8l.r1F],
							[j, u8l.r1F, u8l.K1F],
							[u8l.K1F, u8l.r1F, u8l.g1F],
							[u8l.H1F, u8l.r1F, u8l.H1F],
							[k, u8l.v1F, u8l.K1F],
							[u8l.r1F, u8l.v1F, u8l.O1F],
							[u8l.w1F, u8l.g1F, u8l.r1F],
							[g, u8l.H1F, u8l.g1F]
						]
					],
					"5x8": [
						[
							[h, u8l.r1F, u8l.r1F],
							[u8l.H1F, u8l.r1F, u8l.v1F],
							[u8l.v6F, u8l.r1F, u8l.H1F],
							[f, u8l.r1F, u8l.h1F],
							[f, u8l.K1F, u8l.v1F],
							[u8l.K1F, u8l.v1F, u8l.r1F],
							[g, u8l.v1F, u8l.g1F],
							[u8l.O1F, u8l.g1F, u8l.g1F],
							[u8l.H1F, u8l.g1F, u8l.O1F]
						],
						[
							[u8l.r1F, u8l.r1F, u8l.r1F],
							[u8l.v1F, u8l.r1F, u8l.v1F],
							[j, u8l.r1F, u8l.p1F],
							[u8l.h1F, u8l.K1F, u8l.H1F],
							[e, u8l.v1F, u8l.r1F],
							[u8l.U1F, u8l.v1F, u8l.v1F],
							[u8l.W1F, u8l.v1F, u8l.H1F],
							[i, u8l.v1F, u8l.O1F],
							[h, u8l.g1F, u8l.r1F]
						],
						[
							[u8l.v6F, u8l.r1F, u8l.r1F],
							[u8l.y6F, u8l.r1F, u8l.g1F],
							[u8l.h1F, u8l.r1F, u8l.O1F],
							[c, u8l.K1F, u8l.r1F],
							[b, u8l.K1F, u8l.H1F],
							[u8l.t1F, u8l.K1F, u8l.p1F],
							[g, u8l.v1F, u8l.K1F],
							[u8l.O1F, u8l.g1F, u8l.K1F],
							[a, u8l.g1F, u8l.H1F]
						],
						[
							[u8l.g1F, u8l.r1F, u8l.r1F],
							[u8l.W1F, u8l.r1F, u8l.v1F],
							[u8l.K1F, u8l.r1F, u8l.g1F],
							[l, u8l.r1F, u8l.H1F],
							[u8l.g1F, u8l.r1F, u8l.p1F],
							[u8l.t1F, u8l.v1F, u8l.r1F],
							[i, u8l.v1F, u8l.H1F],
							[u8l.U1F, u8l.v1F, u8l.p1F],
							[u8l.r1F, u8l.g1F, u8l.v1F]
						],
						[
							[u8l.W1F, u8l.r1F, u8l.r1F],
							[g, u8l.r1F, u8l.K1F],
							[u8l.p1F, u8l.r1F, u8l.O1F],
							[u8l.U1F, u8l.r1F, u8l.p1F],
							[e, u8l.K1F, u8l.v1F],
							[u8l.O1F, u8l.v1F, u8l.v1F],
							[u8l.H1F, u8l.g1F, u8l.r1F],
							[a, u8l.g1F, u8l.g1F],
							[u8l.r1F, u8l.g1F, u8l.p1F]
						],
						[
							[e, u8l.r1F, u8l.r1F],
							[f, u8l.r1F, u8l.g1F],
							[u8l.y6F, u8l.r1F, u8l.H1F],
							[u8l.g1F, u8l.r1F, u8l.p1F],
							[i, u8l.K1F, u8l.r1F],
							[u8l.t1F, u8l.K1F, u8l.H1F],
							[d, u8l.g1F, u8l.r1F],
							[k, u8l.g1F, u8l.v1F],
							[u8l.v1F, u8l.g1F, u8l.O1F]
						]
					],
					"6x6": [
						[
							[u8l.W1F, u8l.r1F, u8l.r1F],
							[m, u8l.r1F, u8l.K1F],
							[l, u8l.r1F, u8l.H1F],
							[i, u8l.K1F, u8l.v1F],
							[h, u8l.v1F, u8l.H1F],
							[u8l.r1F, u8l.g1F, u8l.r1F],
							[g, u8l.O1F, u8l.r1F],
							[d, u8l.g1F, u8l.v1F],
							[u8l.r1F, u8l.H1F, u8l.H1F]
						],
						[
							[m, u8l.r1F, u8l.r1F],
							[u8l.H1F, u8l.r1F, u8l.g1F],
							[u8l.K1F, u8l.K1F, u8l.K1F],
							[u8l.K1F, u8l.v1F, u8l.r1F],
							[m, u8l.v1F, u8l.g1F],
							[u8l.w1F, u8l.H1F, u8l.r1F],
							[l, u8l.H1F, u8l.v1F],
							[u8l.U1F, u8l.g1F, u8l.H1F]
						],
						[
							[u8l.y6F, u8l.r1F, u8l.r1F],
							[u8l.O1F, u8l.r1F, u8l.K1F],
							[u8l.H1F, u8l.r1F, u8l.g1F],
							[u8l.w1F, u8l.v1F, u8l.r1F],
							[u8l.h1F, u8l.v1F, u8l.v1F],
							[u8l.U1F, u8l.v1F, u8l.H1F],
							[u8l.y6F, u8l.H1F, u8l.r1F],
							[h, u8l.H1F, u8l.K1F],
							[u8l.w1F, u8l.H1F, u8l.g1F]
						],
						[
							[f, u8l.r1F, u8l.r1F],
							[u8l.r1F, u8l.r1F, u8l.K1F],
							[u8l.v1F, u8l.r1F, u8l.g1F],
							[u8l.H1F, u8l.v1F, u8l.K1F],
							[b, u8l.v1F, u8l.g1F],
							[f, u8l.v1F, u8l.O1F],
							[u8l.t1F, u8l.g1F, u8l.r1F],
							[u8l.w1F, u8l.H1F, u8l.v1F]
						],
						[
							[u8l.O1F, u8l.r1F, u8l.r1F],
							[g, u8l.r1F, u8l.v1F],
							[u8l.v6F, u8l.K1F, u8l.g1F],
							[m, u8l.v1F, u8l.r1F],
							[u8l.H1F, u8l.v1F, u8l.g1F],
							[e, u8l.g1F, u8l.K1F],
							[k, u8l.H1F, u8l.r1F],
							[u8l.v1F, u8l.H1F, u8l.g1F]
						],
						[
							[i, u8l.r1F, u8l.r1F],
							[l, u8l.r1F, u8l.v1F],
							[u8l.r1F, u8l.r1F, u8l.H1F],
							[u8l.W1F, u8l.v1F, u8l.r1F],
							[i, u8l.v1F, u8l.K1F],
							[u8l.h1F, u8l.v1F, u8l.g1F],
							[a, u8l.H1F, u8l.K1F],
							[u8l.g1F, u8l.g1F, u8l.H1F]
						],
						[
							[g, u8l.r1F, u8l.r1F],
							[j, u8l.r1F, u8l.H1F],
							[u8l.p1F, u8l.K1F, u8l.r1F],
							[b, u8l.K1F, u8l.K1F],
							[c, u8l.K1F, u8l.g1F],
							[u8l.y6F, u8l.H1F, u8l.r1F],
							[a, u8l.H1F, u8l.K1F],
							[u8l.g1F, u8l.g1F, u8l.H1F]
						]
					],
					"6x7": [
						[
							[u8l.r1F, u8l.r1F, u8l.r1F],
							[u8l.U1F, u8l.r1F, u8l.K1F],
							[m, u8l.r1F, u8l.g1F],
							[i, u8l.K1F, u8l.g1F],
							[l, u8l.K1F, u8l.O1F],
							[u8l.p1F, u8l.v1F, u8l.r1F],
							[b, u8l.g1F, u8l.v1F],
							[u8l.v1F, u8l.g1F, u8l.H1F],
							[u8l.v1F, u8l.H1F, u8l.r1F],
							[a, u8l.H1F, u8l.H1F]
						],
						[
							[u8l.U1F, u8l.r1F, u8l.r1F],
							[u8l.K1F, u8l.r1F, u8l.v1F],
							[g, u8l.r1F, u8l.g1F],
							[u8l.v6F, u8l.K1F, u8l.H1F],
							[h, u8l.v1F, u8l.K1F],
							[u8l.K1F, u8l.v1F, u8l.O1F],
							[u8l.W1F, u8l.g1F, u8l.r1F],
							[u8l.r1F, u8l.g1F, u8l.g1F],
							[u8l.H1F, u8l.H1F, u8l.K1F],
							[u8l.O1F, u8l.H1F, u8l.H1F]
						],
						[
							[g, u8l.r1F, u8l.r1F],
							[u8l.v6F, u8l.r1F, u8l.H1F],
							[u8l.r1F, u8l.K1F, u8l.r1F],
							[f, u8l.K1F, u8l.v1F],
							[u8l.p1F, u8l.K1F, u8l.g1F],
							[b, u8l.K1F, u8l.H1F],
							[u8l.g1F, u8l.g1F, u8l.r1F],
							[h, u8l.g1F, u8l.O1F],
							[a, u8l.H1F, u8l.K1F],
							[u8l.w1F, u8l.H1F, u8l.H1F]
						],
						[
							[u8l.K1F, u8l.r1F, u8l.r1F],
							[u8l.H1F, u8l.r1F, u8l.K1F],
							[j, u8l.r1F, u8l.g1F],
							[d, u8l.r1F, u8l.O1F],
							[u8l.K1F, u8l.v1F, u8l.r1F],
							[i, u8l.v1F, u8l.v1F],
							[u8l.r1F, u8l.v1F, u8l.O1F],
							[d, u8l.H1F, u8l.r1F],
							[k, u8l.H1F, u8l.v1F],
							[l, u8l.H1F, u8l.O1F]
						],
						[
							[u8l.H1F, u8l.r1F, u8l.r1F],
							[u8l.v6F, u8l.r1F, u8l.v1F],
							[u8l.p1F, u8l.K1F, u8l.r1F],
							[i, u8l.K1F, u8l.v1F],
							[u8l.r1F, u8l.K1F, u8l.O1F],
							[u8l.H1F, u8l.g1F, u8l.K1F],
							[u8l.U1F, u8l.g1F, u8l.g1F],
							[l, u8l.g1F, u8l.O1F],
							[u8l.r1F, u8l.H1F, u8l.r1F],
							[d, u8l.H1F, u8l.O1F]
						],
						[
							[i, u8l.r1F, u8l.r1F],
							[g, u8l.r1F, u8l.v1F],
							[a, u8l.r1F, u8l.H1F],
							[k, u8l.v1F, u8l.r1F],
							[g, u8l.v1F, u8l.g1F],
							[a, u8l.g1F, u8l.K1F],
							[u8l.K1F, u8l.g1F, u8l.O1F],
							[d, u8l.H1F, u8l.r1F],
							[u8l.O1F, u8l.H1F, u8l.g1F]
						]
					],
					"6x8": [
						[
							[u8l.p1F, u8l.r1F, u8l.r1F],
							[u8l.H1F, u8l.r1F, u8l.K1F],
							[j, u8l.r1F, u8l.g1F],
							[u8l.r1F, u8l.r1F, u8l.O1F],
							[f, u8l.r1F, u8l.h1F],
							[m, u8l.v1F, u8l.K1F],
							[u8l.t1F, u8l.v1F, u8l.H1F],
							[u8l.K1F, u8l.g1F, u8l.r1F],
							[u8l.r1F, u8l.g1F, u8l.v1F],
							[u8l.p1F, u8l.g1F, u8l.p1F],
							[h, u8l.H1F, u8l.g1F]
						],
						[
							[u8l.K1F, u8l.r1F, u8l.r1F],
							[u8l.v6F, u8l.r1F, u8l.K1F],
							[g, u8l.r1F, u8l.H1F],
							[u8l.p1F, u8l.K1F, u8l.v1F],
							[m, u8l.K1F, u8l.H1F],
							[u8l.t1F, u8l.K1F, u8l.p1F],
							[d, u8l.v1F, u8l.r1F],
							[u8l.g1F, u8l.v1F, u8l.H1F],
							[u8l.K1F, u8l.g1F, u8l.p1F],
							[u8l.v1F, u8l.H1F, u8l.r1F],
							[k, u8l.H1F, u8l.g1F]
						],
						[
							[d, u8l.r1F, u8l.r1F],
							[b, u8l.r1F, u8l.K1F],
							[u8l.H1F, u8l.r1F, u8l.g1F],
							[u8l.h1F, u8l.r1F, u8l.O1F],
							[u8l.w1F, u8l.v1F, u8l.r1F],
							[c, u8l.v1F, u8l.g1F],
							[u8l.v1F, u8l.v1F, u8l.H1F],
							[u8l.U1F, u8l.K1F, u8l.p1F],
							[u8l.H1F, u8l.H1F, u8l.r1F],
							[a, u8l.H1F, u8l.g1F],
							[u8l.r1F, u8l.H1F, u8l.p1F]
						],
						[
							[u8l.W1F, u8l.r1F, u8l.r1F],
							[u8l.K1F, u8l.r1F, u8l.K1F],
							[u8l.h1F, u8l.r1F, u8l.v1F],
							[b, u8l.r1F, u8l.O1F],
							[u8l.v1F, u8l.K1F, u8l.g1F],
							[u8l.U1F, u8l.K1F, u8l.p1F],
							[u8l.v1F, u8l.g1F, u8l.r1F],
							[i, u8l.g1F, u8l.g1F],
							[u8l.y6F, u8l.H1F, u8l.p1F],
							[g, u8l.O1F, u8l.r1F]
						],
						[
							[u8l.Y1F, u8l.r1F, u8l.r1F],
							[u8l.r1F, u8l.r1F, u8l.v1F],
							[u8l.v6F, u8l.r1F, u8l.H1F],
							[u8l.K1F, u8l.K1F, u8l.K1F],
							[u8l.g1F, u8l.K1F, u8l.g1F],
							[f, u8l.K1F, u8l.O1F],
							[u8l.t1F, u8l.K1F, u8l.p1F],
							[u8l.w1F, u8l.g1F, u8l.K1F],
							[u8l.K1F, u8l.g1F, u8l.p1F],
							[u8l.w1F, u8l.H1F, u8l.H1F],
							[g, u8l.O1F, u8l.r1F]
						],
						[
							[u8l.y6F, u8l.r1F, u8l.r1F],
							[i, u8l.r1F, u8l.K1F],
							[u8l.H1F, u8l.r1F, u8l.g1F],
							[u8l.v6F, u8l.r1F, u8l.O1F],
							[u8l.r1F, u8l.v1F, u8l.r1F],
							[u8l.p1F, u8l.v1F, u8l.g1F],
							[u8l.y6F, u8l.v1F, u8l.O1F],
							[u8l.g1F, u8l.v1F, u8l.p1F],
							[h, u8l.g1F, u8l.K1F],
							[u8l.w1F, u8l.H1F, u8l.r1F],
							[a, u8l.H1F, u8l.g1F],
							[h, u8l.H1F, u8l.p1F]
						]
					],
					"6x9": [
						[
							[u8l.r1F, u8l.r1F, u8l.r1F],
							[u8l.U1F, u8l.r1F, u8l.K1F],
							[l, u8l.r1F, u8l.O1F],
							[l, u8l.r1F, u8l.h1F],
							[u8l.h1F, u8l.K1F, u8l.g1F],
							[a, u8l.K1F, u8l.O1F],
							[u8l.K1F, u8l.v1F, u8l.r1F],
							[u8l.g1F, u8l.v1F, u8l.v1F],
							[u8l.g1F, u8l.v1F, u8l.h1F],
							[i, u8l.g1F, u8l.g1F],
							[b, u8l.g1F, u8l.O1F],
							[u8l.w1F, u8l.H1F, u8l.r1F],
							[h, u8l.H1F, u8l.h1F]
						],
						[
							[u8l.p1F, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.v1F],
							[u8l.r1F, u8l.r1F, u8l.O1F],
							[j, u8l.r1F, u8l.h1F],
							[i, u8l.K1F, u8l.K1F],
							[u8l.U1F, u8l.K1F, u8l.g1F],
							[u8l.K1F, u8l.v1F, u8l.O1F],
							[u8l.H1F, u8l.v1F, u8l.p1F],
							[u8l.Y1F, u8l.g1F, u8l.r1F],
							[g, u8l.H1F, u8l.K1F],
							[a, u8l.H1F, u8l.g1F],
							[u8l.v1F, u8l.H1F, u8l.p1F]
						],
						[
							[u8l.w1F, u8l.r1F, u8l.r1F],
							[g, u8l.r1F, u8l.K1F],
							[u8l.v1F, u8l.r1F, u8l.H1F],
							[u8l.r1F, u8l.r1F, u8l.h1F],
							[i, u8l.K1F, u8l.v1F],
							[u8l.O1F, u8l.K1F, u8l.O1F],
							[u8l.H1F, u8l.v1F, u8l.r1F],
							[f, u8l.v1F, u8l.t1F],
							[u8l.W1F, u8l.g1F, u8l.r1F],
							[u8l.g1F, u8l.g1F, u8l.g1F],
							[u8l.U1F, u8l.g1F, u8l.p1F],
							[l, u8l.H1F, u8l.K1F],
							[u8l.v1F, u8l.H1F, u8l.H1F]
						],
						[
							[c, u8l.r1F, u8l.K1F],
							[u8l.v1F, u8l.r1F, u8l.v1F],
							[u8l.g1F, u8l.r1F, u8l.H1F],
							[m, u8l.r1F, u8l.p1F],
							[l, u8l.K1F, u8l.h1F],
							[u8l.w1F, u8l.v1F, u8l.r1F],
							[e, u8l.v1F, u8l.O1F],
							[u8l.r1F, u8l.g1F, u8l.g1F],
							[i, u8l.g1F, u8l.O1F],
							[u8l.U1F, u8l.g1F, u8l.h1F],
							[u8l.h1F, u8l.H1F, u8l.r1F],
							[g, u8l.O1F, u8l.v1F]
						],
						[
							[b, u8l.r1F, u8l.r1F],
							[m, u8l.r1F, u8l.v1F],
							[h, u8l.r1F, u8l.H1F],
							[u8l.r1F, u8l.r1F, u8l.p1F],
							[f, u8l.r1F, u8l.t1F],
							[i, u8l.K1F, u8l.v1F],
							[u8l.U1F, u8l.v1F, u8l.O1F],
							[u8l.W1F, u8l.v1F, u8l.h1F],
							[c, u8l.g1F, u8l.r1F],
							[u8l.t1F, u8l.g1F, u8l.K1F],
							[u8l.g1F, u8l.g1F, u8l.g1F],
							[g, u8l.O1F, u8l.H1F]
						],
						[
							[i, u8l.r1F, u8l.r1F],
							[j, u8l.r1F, u8l.v1F],
							[d, u8l.r1F, u8l.H1F],
							[j, u8l.r1F, u8l.O1F],
							[u8l.K1F, u8l.r1F, u8l.h1F],
							[u8l.W1F, u8l.v1F, u8l.r1F],
							[u8l.O1F, u8l.v1F, u8l.K1F],
							[u8l.r1F, u8l.v1F, u8l.H1F],
							[u8l.O1F, u8l.v1F, u8l.p1F],
							[l, u8l.H1F, u8l.g1F],
							[u8l.w1F, u8l.H1F, u8l.O1F],
							[l, u8l.H1F, u8l.h1F],
							[g, u8l.O1F, u8l.r1F]
						]
					],
					"6x10": [
						[
							[u8l.Y1F, u8l.r1F, u8l.r1F],
							[m, u8l.r1F, u8l.v1F],
							[u8l.H1F, u8l.r1F, u8l.O1F],
							[u8l.g1F, u8l.r1F, u8l.t1F],
							[u8l.K1F, u8l.K1F, u8l.K1F],
							[u8l.v1F, u8l.K1F, u8l.g1F],
							[i, u8l.v1F, u8l.H1F],
							[l, u8l.v1F, u8l.p1F],
							[f, u8l.v1F, u8l.Y1F],
							[u8l.H1F, u8l.g1F, u8l.r1F],
							[u8l.p1F, u8l.g1F, u8l.g1F],
							[u8l.t1F, u8l.g1F, u8l.h1F],
							[d, u8l.H1F, u8l.r1F],
							[u8l.O1F, u8l.H1F, u8l.O1F]
						],
						[
							[u8l.r1F, u8l.r1F, u8l.r1F],
							[u8l.U1F, u8l.r1F, u8l.K1F],
							[u8l.r1F, u8l.r1F, u8l.g1F],
							[u8l.y6F, u8l.r1F, u8l.O1F],
							[h, u8l.r1F, u8l.p1F],
							[u8l.g1F, u8l.r1F, u8l.t1F],
							[u8l.K1F, u8l.v1F, u8l.r1F],
							[i, u8l.v1F, u8l.v1F],
							[g, u8l.v1F, u8l.H1F],
							[u8l.v1F, u8l.g1F, u8l.O1F],
							[j, u8l.g1F, u8l.t1F],
							[u8l.w1F, u8l.H1F, u8l.r1F],
							[u8l.O1F, u8l.H1F, u8l.g1F],
							[d, u8l.H1F, u8l.h1F]
						],
						[
							[u8l.H1F, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.g1F],
							[u8l.v1F, u8l.r1F, u8l.O1F],
							[u8l.O1F, u8l.r1F, u8l.h1F],
							[u8l.K1F, u8l.K1F, u8l.r1F],
							[i, u8l.K1F, u8l.v1F],
							[g, u8l.v1F, u8l.O1F],
							[u8l.U1F, u8l.v1F, u8l.t1F],
							[u8l.p1F, u8l.g1F, u8l.r1F],
							[u8l.U1F, u8l.g1F, u8l.K1F],
							[i, u8l.g1F, u8l.g1F],
							[b, u8l.g1F, u8l.O1F],
							[c, u8l.g1F, u8l.h1F]
						],
						[
							[u8l.r1F, u8l.r1F, u8l.r1F],
							[g, u8l.r1F, u8l.v1F],
							[i, u8l.r1F, u8l.O1F],
							[b, u8l.r1F, u8l.h1F],
							[f, u8l.r1F, u8l.Y1F],
							[h, u8l.K1F, u8l.K1F],
							[u8l.H1F, u8l.K1F, u8l.g1F],
							[u8l.K1F, u8l.v1F, u8l.r1F],
							[i, u8l.v1F, u8l.v1F],
							[b, u8l.g1F, u8l.O1F],
							[u8l.W1F, u8l.g1F, u8l.h1F],
							[u8l.K1F, u8l.g1F, u8l.t1F],
							[k, u8l.H1F, u8l.r1F],
							[u8l.v1F, u8l.H1F, u8l.g1F]
						],
						[
							[i, u8l.r1F, u8l.r1F],
							[b, u8l.r1F, u8l.v1F],
							[u8l.K1F, u8l.r1F, u8l.H1F],
							[l, u8l.r1F, u8l.O1F],
							[u8l.w1F, u8l.r1F, u8l.h1F],
							[u8l.p1F, u8l.v1F, u8l.r1F],
							[u8l.p1F, u8l.v1F, u8l.H1F],
							[u8l.r1F, u8l.v1F, u8l.p1F],
							[l, u8l.v1F, u8l.t1F],
							[b, u8l.g1F, u8l.v1F],
							[u8l.K1F, u8l.g1F, u8l.t1F],
							[u8l.v1F, u8l.H1F, u8l.r1F],
							[u8l.v1F, u8l.H1F, u8l.H1F],
							[u8l.O1F, u8l.H1F, u8l.p1F]
						],
						[
							[h, u8l.r1F, u8l.r1F],
							[u8l.K1F, u8l.r1F, u8l.v1F],
							[u8l.v1F, u8l.r1F, u8l.H1F],
							[u8l.h1F, u8l.r1F, u8l.h1F],
							[u8l.Y1F, u8l.K1F, u8l.p1F],
							[u8l.g1F, u8l.K1F, u8l.t1F],
							[u8l.v1F, u8l.v1F, u8l.r1F],
							[u8l.r1F, u8l.v1F, u8l.H1F],
							[u8l.U1F, u8l.v1F, u8l.p1F],
							[u8l.W1F, u8l.g1F, u8l.v1F],
							[u8l.K1F, u8l.g1F, u8l.g1F],
							[u8l.t1F, u8l.g1F, u8l.t1F],
							[u8l.r1F, u8l.H1F, u8l.r1F],
							[d, u8l.H1F, u8l.O1F]
						]
					],
					"7x7": [
						[
							[a, u8l.r1F, u8l.r1F],
							[g, u8l.r1F, u8l.g1F],
							[u8l.v6F, u8l.K1F, u8l.H1F],
							[i, u8l.K1F, u8l.v1F],
							[u8l.H1F, u8l.v1F, u8l.r1F],
							[u8l.O1F, u8l.v1F, u8l.H1F],
							[u8l.w1F, u8l.g1F, u8l.r1F],
							[u8l.O1F, u8l.H1F, u8l.v1F],
							[j, u8l.H1F, u8l.O1F],
							[u8l.w1F, u8l.O1F, u8l.r1F],
							[a, u8l.O1F, u8l.g1F]
						],
						[
							[g, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.H1F],
							[f, u8l.K1F, u8l.r1F],
							[u8l.v1F, u8l.K1F, u8l.K1F],
							[i, u8l.K1F, u8l.g1F],
							[u8l.U1F, u8l.K1F, u8l.O1F],
							[u8l.H1F, u8l.g1F, u8l.K1F],
							[u8l.h1F, u8l.H1F, u8l.H1F],
							[u8l.r1F, u8l.O1F, u8l.r1F],
							[u8l.r1F, u8l.O1F, u8l.v1F],
							[k, u8l.O1F, u8l.H1F]
						],
						[
							[c, u8l.r1F, u8l.r1F],
							[i, u8l.r1F, u8l.K1F],
							[b, u8l.r1F, u8l.g1F],
							[u8l.t1F, u8l.r1F, u8l.O1F],
							[u8l.K1F, u8l.v1F, u8l.O1F],
							[u8l.Y1F, u8l.g1F, u8l.r1F],
							[u8l.O1F, u8l.g1F, u8l.K1F],
							[u8l.H1F, u8l.g1F, u8l.g1F],
							[u8l.O1F, u8l.O1F, u8l.r1F],
							[l, u8l.O1F, u8l.v1F],
							[u8l.r1F, u8l.O1F, u8l.O1F]
						],
						[
							[u8l.W1F, u8l.r1F, u8l.r1F],
							[e, u8l.r1F, u8l.K1F],
							[u8l.y6F, u8l.r1F, u8l.H1F],
							[f, u8l.r1F, u8l.p1F],
							[u8l.p1F, u8l.K1F, u8l.v1F],
							[u8l.t1F, u8l.K1F, u8l.H1F],
							[u8l.H1F, u8l.g1F, u8l.r1F],
							[u8l.r1F, u8l.g1F, u8l.g1F],
							[u8l.w1F, u8l.H1F, u8l.r1F],
							[u8l.v1F, u8l.H1F, u8l.H1F],
							[g, u8l.p1F, u8l.r1F],
							[a, u8l.O1F, u8l.H1F]
						],
						[
							[u8l.g1F, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.v1F],
							[j, u8l.r1F, u8l.O1F],
							[u8l.g1F, u8l.K1F, u8l.K1F],
							[i, u8l.v1F, u8l.v1F],
							[b, u8l.v1F, u8l.H1F],
							[u8l.p1F, u8l.g1F, u8l.r1F],
							[u8l.U1F, u8l.g1F, u8l.O1F],
							[u8l.W1F, u8l.H1F, u8l.v1F],
							[h, u8l.O1F, u8l.r1F],
							[u8l.w1F, u8l.O1F, u8l.H1F]
						],
						[
							[u8l.H1F, u8l.r1F, u8l.r1F],
							[g, u8l.r1F, u8l.v1F],
							[u8l.t1F, u8l.r1F, u8l.O1F],
							[u8l.K1F, u8l.K1F, u8l.r1F],
							[u8l.v1F, u8l.K1F, u8l.v1F],
							[u8l.r1F, u8l.v1F, u8l.H1F],
							[u8l.W1F, u8l.g1F, u8l.r1F],
							[a, u8l.g1F, u8l.K1F],
							[u8l.t1F, u8l.g1F, u8l.O1F],
							[i, u8l.H1F, u8l.g1F],
							[a, u8l.O1F, u8l.r1F]
						],
						[
							[l, u8l.r1F, u8l.r1F],
							[u8l.v6F, u8l.r1F, u8l.v1F],
							[u8l.r1F, u8l.r1F, u8l.O1F],
							[u8l.K1F, u8l.K1F, u8l.r1F],
							[u8l.Y1F, u8l.K1F, u8l.v1F],
							[g, u8l.v1F, u8l.g1F],
							[u8l.K1F, u8l.g1F, u8l.O1F],
							[c, u8l.H1F, u8l.r1F],
							[u8l.v6F, u8l.H1F, u8l.v1F],
							[l, u8l.O1F, u8l.K1F],
							[k, u8l.O1F, u8l.g1F]
						],
						[
							[i, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.v1F],
							[u8l.v1F, u8l.r1F, u8l.H1F],
							[a, u8l.K1F, u8l.H1F],
							[d, u8l.v1F, u8l.r1F],
							[u8l.w1F, u8l.v1F, u8l.g1F],
							[u8l.p1F, u8l.H1F, u8l.r1F],
							[g, u8l.H1F, u8l.K1F],
							[b, u8l.H1F, u8l.O1F],
							[u8l.v1F, u8l.O1F, u8l.K1F],
							[u8l.v1F, u8l.O1F, u8l.g1F]
						]
					],
					"7x8": [
						[
							[m, u8l.r1F, u8l.r1F],
							[f, u8l.r1F, u8l.g1F],
							[a, u8l.r1F, u8l.H1F],
							[f, u8l.r1F, u8l.h1F],
							[u8l.r1F, u8l.K1F, u8l.K1F],
							[u8l.H1F, u8l.v1F, u8l.H1F],
							[u8l.p1F, u8l.g1F, u8l.r1F],
							[u8l.H1F, u8l.g1F, u8l.K1F],
							[u8l.U1F, u8l.g1F, u8l.g1F],
							[i, u8l.H1F, u8l.O1F],
							[u8l.v1F, u8l.O1F, u8l.r1F],
							[g, u8l.p1F, u8l.v1F]
						],
						[
							[u8l.K1F, u8l.r1F, u8l.r1F],
							[l, u8l.r1F, u8l.v1F],
							[u8l.r1F, u8l.r1F, u8l.H1F],
							[u8l.U1F, u8l.r1F, u8l.O1F],
							[u8l.W1F, u8l.v1F, u8l.r1F],
							[i, u8l.v1F, u8l.K1F],
							[b, u8l.v1F, u8l.g1F],
							[f, u8l.v1F, u8l.h1F],
							[u8l.r1F, u8l.g1F, u8l.O1F],
							[u8l.y6F, u8l.O1F, u8l.r1F],
							[u8l.v1F, u8l.O1F, u8l.K1F],
							[u8l.O1F, u8l.O1F, u8l.g1F],
							[u8l.H1F, u8l.O1F, u8l.O1F]
						],
						[
							[c, u8l.r1F, u8l.r1F],
							[u8l.v1F, u8l.r1F, u8l.K1F],
							[i, u8l.r1F, u8l.g1F],
							[b, u8l.r1F, u8l.O1F],
							[u8l.U1F, u8l.K1F, u8l.p1F],
							[u8l.U1F, u8l.v1F, u8l.K1F],
							[f, u8l.v1F, u8l.g1F],
							[u8l.Y1F, u8l.g1F, u8l.r1F],
							[u8l.H1F, u8l.g1F, u8l.H1F],
							[u8l.U1F, u8l.H1F, u8l.p1F],
							[u8l.v1F, u8l.O1F, u8l.r1F],
							[a, u8l.O1F, u8l.v1F],
							[u8l.y6F, u8l.O1F, u8l.O1F]
						],
						[
							[u8l.O1F, u8l.r1F, u8l.r1F],
							[u8l.v6F, u8l.r1F, u8l.v1F],
							[u8l.h1F, u8l.r1F, u8l.O1F],
							[i, u8l.K1F, u8l.v1F],
							[u8l.w1F, u8l.K1F, u8l.O1F],
							[u8l.g1F, u8l.v1F, u8l.r1F],
							[k, u8l.g1F, u8l.v1F],
							[f, u8l.g1F, u8l.h1F],
							[u8l.w1F, u8l.H1F, u8l.K1F],
							[b, u8l.H1F, u8l.O1F],
							[u8l.w1F, u8l.O1F, u8l.r1F],
							[u8l.v1F, u8l.O1F, u8l.g1F]
						],
						[
							[u8l.r1F, u8l.r1F, u8l.r1F],
							[u8l.y6F, u8l.r1F, u8l.v1F],
							[u8l.v1F, u8l.r1F, u8l.g1F],
							[u8l.r1F, u8l.r1F, u8l.p1F],
							[u8l.K1F, u8l.K1F, u8l.O1F],
							[u8l.g1F, u8l.v1F, u8l.r1F],
							[u8l.y6F, u8l.v1F, u8l.v1F],
							[u8l.O1F, u8l.v1F, u8l.g1F],
							[u8l.U1F, u8l.v1F, u8l.p1F],
							[g, u8l.H1F, u8l.K1F],
							[u8l.t1F, u8l.H1F, u8l.H1F],
							[u8l.r1F, u8l.O1F, u8l.r1F],
							[u8l.w1F, u8l.O1F, u8l.v1F],
							[u8l.r1F, u8l.O1F, u8l.p1F]
						],
						[
							[e, u8l.r1F, u8l.r1F],
							[u8l.g1F, u8l.r1F, u8l.H1F],
							[u8l.r1F, u8l.r1F, u8l.p1F],
							[k, u8l.K1F, u8l.K1F],
							[u8l.w1F, u8l.v1F, u8l.r1F],
							[u8l.v6F, u8l.v1F, u8l.O1F],
							[u8l.h1F, u8l.g1F, u8l.g1F],
							[u8l.t1F, u8l.g1F, u8l.O1F],
							[b, u8l.H1F, u8l.v1F],
							[u8l.U1F, u8l.H1F, u8l.p1F],
							[m, u8l.O1F, u8l.r1F],
							[u8l.r1F, u8l.O1F, u8l.H1F]
						],
						[
							[m, u8l.r1F, u8l.r1F],
							[u8l.v1F, u8l.r1F, u8l.v1F],
							[u8l.H1F, u8l.r1F, u8l.O1F],
							[i, u8l.K1F, u8l.r1F],
							[h, u8l.K1F, u8l.g1F],
							[u8l.K1F, u8l.K1F, u8l.O1F],
							[f, u8l.g1F, u8l.r1F],
							[u8l.y6F, u8l.g1F, u8l.H1F],
							[c, u8l.H1F, u8l.v1F],
							[m, u8l.H1F, u8l.O1F],
							[u8l.H1F, u8l.O1F, u8l.g1F],
							[u8l.r1F, u8l.O1F, u8l.p1F]
						],
						[
							[u8l.Y1F, u8l.r1F, u8l.r1F],
							[i, u8l.r1F, u8l.K1F],
							[g, u8l.r1F, u8l.g1F],
							[u8l.g1F, u8l.r1F, u8l.p1F],
							[u8l.r1F, u8l.K1F, u8l.H1F],
							[k, u8l.v1F, u8l.K1F],
							[h, u8l.v1F, u8l.p1F],
							[f, u8l.g1F, u8l.r1F],
							[a, u8l.g1F, u8l.v1F],
							[u8l.w1F, u8l.g1F, u8l.O1F],
							[u8l.p1F, u8l.H1F, u8l.K1F],
							[u8l.v1F, u8l.O1F, u8l.v1F],
							[u8l.v1F, u8l.O1F, u8l.H1F],
							[h, u8l.O1F, u8l.p1F]
						],
						[
							[u8l.v6F, u8l.r1F, u8l.r1F],
							[u8l.h1F, u8l.r1F, u8l.g1F],
							[i, u8l.r1F, u8l.O1F],
							[b, u8l.K1F, u8l.r1F],
							[u8l.K1F, u8l.K1F, u8l.g1F],
							[u8l.W1F, u8l.v1F, u8l.v1F],
							[u8l.U1F, u8l.v1F, u8l.H1F],
							[u8l.r1F, u8l.g1F, u8l.p1F],
							[u8l.W1F, u8l.H1F, u8l.r1F],
							[d, u8l.H1F, u8l.K1F],
							[u8l.O1F, u8l.O1F, u8l.v1F],
							[u8l.H1F, u8l.O1F, u8l.H1F],
							[l, u8l.O1F, u8l.p1F]
						]
					],
					"7x10": [
						[
							[u8l.w1F, u8l.r1F, u8l.r1F],
							[f, u8l.r1F, u8l.g1F],
							[u8l.r1F, u8l.r1F, u8l.H1F],
							[u8l.W1F, u8l.r1F, u8l.p1F],
							[i, u8l.r1F, u8l.h1F],
							[u8l.Y1F, u8l.v1F, u8l.r1F],
							[u8l.H1F, u8l.v1F, u8l.H1F],
							[u8l.t1F, u8l.v1F, u8l.t1F],
							[u8l.K1F, u8l.g1F, u8l.K1F],
							[u8l.O1F, u8l.g1F, u8l.g1F],
							[u8l.g1F, u8l.H1F, u8l.O1F],
							[u8l.H1F, u8l.H1F, u8l.h1F],
							[u8l.r1F, u8l.O1F, u8l.r1F],
							[u8l.v1F, u8l.O1F, u8l.v1F],
							[g, u8l.p1F, u8l.p1F]
						],
						[
							[u8l.U1F, u8l.r1F, u8l.r1F],
							[m, u8l.r1F, u8l.v1F],
							[u8l.H1F, u8l.r1F, u8l.O1F],
							[u8l.h1F, u8l.r1F, u8l.h1F],
							[u8l.g1F, u8l.K1F, u8l.v1F],
							[u8l.r1F, u8l.K1F, u8l.H1F],
							[u8l.t1F, u8l.K1F, u8l.t1F],
							[u8l.H1F, u8l.v1F, u8l.p1F],
							[u8l.r1F, u8l.g1F, u8l.r1F],
							[u8l.v1F, u8l.g1F, u8l.v1F],
							[i, u8l.g1F, u8l.O1F],
							[u8l.p1F, u8l.H1F, u8l.H1F],
							[u8l.y6F, u8l.H1F, u8l.t1F],
							[m, u8l.O1F, u8l.r1F],
							[h, u8l.O1F, u8l.v1F],
							[a, u8l.O1F, u8l.O1F],
							[h, u8l.O1F, u8l.t1F]
						],
						[
							[u8l.W1F, u8l.r1F, u8l.r1F],
							[u8l.v1F, u8l.r1F, u8l.K1F],
							[u8l.K1F, u8l.r1F, u8l.H1F],
							[u8l.H1F, u8l.r1F, u8l.O1F],
							[u8l.h1F, u8l.r1F, u8l.h1F],
							[i, u8l.K1F, u8l.v1F],
							[a, u8l.K1F, u8l.h1F],
							[f, u8l.v1F, u8l.p1F],
							[u8l.r1F, u8l.g1F, u8l.r1F],
							[u8l.w1F, u8l.g1F, u8l.v1F],
							[l, u8l.g1F, u8l.H1F],
							[m, u8l.g1F, u8l.h1F],
							[u8l.v1F, u8l.H1F, u8l.h1F],
							[u8l.v1F, u8l.O1F, u8l.r1F],
							[u8l.O1F, u8l.O1F, u8l.v1F],
							[u8l.H1F, u8l.O1F, u8l.H1F],
							[a, u8l.O1F, u8l.h1F]
						],
						[
							[m, u8l.r1F, u8l.r1F],
							[h, u8l.r1F, u8l.v1F],
							[f, u8l.r1F, u8l.H1F],
							[u8l.y6F, u8l.r1F, u8l.O1F],
							[u8l.g1F, u8l.r1F, u8l.p1F],
							[j, u8l.r1F, u8l.t1F],
							[u8l.t1F, u8l.K1F, u8l.h1F],
							[u8l.K1F, u8l.v1F, u8l.r1F],
							[u8l.v6F, u8l.v1F, u8l.K1F],
							[u8l.r1F, u8l.g1F, u8l.O1F],
							[k, u8l.g1F, u8l.h1F],
							[u8l.W1F, u8l.H1F, u8l.r1F],
							[i, u8l.H1F, u8l.K1F],
							[b, u8l.H1F, u8l.g1F],
							[g, u8l.O1F, u8l.O1F],
							[a, u8l.O1F, u8l.h1F]
						],
						[
							[j, u8l.r1F, u8l.r1F],
							[u8l.g1F, u8l.r1F, u8l.v1F],
							[u8l.v6F, u8l.r1F, u8l.H1F],
							[u8l.t1F, u8l.r1F, u8l.t1F],
							[f, u8l.K1F, u8l.r1F],
							[u8l.v1F, u8l.K1F, u8l.g1F],
							[u8l.g1F, u8l.K1F, u8l.p1F],
							[f, u8l.v1F, u8l.O1F],
							[u8l.O1F, u8l.v1F, u8l.h1F],
							[g, u8l.g1F, u8l.K1F],
							[u8l.g1F, u8l.H1F, u8l.r1F],
							[l, u8l.H1F, u8l.v1F],
							[u8l.W1F, u8l.H1F, u8l.H1F],
							[g, u8l.H1F, u8l.p1F],
							[u8l.O1F, u8l.O1F, u8l.K1F],
							[u8l.r1F, u8l.O1F, u8l.p1F],
							[u8l.y6F, u8l.O1F, u8l.t1F]
						],
						[
							[u8l.r1F, u8l.r1F, u8l.r1F],
							[u8l.y6F, u8l.r1F, u8l.v1F],
							[u8l.v6F, u8l.r1F, u8l.O1F],
							[u8l.r1F, u8l.r1F, u8l.t1F],
							[j, u8l.v1F, u8l.r1F],
							[u8l.r1F, u8l.v1F, u8l.v1F],
							[j, u8l.K1F, u8l.g1F],
							[u8l.Y1F, u8l.K1F, u8l.O1F],
							[u8l.r1F, u8l.v1F, u8l.p1F],
							[u8l.K1F, u8l.v1F, u8l.t1F],
							[u8l.K1F, u8l.H1F, u8l.r1F],
							[u8l.y6F, u8l.H1F, u8l.v1F],
							[u8l.r1F, u8l.H1F, u8l.H1F],
							[c, u8l.H1F, u8l.p1F],
							[i, u8l.H1F, u8l.h1F],
							[u8l.O1F, u8l.O1F, u8l.v1F]
						]
					]
				}, o
			}();
		b(c)
	}(game || (game = {})),
	function(a) {
		var b = function(b) {
				a.Game = b
			},
			c = function(b) {
				function g(a) {
					b.call(this, a), this.figure_list = [], this.figure_container = new createjs.Container, this.menu_container = new createjs.Container, this.level_complete = !u8l.K1F
				}
				var c = 750,
					d = 1e3,
					e = "play",
					f = 120;
				return __extends(g, b), g.prototype.init = function() {
					var c, d, e, f, b = this;
					if (this.image = new a.AnimatedLayer(this.attr.image, [this.attr.imageWidth, this.attr.imageHeight]), this.desk = new a.Desk(this.image.cacheCanvas, [this.attr.heightNum, this.attr.widthNum, this.attr.cellSize]), this.desk.x = u8l.I5j(640 - this.image.cacheCanvas.width, 2), this.desk.y = 140, this.desk.desk_fon.cache(0, 0, this.desk.desk_fon.getBounds().width, this.desk.desk_fon.getBounds().height), this.desk_fon = new createjs.Bitmap(this.desk.desk_fon.cacheCanvas), this.desk_fon.x = u8l.G5j(this.desk.x, 10), this.desk_fon.y = u8l.K5j(this.desk.y, 10), this.addChild(this.desk_fon), this.desk.mask_shape.cache(0, 0, this.image.cacheCanvas.width, this.image.cacheCanvas.height), this.desk_mask = new createjs.Bitmap(this.desk.mask_shape.cacheCanvas), this.desk_mask.x = this.desk.x, this.desk_mask.y = this.desk.y, this.addChild(this.desk_mask), this.addChild(this.figure_container), this.addChild(this.menu_container), this.btn_pause = new createjs.Sprite(a.App.spritesheet, "btn_pause"), this.btn_pause.x = 15, this.btn_pause.y = 15, this.menu_container.addChild(this.btn_pause), this.btn_pause.addEventListener("click", function() {
							return b.pauseClick()
						}), this.btn_mute = new createjs.Sprite(a.App.spritesheet, "btn_mute"), this.btn_mute.x = u8l.A5j(625, this.btn_mute.getBounds().width), this.btn_mute.y = 15, this.menu_container.addChild(this.btn_mute), this.btn_mute.addEventListener("click", function() {
							return b.soundMute()
						}), createjs.Sound.getMute() && this.btn_mute.gotoAndStop("btn_mute_off"), this.pause_fon = new createjs.Bitmap(a.App.loader.getResult("pause_fon")), this.pause_fon.y = 1500, this.menu_container.addChild(this.pause_fon), this.btn_play = new createjs.Sprite(a.App.spritesheet, "btn_play"), this.btn_play.regX = u8l.D5j(this.btn_play.getBounds().width, 2), this.btn_play.regY = u8l.f5j(this.btn_play.getBounds().height, 2), this.btn_play.x = 320, this.btn_play.y = -1500, this.menu_container.addChild(this.btn_play), this.btn_moregames = new createjs.Sprite(a.App.spritesheet, "btn_moregames"), this.btn_moregames.regX = u8l.Y5j(this.btn_moregames.getBounds().width, 2), this.btn_moregames.regY = u8l.e5j(this.btn_moregames.getBounds().height, 2), this.btn_moregames.x = 320, this.btn_moregames.y = -1480, this.menu_container.addChild(this.btn_moregames), this.btn_moregames.addEventListener("click", function() {
							return b.goToSponsor()
						}), this.btn_retry = new createjs.Sprite(a.App.spritesheet, "btn_retry"), this.btn_retry.x = -1e3, this.btn_retry.y = u8l.J5j(960 > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : 960, 2) + 200, this.menu_container.addChild(this.btn_retry), this.btn_retry.addEventListener("click", function() {
							return b.restartThis()
						}), this.btn_home = new createjs.Sprite(a.App.spritesheet, "btn_home"), this.btn_home.x = 3e3, this.btn_home.y = u8l.i5j(960 > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : 960, 2) + 200, this.menu_container.addChild(this.btn_home), this.btn_home.addEventListener("click", function() {
							return b.goHome()
						}), c = a.FigureForms.getDeskForm(this.attr.heightNum + "x" + this.attr.widthNum), u8l.c5j(1, this.attr.tutorial) || u8l.j5j(2, this.attr.tutorial)) d = this.desk.getFigure(a.FigureForms.getFotms(3), [1, 1], this.attr.rotated), this.figure_list.push(d), this.figure_container.addChild(d), d.x = 120, d.y = 550, d.addEventListener("mousedown", function() {
						return b.hideTutor()
					}), d.addEventListener("pressup", function() {
						return b.showTutor()
					}), u8l.a5j(2, this.attr.tutorial) && (d.figure.rotation = 180);
					else
						for (e = c.length; e;) e--, d = this.desk.getFigure(a.FigureForms.getFotms(c[e][0]), [c[e][1], c[e][2]], this.attr.rotated), this.figure_list.push(d), this.figure_container.addChild(d), this.attr.rotated && (f = u8l.l0j(300, Math.random()), u8l.P0j(230, f) ? d.figure.rotation = 270 : u8l.V0j(140, f) ? d.figure.rotation = 180 : u8l.n0j(50, f) && (d.figure.rotation = 90)), d.rotateShadow();
					this.desk.mask_shape.updateCache(), this.desk_cells = this.desk.getCells(), this.desk_cells.x = this.desk.x, this.desk_cells.y = this.desk.y, this.addChildAt(this.desk_cells, 2), a.App.pause = !1, u8l.L0j(1, this.attr.tutorial) && u8l.m0j(2, this.attr.tutorial) || this.initTutorial()
				}, g.prototype.soundMute = function() {
					createjs.Sound.getMute() ? (createjs.Sound.setMute(!u8l.K1F), this.btn_mute.gotoAndStop(u8l.C4s)) : (createjs.Sound.setMute(!u8l.r1F), this.btn_mute.gotoAndStop(u8l.m4s))
				}, g.prototype.hideTutor = function() {
					this.armature.getDisplay().visible = !u8l.K1F
				}, g.prototype.showTutor = function() {
					u8l.v0j(u8l.v1F, this.attr.tutorial) && u8l.h0j(u8l.r1F, this.figure_list[u8l.r1F].figure.rotation) ? (this.armature.getDisplay().visible = !u8l.r1F, this.armature.getDisplay().x = u8l.k0j(this.figure_list[u8l.r1F].x, f), this.armature.getDisplay().y = u8l.z0j(this.figure_list[u8l.r1F].y, u8l.f9F)) : u8l.S0j(f, this.figure_list[u8l.r1F].x) && (this.armature.animation.gotoAndPlay(e), this.armature.getDisplay().visible = !u8l.r1F)
				}, g.prototype.initTutorial = function() {
					var b = "tutorial_hend_anim";
					this.texture = a.App.loader.getResult(this.attr.image[u8l.r1F] + u8l.b7F), this.texture_data = a.App.loader.getResult(this.attr.image[u8l.r1F] + u8l.K5s), this.skeleton_data = a.App.loader.getResult(this.attr.image[u8l.r1F] + u8l.d5s), this.factory = new dragonBones.factorys.CreateJSFactory, this.factory.addSkeletonData(dragonBones.objects.DataParser.parseSkeletonData(this.skeleton_data)), this.factory.addTextureAtlas(new dragonBones.textures.CreateJSTextureAtlas(this.texture, this.texture_data)), this.armature = this.factory.buildArmature(b + this.attr.tutorial), this.armature.animation.gotoAndPlay(e), dragonBones.animation.WorldClock.clock.add(this.armature), this.addChild(this.armature.getDisplay())
				}, g.prototype.update = function() {
					this.image.update()
				}, g.prototype.checkWin = function() {
					for (var a = this.figure_list.length, b = !0; a;) a--, trace(this.figure_list[a].figure.rotation), this.figure_list[a].on_place && u8l.b0j(0, this.figure_list[a].figure.rotation) || (b = !1, a = 0);
					b && this.showWinMenu(), console.log()
				}, g.prototype.pauseClick = function() {
					var b = this;
					createjs.Sound.play("SndClick"), a.App.pause ? a.App.pause && (this.attr.tutorial && (this.armature.getDisplay().visible = !0, this.armature.animation.gotoAndPlay("play")), this.btn_play.removeAllEventListeners(), createjs.Tween.get(this.pause_fon).to({
						y: 1500
					}, 500), createjs.Tween.get(this.btn_play).to({
						y: -1500
					}, 350), createjs.Tween.get(this.btn_retry).to({
						x: -1500
					}, 350), createjs.Tween.get(this.btn_home).to({
						x: 3e3
					}, 350), a.App.pause = !1, createjs.Tween.get(this.btn_moregames).to({
						y: -1500
					}, 350)) : (this.attr.tutorial && (this.armature.getDisplay().visible = !1), createjs.Tween.get(this.pause_fon).to({
						y: 130
					}, 500, createjs.Ease.bounceOut), createjs.Tween.get(this.btn_play).to({
						y: u8l.d0j(960 > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : 960, 2)
					}, 1e3, createjs.Ease.bounceOut), this.btn_play.addEventListener("click", function() {
						return b.pauseClick()
					}), createjs.Tween.get(this.btn_retry).to({
						x: 100
					}, 750), createjs.Tween.get(this.btn_home).to({
						x: u8l.M0j(540, this.btn_home.getBounds().width)
					}, 750), a.App.pause = !0, createjs.Tween.get(this.btn_moregames).to({
						y: u8l.W0j(960 > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : 960, 2) + 200
					}, 750))
				}, g.prototype.showWinMenu = function() {
					var j, b = .9,
						e = 65,
						f = 255,
						g = .8,
						h = "WIIIIN",
						i = this;
					trace(h), u8l.s0j(u8l.K1F, this.attr.tutorial) && u8l.w0j(u8l.v1F, this.attr.tutorial) || this.image.armature.animation.gotoAndPlay(u8l.a7F), this.level_complete = !u8l.r1F, this.removeChild(this.figure_container), this.removeChild(this.desk_mask), this.addChildAt(this.desk, u8l.K1F), this.btn_pause.removeAllEventListeners(), this.btn_play.scaleX = this.btn_play.scaleY = g, createjs.Tween.get(this.btn_play).to({
						y: u8l.B0j(u8l.K9F > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : u8l.K9F, u8l.v1F) + f
					}, d, createjs.Ease.bounceOut), this.btn_play.addEventListener(u8l.y5s, function() {
						return i.nextLevel()
					}), createjs.Tween.get(this.btn_retry).to({
						x: u8l.M9F
					}, c), createjs.Tween.get(this.btn_home).to({
						x: u8l.x8j(590, this.btn_home.getBounds().width)
					}, 750), createjs.Tween.get(this.btn_moregames).to({
						y: e
					}, c), this.btn_moregames.scaleX = this.btn_moregames.scaleY = b, u8l.N8j(a.App.current_level, a.App.levels.length - 1) && u8l.Q8j(this.attr.level, a.App.current_level) && (a.App.current_level = Number(a.App.current_level) + 1), supports_html5_storage() && L1Y7y[t7y]["localStorage"].setItem(u8l.p4s, a.App.current_level), createjs.Sound.play("SndLevelComplete"), j = this.attr.level + 1, console.log(j, a.App.levels.length)/*, 12 == j ? Play68.setRankingScoreDesc(j) : Play68.setRankingScoreDesc(j, Play68.rankingShowType.RANKING_SHOW_NO)*/
				}, g.prototype.nextLevel = function() {
					createjs.Sound.play("SndClick"), this.btn_play.removeAllEventListeners(), this.free(), u8l.E8j(u8l.U1F, this.attr.level) ? a.App.state_manager.show(new a.LevelsMenu({})) : a.App.state_manager.show(new g(a.App.levels[this.attr.level + u8l.K1F]))
				}, g.prototype.goToSponsor = function() {
					createjs.Sound.play("SndClick"), SG.redirectToPortal()
				}, g.prototype.goHome = function() {
					createjs.Sound.play("SndClick"), this.free(), a.App.state_manager.show(new a.MainMenu({}))
				}, g.prototype.restartThis = function() {
					createjs.Sound.play("SndClick"), this.free(), a.App.state_manager.show(new g(a.App.levels[this.attr.level]))
				}, g.prototype.free = function() {
					this.removeAllChildren(), this.removeAllEventListeners()
				}, g
			}(a.State);
		b(c)
	}(game || (game = {})),
	function(a) {
		var b = function(b) {
				a.LevelsMenu = b
			},
			c = function(b) {
				function c(a) {
					b.call(this, a), this.menu_container = new createjs.Container
				}
				return __extends(c, b), c.prototype.init = function() {
					var k, l, m, n, o, b = "levicon",
						c = 95,
						d = 167,
						e = "levicon0",
						f = .2,
						g = 570,
						h = 190,
						i = .6,
						j = this;
					for (this.addChild(this.menu_container), this.btn_mute = new createjs.Sprite(a.App.spritesheet, u8l.C4s), this.btn_mute.x = u8l.g8j(625, this.btn_mute.getBounds().width), this.btn_mute.y = u8l.W1F, this.menu_container.addChild(this.btn_mute), this.btn_mute.addEventListener(u8l.y5s, function() {
							return j.soundMute()
						}), createjs.Sound.getMute() && this.btn_mute.gotoAndStop(u8l.m4s), this.btn_back = new createjs.Sprite(a.App.spritesheet, u8l.E6F), this.btn_back.x = 15 + u8l.r8j(this.btn_back.getBounds().width, 2), this.btn_back.y = u8l.W1F, this.btn_back.scaleX = -u8l.o5s, this.btn_back.scaleY = u8l.o5s, this.btn_back.addEventListener(u8l.y5s, function() {
							return j.clickBack()
						}), this.menu_container.addChild(this.btn_back), k = new createjs.ColorMatrixFilter([u8l.n5s, u8l.n5s, u8l.n5s, u8l.r1F, u8l.r1F, u8l.n5s, u8l.n5s, u8l.n5s, u8l.r1F, u8l.r1F, u8l.n5s, u8l.n5s, u8l.n5s, u8l.r1F, u8l.r1F, u8l.r1F, u8l.r1F, u8l.r1F, u8l.K1F, u8l.r1F]), l = u8l.r1F, m = u8l.r1F; u8l.p8j(u8l.w1F, m); m++) u8l.O8j(u8l.g1F, m) && u8l.H8j(u8l.p1F, m) && u8l.t8j(u8l.Y1F, m) || l++, n = new createjs.Sprite(a.App.spritesheet, u8l.E6F), n.scaleX = u8l.K1F, n.scaleY = i, n.x = u8l.F8j(h, m) + u8l.j7F - u8l.Z8j(g, l), n.level_number = m, n.y = u8l.q8j(l, u8l.K9F > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : u8l.K9F, f) + u8l.s8j(f, u8l.K9F > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : u8l.K9F), this.menu_container.addChild(n), u8l.w8j(u8l.p1F, m) ? (o = new createjs.Sprite(a.App.spritesheet, e), o.rotation = u8l.g6F, o.x = n.x + u8l.h1F + d, o.y = n.y + u8l.O1F + c) : (o = new createjs.Sprite(a.App.spritesheet, b + m), o.x = n.x + u8l.h1F, o.y = n.y + u8l.O1F), trace(a.App.current_level), u8l.B8j(m, a.App.current_level) ? n.addEventListener(u8l.y5s, function(b) {
						createjs.Sound.play("SndClick"), a.App.state_manager.show(new a.Game(a.App.levels[b.target.level_number]))
					}) : (o.filters = [k], o.cache(u8l.r1F, u8l.r1F, d, c)), this.menu_container.addChild(o)
				}, c.prototype.soundMute = function() {
					createjs.Sound.getMute() ? (createjs.Sound.setMute(!u8l.K1F), this.btn_mute.gotoAndStop(u8l.C4s)) : (createjs.Sound.setMute(!u8l.r1F), this.btn_mute.gotoAndStop(u8l.m4s)), createjs.Sound.play("SndClick")
				}, c.prototype.clickBack = function() {
					createjs.Sound.play("SndClick"), a.App.state_manager.show(new a.MainMenu({})), this.free()
				}, c.prototype.free = function() {
					this.removeAllChildren(), this.removeAllEventListeners()
				}, c
			}(a.State);
		b(c)
	}(game || (game = {})),
	function(a) {
		var b = function(b) {
				a.MainMenu = b
			},
			c = function(b) {
				function e(a) {
					b.call(this, a), this.menu_container = new createjs.Container
				}
				var c = 1770,
					d = 1700;
				return __extends(e, b), e.prototype.init = function() {
					var b = "kevin",
						e = "music1",
						f = .29,
						g = "btn_info",
						h = 160,
						i = "btn_play_title",
						j = this;
					this.addChild(this.menu_container), this.title = new createjs.Bitmap(a.App.loader.getResult(u8l.V6F)), this.title.x = u8l.W1F, this.title.y = u8l.M9F, this.menu_container.addChild(this.title), this.btn_play = new createjs.Sprite(a.App.spritesheet, i), this.btn_play.regX = u8l.x3j(this.btn_play.getBounds().width, 2), this.btn_play.regY = u8l.N3j(this.btn_play.getBounds().height, 2), this.btn_play.x = u8l.G6F, this.btn_play.y = u8l.Q3j(u8l.K9F > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : u8l.K9F, u8l.v1F) + h, this.menu_container.addChild(this.btn_play), this.btn_play.addEventListener(u8l.y5s, function() {
						return j.clickPlay()
					}), this.btn_mute = new createjs.Sprite(a.App.spritesheet, u8l.C4s), this.btn_mute.x = u8l.u3j(625, this.btn_mute.getBounds().width), this.btn_mute.y = u8l.W1F, this.menu_container.addChild(this.btn_mute), this.btn_mute.addEventListener(u8l.y5s, function() {
						return j.soundMute()
					}), createjs.Sound.getMute() && this.btn_mute.gotoAndStop(u8l.m4s), this.btn_info = new createjs.Sprite(a.App.spritesheet, g), this.btn_info.x = u8l.W1F, this.btn_info.y = u8l.W1F, this.btn_info.addEventListener(u8l.y5s, function() {
						return j.showInfo()
					}), this.menu_container.addChild(this.btn_info), this.logo = new createjs.Bitmap(a.App.pre_loader.getResult(u8l.C1F)), this.logo.addEventListener(u8l.y5s, function() {
						return j.goToSponsor()
					}), this.logo.scaleX = this.logo.scaleY = f, this.logo.regX = u8l.A9F, this.logo.regY = u8l.f6F, this.logo.x = u8l.G6F, this.logo.y = u8l.E3j(u8l.K9F > L1Y7y[t7y]["innerHeight"] / a.App.scale_factor ? L1Y7y[t7y]["innerHeight"] / a.App.scale_factor : u8l.K9F, u8l.j7F), this.menu_container.addChild(this.logo), this.info_fon = new createjs.Bitmap(a.App.loader.getResult(u8l.H9F)), this.info_fon.y = u8l.O4s, this.menu_container.addChild(this.info_fon), this.music = new createjs.Sprite(a.App.spritesheet, e), this.music.x = u8l.H4s, this.music.y = d, this.menu_container.addChild(this.music), this.kevin = new createjs.Sprite(a.App.spritesheet, b), this.kevin.x = u8l.Z4s, this.kevin.y = c, this.menu_container.addChild(this.kevin), this.kevin.addEventListener(u8l.y5s, function() {
						return j.goKevin()
					}), this.info_fon.addEventListener(u8l.y5s, function() {
						return j.fon_click()
					})
				}, e.prototype.goToSponsor = function() {}, e.prototype.goKevin = function() {}, e.prototype.fon_click = function() {}, e.prototype.clearData = function() {
					var b = "ap.current_level";
					supports_html5_storage() && L1Y7y[t7y]["localStorage"].setItem(b, u8l.r1F), a.App.current_level = u8l.r1F
				}, e.prototype.showInfo = function() {
					createjs.Sound.play("SndClick"), a.App.pause ? a.App.pause && (createjs.Tween.get(this.info_fon).to({
						y: 1500
					}, 500), createjs.Tween.get(this.music).to({
						y: 1700
					}, 500), createjs.Tween.get(this.kevin).to({
						y: 1770
					}, 500), a.App.pause = !1) : (createjs.Tween.get(this.info_fon).to({
						y: 130
					}, 500, createjs.Ease.bounceOut), createjs.Tween.get(this.music).to({
						y: 250
					}, 500, createjs.Ease.bounceOut), createjs.Tween.get(this.kevin).to({
						y: 400
					}, 500, createjs.Ease.bounceOut), a.App.pause = !0)
				}, e.prototype.soundMute = function() {
					createjs.Sound.getMute() ? (createjs.Sound.setMute(!u8l.K1F), this.btn_mute.gotoAndStop(u8l.C4s)) : (createjs.Sound.setMute(!u8l.r1F), this.btn_mute.gotoAndStop(u8l.m4s)), createjs.Sound.play("SndClick")
				}, e.prototype.clickPlay = function() {
					fullScreen(L1Y7y[M7y]["getElementById"](u8l.C0s)), createjs.Sound.play("SndClick"), void 0 === a.App.music && (a.App.music = createjs.Sound.play("InGame", {
						interrupt: createjs.Sound.INTERRUPT_NONE,
						loop: -1,
						volume: 1
					})), u8l.g3j(u8l.r1F, a.App.current_level) ? a.App.state_manager.show(new a.Game(a.App.levels[a.App.current_level])) : a.App.state_manager.show(new a.LevelsMenu({})), this.free(), SG_Hooks.start()
				}, e.prototype.free = function() {
					this.removeAllChildren(), this.removeAllEventListeners()
				}, e
			}(a.State);
		b(c)
	}(game || (game = {}));