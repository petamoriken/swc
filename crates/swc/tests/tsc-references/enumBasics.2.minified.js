//// [enumBasics.ts]
var E2, E3, E4, E5, E6, E7, E8, E9, E1, E11, E31, E41, E71, E81;
(E1 = E11 = {})[E1.A = 0] = "A", E1[E1.B = 1] = "B", E1[E1.C = 2] = "C", E11[E11.A], (E2 = {})[E2.A = 1] = "A", E2[E2.B = 2] = "B", E2[E2.C = 3] = "C", (E3 = E31 = {})[E3.X = 3] = "X", E3[E3.Y = 7] = "Y", E3[E3.Z = NaN] = "Z", (E4 = E41 = {})[E4.X = 0] = "X", E4[E4.Y = 1] = "Y", E4[E4.Z = 3] = "Z", (E5 = {})[E5.A = 0] = "A", E5[E5.B = 3] = "B", E5[E5.C = 4] = "C", (E6 = {})[E6.A = 0] = "A", E6[E6.B = 0] = "B", E6[E6.C = 1] = "C", (E7 = E71 = {})[E7.A = 'foo'.foo] = "A", (E8 = E81 = {})[E8.B = 'foo'.foo] = "B", (E9 = {})[E9.A = 0] = "A", E9[E9.B = 0] = "B", E81.B, E71.A, E41.Z, E31.X, E31.Z;
