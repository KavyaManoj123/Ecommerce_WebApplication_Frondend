import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { loginUser, registerUser } from '../features/auth/authThunks';
import { useToast } from '../hooks/useToast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const { loading, error, user } = useAppSelector(state => state.auth);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (isSignup) {
      dispatch(registerUser({ name, email, password }));
    } else {
      dispatch(loginUser({ email, password }));
    }
  };

  useEffect(() => {
    if (error) {
      showToast('error', error);
    }
  }, [error, showToast]);

  useEffect(() => {
    if (user && user.success === true) {
      showToast('success', `${user.message}!`);
      navigate('/home'); // 👈 redirect to homepage
    }
  }, [user, showToast, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-5xl shadow-lg rounded-2xl overflow-hidden bg-white">
        {/* Left Section - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center flex-1 bg-gradient-to-br from-orange-500 to-orange-400 text-white p-10">
          <h1 className="text-3xl font-bold mb-4">
            Simplify management with our dashboard.
          </h1>
          <p className="text-lg text-white/90">
            Simplify your e-commerce management with our user-friendly admin
            dashboard.
          </p>
          <div className="mt-10">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/business-man-holding-coffee-6939843-5681819.png"
              alt="Illustration"
              className="w-56 h-auto"
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 flex items-center justify-center p-10">
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full text-white font-bold">
                E
              </div>
              <span className="text-lg font-semibold text-gray-700">
                E Spurt
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-800">
              {isSignup ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-sm text-gray-500">
              {isSignup
                ? 'Please sign up to continue'
                : 'Please login to your account'}
            </p>

            {/* Signup needs Name field */}
            {isSignup && (
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            )}

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Forgot password (only in login mode) */}
            {!isSignup && (
              <div className="text-right">
                <a href="#" className="text-sm text-orange-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition disabled:opacity-50"
            >
              {loading
                ? isSignup
                  ? 'Signing up...'
                  : 'Signing in...'
                : isSignup
                ? 'Sign Up'
                : 'Login'}
            </button>

            {/* Divider (only show in login mode) */}
            {!isSignup && (
              <>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-sm text-gray-400">Or Login with</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    className="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50"
                  >
                    <img
                      src="https://www.svgrepo.com/show/355037/google.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50"
                  >
                    <img
                      src="https://www.svgrepo.com/show/448224/facebook.svg"
                      alt="Facebook"
                      className="w-5 h-5"
                    />
                    Facebook
                  </button>
                </div>
              </>
            )}

            {/* Toggle between login & signup */}
            <p className="text-sm text-center text-gray-500">
              {isSignup ? (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignup(false)}
                    className="text-orange-500 font-medium hover:underline"
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  Don’t have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignup(true)}
                    className="text-orange-500 font-medium hover:underline"
                  >
                    Signup
                  </button>
                </>
              )}
            </p>

            {/* Error & Success */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            {user && (
              <p className="text-green-600 text-sm text-center">
                Welcome {user.name}!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
